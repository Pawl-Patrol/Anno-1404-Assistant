import { consumption } from "./consumption";
import { Item } from "./items";
import { Population } from "./population";
import { typesafeEntries } from "./util";

export type PopulationState = Record<Population, number>;
export type ConsumptionState = Record<Item, number>;

export function getEmptyPopulationState() {
  return {
    [Population.Beggars]: 0,
    [Population.Citizens]: 0,
    [Population.Peasants]: 0,
    [Population.Patricians]: 0,
    [Population.Noblemen]: 0,
    [Population.Nomads]: 0,
    [Population.Envoys]: 0,
  } satisfies PopulationState;
}

export function calculateConsumption(population: PopulationState) {
  const result: ConsumptionState = {} as any;

  for (const [populationKey, populationValue] of typesafeEntries(consumption)) {
    console.log(typeof populationKey, population, population[populationKey]);
    const populationTotal = population[populationKey];

    for (const [itemKey, itemValue] of typesafeEntries(populationValue)) {
      result[itemKey] ??= 0;
      if (populationTotal < itemValue!.depends) continue;
      result[itemKey] += populationTotal / itemValue!.amount;
    }
  }

  // the only exception
  if (population[Population.Noblemen] < 3000) {
    result["Candlesticks"] = 0;
  }

  return result;
}
