import { Population } from "./population";

export const populationOffsets = {
  Beggars: 32n,
  Nomads: 96n,
  Envoys: 128n,
  Peasants: 192n,
  Citizens: 224n,
  Patricians: 256n,
  Noblemen: 288n,
} satisfies Record<Population, bigint>;
