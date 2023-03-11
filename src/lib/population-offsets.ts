import { Population } from "./population";

export const populationOffsets = {
  Beggars: 0n,
  Nomads: 64n,
  Envoys: 96n,
  Peasants: 160n,
  Citizens: 192n,
  Patricians: 224n,
  Noblemen: 256n,
} satisfies Record<Population, bigint>;
