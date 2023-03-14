import { Avatar, Button, Stack } from "@mui/material";

function IconCard<T>(props: {
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

export function IconRow<T>(props: {
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
        <IconCard key={index} {...data} onClick={props.onClick} />
      ))}
    </Stack>
  );
}
