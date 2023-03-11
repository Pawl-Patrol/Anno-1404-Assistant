export type PointerPath = [bigint, ...bigint[]];

export type GameVersion = {
  name: string;
  version: string;
  pointerPath: PointerPath;
};

export const gameVersions: GameVersion[] = [
  {
    name: "Anno 1404 Venice (History Edition)",
    version: "v4.00.4253/1.5231.951665",
    pointerPath: [0x02099b08n, 0x8e4n],
  },
];
