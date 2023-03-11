import { invoke } from "@tauri-apps/api/tauri";
import { PointerPath } from "./game-versions";

type RawProcess = {
  name: string;
  pid: number;
  base_address_lo: number;
  base_address_hi: number;
};

export class Process {
  name: string;
  pid: number;
  baseAddress: bigint;

  constructor(raw: RawProcess) {
    this.name = raw.name;
    this.pid = raw.pid;
    this.baseAddress =
      (BigInt(raw.base_address_hi) << 32n) + BigInt(raw.base_address_lo);
  }

  async readMemory(baseAddress: bigint, size: number) {
    const baseAddressLo = Number(baseAddress & 0xffffffffn);
    const baseAddressHi = Number(baseAddress >> 32n);
    return await invoke<number[]>("read_process_memory", {
      pid: this.pid,
      baseAddressLo,
      baseAddressHi,
      size,
    });
  }

  async readInteger(address: bigint, size: number) {
    const result = await this.readMemory(address, size);
    return result.reduceRight((acc, byte) => (acc << 8n) + BigInt(byte), 0n);
  }

  static async listProcesses() {
    return await invoke<RawProcess[]>("list_processes").then((list) =>
      list.map((raw) => new Process(raw))
    );
  }

  compare(other: Process) {
    return this.name.localeCompare(other.name);
  }

  async traversePointerPath(path: PointerPath) {
    let address = this.baseAddress + path[0];
    for (const offset of path.slice(1)) {
      const value = await this.readInteger(address, 8);
      address = value + offset;
    }
    return address;
  }
}
