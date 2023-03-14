import { Avatar, Button, Stack } from "@mui/material";
import { useMemo } from "react";
import { Building, buildings } from "./lib/buildings";
import { ConsumptionState, PopulationState } from "./lib/calculation";
import { Item, items } from "./lib/items";
import { population } from "./lib/population";
import { production } from "./lib/production";
import { typesafeEntries } from "./lib/util";

function ItemCard<T>(props: {
  name: T;
  value: number;
  image: string;
  onClick?: (key: T) => void;
}) {
  return (
    <Stack flexGrow="1" alignItems="center">
      <Button
        disabled={!props.onClick}
        onClick={() => props.onClick?.(props.name)}
        sx={{ padding: 0 }}
      >
        <Avatar src={props.image} />
      </Button>
      <span>{+props.value.toFixed(2)}</span>
    </Stack>
  );
}

function ItemRow<T>(props: {
  data: {
    name: T;
    value: number;
    image: string;
  }[];
  onClick?: (key: T) => void;
}) {
  return (
    <Stack direction="row" flexGrow="1">
      {props.data.map((data, index) => (
        <ItemCard key={index} {...data} onClick={props.onClick} />
      ))}
    </Stack>
  );
}

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
      <ItemRow data={productionEntries[props.selectedItem].slice(0, 4)} />
      <ItemRow data={productionEntries[props.selectedItem].slice(4, 8)} />
    </Stack>
  );
}

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
      <ItemRow
        data={consumptionEntries.slice(0, 7)}
        onClick={props.onItemClick}
      />
      <ItemRow
        data={consumptionEntries.slice(7, 14)}
        onClick={props.onItemClick}
      />
      <ItemRow
        data={consumptionEntries.slice(14, 21)}
        onClick={props.onItemClick}
      />
    </>
  );
}

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

  return <ItemRow data={populationEntries} />;
}
