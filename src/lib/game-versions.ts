import { Population } from "./populationEnum";

export type PointerPath = [bigint, ...bigint[]];

export type GameVersion = {
  name: string;
  version: string;
  pointerPath: PointerPath;
  populationOffsets: Record<Population, bigint>;
};

export const gameVersions: GameVersion[] = [
  {
    name: "Anno 1404 (History Edition)",
    version: "v3.00.4250",
    pointerPath: [0x01f15350n, 0x8d4n],
    populationOffsets: [-32n, 160n, 192n, 224n, 256n, 64n, 96n],
  },
  {
    name: "Anno 1404 Venice (History Edition)",
    version: "v4.00.4253",
    pointerPath: [0x02099b08n, 0x8e4n],
    populationOffsets: [0n, 160n, 192n, 224n, 256n, 64n, 96n],
  },
];
