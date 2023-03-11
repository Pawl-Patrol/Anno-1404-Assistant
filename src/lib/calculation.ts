import { consumption } from "./consumption";
import { Item } from "./items";
import { Population } from "./population";
import { typesafeEntries } from "./util";

export type PopulationState = Record<Population, number>;
export type ConsumptionState = Record<Item, number>;

export function getEmptyPopulationState() {
  return {
    Beggars: 0,
    Citizens: 0,
    Envoys: 0,
    Noblemen: 0,
    Nomads: 0,
    Patricians: 0,
    Peasants: 0,
  } satisfies PopulationState;
}

export function calculateConsumption(population: PopulationState) {
  const result: ConsumptionState = {} as any;

  for (const [populationKey, populationValue] of typesafeEntries(consumption)) {
    const populationTotal = population[populationKey];

    for (const [itemKey, itemValue] of typesafeEntries(populationValue)) {
      result[itemKey] ??= 0;
      if (populationTotal < itemValue!.depends) continue;
      result[itemKey] += populationTotal / itemValue!.amount;
    }
  }

  // the only exception
  if (population.Noblemen < 3000) {
    result["Candlesticks"] = 0;
  }

  return result;
}
