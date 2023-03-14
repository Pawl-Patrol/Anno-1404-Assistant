import { useMemo } from "react";
import { Item, items } from "../lib/assets/items";
import { ConsumptionState } from "../lib/calculation";
import { typesafeEntries } from "../lib/util";
import { IconRow } from "./common";

export function ConsumptionView(props: {
  consumptionState: ConsumptionState;
  onItemClick: (key: Item) => void;
}) {
  const consumptionEntries = useMemo(
    () =>
      typesafeEntries(props.consumptionState).map((x) => ({
        name: x[0],
        value: x[1],
        image: items[x[0]],
      })),
    [props.consumptionState]
  );

  return (
    <>
      <IconRow
        data={consumptionEntries.slice(0, 7)}
        onClick={props.onItemClick}
      />
      <IconRow
        data={consumptionEntries.slice(7, 14)}
        onClick={props.onItemClick}
      />
      <IconRow
        data={consumptionEntries.slice(14, 21)}
        onClick={props.onItemClick}
      />
    </>
  );
}
