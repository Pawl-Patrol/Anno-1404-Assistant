import beggarsUrl from "./assets/icons/Beggar.png";
import citizensUrl from "./assets/icons/Citizen.png";
import envoysUrl from "./assets/icons/Envoys.png";
import noblemenUrl from "./assets/icons/Noblemen.png";
import nomadsUrl from "./assets/icons/Nomads.png";
import patriciansUrl from "./assets/icons/Patrician.png";
import peasantsUrl from "./assets/icons/Peasant.png";

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
