import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { chain, isNil } from "lodash";
import { useId, useMemo } from "react";
import { useForm } from "./context/formContext";
import { buildings } from "./lib/assets/buildings";
import { Item } from "./lib/assets/items";
import { production } from "./lib/production";
import { typesafeEntries } from "./lib/util";
import { IconRow } from "./views/common";

export function ProductionChain() {
  const form = useForm();

  const items = useMemo(() => {
    if (!form.selectedItem) return [];
    if (isNil(form.selectedItemQuantity)) return [];

    const result = [];
    for (const [building, amount] of typesafeEntries(
      production[form.selectedItem]
    )) {
      result.push({
        name: building,
        value: amount * form.selectedItemQuantity,
        image: buildings[building],
      });
    }
    return result;
  }, [form.selectedItem, form.selectedItemQuantity]);

  const label = "Item";
  const labelId = useId();

  const orderedProductionItems = chain(production).keys().sortBy().value();

  return (
    <Stack direction="column" gap="1rem">
      <Stack direction="row" gap="1rem">
        <FormControl fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            labelId={labelId}
            label={label}
            value={form.selectedItem ?? ""}
            onChange={(e) =>
              form.merge({ selectedItem: e.target.value as Item })
            }
          >
            {orderedProductionItems.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            type="number"
            value={form.selectedItemQuantity ?? ""}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              const selectedItemQuantity = isNaN(value) ? undefined : value;
              form.merge({ selectedItemQuantity });
            }}
            inputProps={{ min: 0, step: 0.1 }}
            label="Quantity"
          />
        </FormControl>
      </Stack>
      <Stack direction="column" gap="1rem">
        <IconRow data={items} />
      </Stack>
    </Stack>
  );
}