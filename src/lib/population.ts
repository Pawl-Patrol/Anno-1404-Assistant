import beggarsUrl from "./assets/icons/Beggar.png";
import citizensUrl from "./assets/icons/Citizen.png";
import envoysUrl from "./assets/icons/Envoys.png";
import noblemenUrl from "./assets/icons/Noblemen.png";
import nomadsUrl from "./assets/icons/Nomads.png";
import patriciansUrl from "./assets/icons/Patrician.png";
import peasantsUrl from "./assets/icons/Peasant.png";

export enum Population {
  Beggars = 0,
  Peasants = 1,
  Citizens = 2,
  Patricians = 3,
  Noblemen = 4,
  Nomads = 5,
  Envoys = 6,
}

export const population = {
  [Population.Beggars]: beggarsUrl,
  [Population.Peasants]: peasantsUrl,
  [Population.Citizens]: citizensUrl,
  [Population.Patricians]: patriciansUrl,
  [Population.Noblemen]: noblemenUrl,
  [Population.Nomads]: nomadsUrl,
  [Population.Envoys]: envoysUrl,
};
