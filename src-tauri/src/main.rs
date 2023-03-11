use serde::{Deserialize, Serialize};
use windows::Win32::Foundation::*;
use windows::Win32::System::Diagnostics::ToolHelp::*;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            list_processes,
            read_process_memory,
            toggle_always_on_top
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn take_snapshot(mode: CREATE_TOOLHELP_SNAPSHOT_FLAGS, pid: u32) -> Result<HANDLE, String> {
    let result = unsafe { CreateToolhelp32Snapshot(mode, pid) };
    if let Ok(snapshot) = result {
        if snapshot.is_invalid() {
            return Err("Failed to create snapshot. Snapshot is invalid.".to_string());
        }
        return Ok(snapshot);
    }
    Err(result.unwrap_err().to_string())
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Process {
    name: String,
    pid: u32,
    base_address_lo: u32,
    base_address_hi: u32,
}

#[tauri::command]
fn list_processes() -> Result<Vec<Process>, String> {
    let snapshot = take_snapshot(TH32CS_SNAPPROCESS, 0)?;

    let mut entry = PROCESSENTRY32W::default();
    entry.dwSize = std::mem::size_of::<PROCESSENTRY32W>() as u32;

    let mut processes = vec![];

    if !unsafe { Process32FirstW(snapshot, &mut entry) }.as_bool() {
        return Err("Failed to get first process".to_string());
    }

    loop {
        let name = String::from_utf16_lossy(entry.szExeFile.as_slice())
            .trim_end_matches(char::from(0))
            .to_string();
        let pid = entry.th32ProcessID;

        let mut module_entry = MODULEENTRY32W::default();
        module_entry.dwSize = std::mem::size_of::<MODULEENTRY32W>() as u32;

        if let Ok(module_snapshot) = take_snapshot(TH32CS_SNAPMODULE, pid) {
            if !unsafe { Module32FirstW(module_snapshot, &mut module_entry) }.as_bool() {
                return Err("Failed to get first module".to_string());
            }

            let base_address = module_entry.modBaseAddr as u64;
            let base_address_lo = (base_address & 0xFFFFFFFF).try_into().unwrap();
            let base_address_hi = (base_address >> 32).try_into().unwrap();

            processes.push(Process {
                name,
                pid,
                base_address_lo,
                base_address_hi,
            });
        }

        if !unsafe { Process32NextW(snapshot, &mut entry) }.as_bool() {
            break;
        }
    }

    Ok(processes)
}

#[tauri::command]
fn read_process_memory(
    pid: u32,
    base_address_lo: u32,
    base_address_hi: u32,
    size: usize,
) -> Result<Vec<u8>, String> {
    let base_address = (u64::from(base_address_hi) << 32) | u64::from(base_address_lo);
    let buffer = vec![0u8; size];
    if unsafe {
        Toolhelp32ReadProcessMemory(
            pid,
            base_address as *const _,
            buffer.as_ptr() as *mut _,
            size,
            std::ptr::null_mut(),
        )
    }
    .as_bool()
    {
        return Ok(buffer);
    }
    Err("Failed to read process memory".to_string())
}

#[tauri::command]
fn toggle_always_on_top(window: tauri::Window, always_on_top: bool) -> Result<(), String> {
    if let Err(result) = window.set_always_on_top(always_on_top) {
        return Err(result.to_string());
    }
    Ok(())
}
