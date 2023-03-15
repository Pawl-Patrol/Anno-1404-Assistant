import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { invoke } from "@tauri-apps/api";
import { useEffect, useId } from "react";
import { useForm } from "./context/formContext";
import { useNotification } from "./context/notificationContext";
import { gameVersions } from "./lib/game-versions";
import { Process } from "./lib/process";

export function PopulationForm() {
  const form = useForm();
  const notification = useNotification();

  async function scanForProcesses() {
    const results = await Process.listProcesses();
    const processList = results
      .sort((a, b) => a.compare(b))
      .filter((process, index, array) => {
        if (index === 0) return true;
        return process.name !== array[index - 1].name;
      });
    form.merge({ processList });
  }

  useEffect(() => {
    scanForProcesses();
  }, []);

  async function toggleAlwaysOnTop(alwaysOnTop: boolean) {
    try {
      await invoke("toggle_always_on_top", { alwaysOnTop });
      form.merge({ alwaysOnTop });
    } catch (error) {
      notification.show("error", String(error));
    }
  }

  const processLabelId = useId();
  const gameVersionLabelId = useId();

  return (
    <div>
      <Grid
        display="flex"
        flexDirection="column"
        gap="1rem"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl fullWidth>
          <InputLabel id={processLabelId}>Process</InputLabel>
          <Select
            onOpen={scanForProcesses}
            labelId={processLabelId}
            label="Process"
            value={form.process?.pid ?? ""}
            onChange={(e) => {
              const pid = Number(e.target.value);
              const process = form.processList.find(
                (process) => process.pid === pid
              );
              if (process) form.merge({ process });
            }}
          >
            {form.processList.map((process) => (
              <MenuItem key={process.pid} value={process.pid}>
                {process.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id={gameVersionLabelId}>Game Version</InputLabel>
          <Select
            labelId={gameVersionLabelId}
            label="Game Version"
            value={form.gameVersionIndex ?? ""}
            onChange={(e) => {
              const gameVersionIndex = Number(e.target.value);
              if (isNaN(gameVersionIndex)) return;
              form.merge({ gameVersionIndex });
            }}
          >
            {gameVersions.map((gameVersion, index) => (
              <MenuItem key={index} value={index}>
                {gameVersion.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            type="number"
            value={form.updateInterval ?? ""}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              const updateInterval = isNaN(value) ? undefined : value;
              form.merge({ updateInterval });
            }}
            inputProps={{ min: 0 }}
            label="Update Interval (seconds)"
          />
        </FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={form.alwaysOnTop ?? false}
              onChange={(e) => toggleAlwaysOnTop(e.target.checked)}
            />
          }
          label="Always on top"
        />
      </Grid>
    </div>
  );
}
