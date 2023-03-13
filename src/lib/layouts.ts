import { FileEntry, readDir } from "@tauri-apps/api/fs";
import { resolveResource } from "@tauri-apps/api/path";
import { convertFileSrc } from "@tauri-apps/api/tauri";

export type Layouts = {
  [key: string]: string[] | Layouts;
};

async function normalizeEntries(entries: FileEntry[]) {
  if (!entries[0].children) {
    const array = [];
    for (const entry of entries) {
      const path = convertFileSrc(entry.path);
      array.push(path);
    }
    return array;
  }

  const result = {} as Layouts;
  for (const entry of entries) {
    if (!entry.name) continue;
    if (!entry.children) continue;
    result[entry.name] = await normalizeEntries(entry.children);
  }

  return result;
}

export async function readLayouts() {
  const basePath = await resolveResource("data/layouts");
  const subdirs = await readDir(basePath, { recursive: true });
  return (await normalizeEntries(subdirs)) as Layouts;
}
