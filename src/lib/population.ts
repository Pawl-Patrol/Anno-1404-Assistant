import beggarsUrl from "./assets/Beggar.png";
import citizensUrl from "./assets/Citizen.png";
import envoysUrl from "./assets/Envoys.png";
import noblemenUrl from "./assets/Noblemen.png";
import nomadsUrl from "./assets/Nomads.png";
import patriciansUrl from "./assets/Patrician.png";
import peasantsUrl from "./assets/Peasant.png";

export const population = {
  Beggars: beggarsUrl,
  Peasants: peasantsUrl,
  Citizens: citizensUrl,
  Patricians: patriciansUrl,
  Noblemen: noblemenUrl,
  Nomads: nomadsUrl,
  Envoys: envoysUrl,
};
export type Population = keyof typeof population;
