import { Stack } from "@mui/material";
import { useMemo } from "react";
import { Building, buildings } from "../lib/assets/buildings";
import { Item } from "../lib/assets/items";
import { ConsumptionState } from "../lib/calculation";
import { production } from "../lib/production";
import { typesafeEntries } from "../lib/util";
import { IconRow } from "./common";

export function ProductionView(props: {
  consumptionState: ConsumptionState;
  selectedItem: Item;
}) {
  const productionEntries = useMemo(() => {
    const result = {} as Record<
      Item,
      Array<{
        name: Building;
        value: number;
        image: string;
      }>
    >;

    for (const [item, cons] of typesafeEntries(props.consumptionState)) {
      result[item] = [];
      for (const [building, amount] of typesafeEntries(production[item])) {
        result[item].push({
          name: building,
          value: amount * cons,
          image: buildings[building],
        });
      }
    }

    return result;
  }, [props.consumptionState]);

  return (
    <Stack direction="column" gap="1rem">
      <IconRow data={productionEntries[props.selectedItem].slice(0, 4)} />
      <IconRow data={productionEntries[props.selectedItem].slice(4, 8)} />
    </Stack>
  );
}
