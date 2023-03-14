import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { get } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "../context/formContext";
import { ImageGallery } from "../ImageGallery";
import { Layouts, readLayouts } from "./readLayouts";

export function LayoutsView() {
  const [layouts, setLayouts] = useState<Layouts>();

  useEffect(() => {
    readLayouts().then(setLayouts);
  }, []);

  return layouts ? <LayoutsTreeView tree={layouts} /> : null;
}

function LayoutsTreeView(props: { tree: Layouts }) {
  const form = useForm();

  const handleChange =
    (index: number) => (event: SelectChangeEvent<string>) => {
      const layoutPath = [
        ...form.layoutPath.slice(0, index),
        event.target.value,
      ];
      form.merge({ layoutPath, imageIndex: 0 });
    };

  function optionsForPath(path: string[]) {
    const value = get(props.tree, path, props.tree);
    return Array.isArray(value) ? null : Object.keys(value);
  }

  const images = useMemo(() => {
    const result = get(props.tree, form.layoutPath, null);
    return Array.isArray(result) ? (result as string[]) : [];
  }, [form.layoutPath]);

  useEffect(() => {
    const layoutPath = [...form.layoutPath];
    let options = optionsForPath(layoutPath);
    if (!options) return;
    while (options) {
      layoutPath.push(options[0]);
      options = optionsForPath(layoutPath);
    }
    form.merge({ layoutPath });
  }, [form.layoutPath]);

  function renderSelect(value: string, index: number) {
    const options = optionsForPath(form.layoutPath.slice(0, index))!;
    const labelId = `select-label-${index}`;
    const label = index === 0 ? "Category" : form.layoutPath[index - 1];
    return (
      <FormControl key={index} sx={{ flexGrow: 1 }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          key={index}
          labelId={labelId}
          label={label}
          value={value}
          onChange={handleChange(index)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <>
      <Stack direction="row" gap="1rem" padding="1rem">
        {form.layoutPath.map(renderSelect)}
      </Stack>
      <ImageGallery images={images} />
    </>
  );
}
