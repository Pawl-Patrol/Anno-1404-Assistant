import { useMemo } from "react";
import { population } from "../lib/assets/population";
import { PopulationState } from "../lib/calculation";
import { typesafeEntries } from "../lib/util";
import { IconRow } from "./common";

export function PopulationView(props: { populationState: PopulationState }) {
  const populationEntries = useMemo(
    () =>
      typesafeEntries(props.populationState).map((x) => ({
        name: x[0],
        value: x[1],
        image: population[x[0]],
      })),
    [props.populationState]
  );

  return <IconRow data={populationEntries} />;
}
