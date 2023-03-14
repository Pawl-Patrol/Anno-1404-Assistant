import { Population } from "../populationEnum";
import beggarsUrl from "./icons/Beggar.png";
import citizensUrl from "./icons/Citizen.png";
import envoysUrl from "./icons/Envoys.png";
import noblemenUrl from "./icons/Noblemen.png";
import nomadsUrl from "./icons/Nomads.png";
import patriciansUrl from "./icons/Patrician.png";
import peasantsUrl from "./icons/Peasant.png";

export const population = {
  [Population.Beggars]: beggarsUrl,
  [Population.Peasants]: peasantsUrl,
  [Population.Citizens]: citizensUrl,
  [Population.Patricians]: patriciansUrl,
  [Population.Noblemen]: noblemenUrl,
  [Population.Nomads]: nomadsUrl,
  [Population.Envoys]: envoysUrl,
} satisfies Record<Population, string>;
