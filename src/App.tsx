import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Alert,
  AlertColor,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MobileStepper,
  Select,
  Snackbar,
  Stack,
  Switch,
  Tab,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { invoke } from "@tauri-apps/api";
import { useEffect, useId, useMemo, useState } from "react";
import { Building, buildings } from "./lib/buildings";
import {
  calculateConsumption,
  ConsumptionState,
  getEmptyPopulationState,
  PopulationState,
} from "./lib/calculation";
import { gameVersions, PointerPath } from "./lib/game-versions";
import { Item, items } from "./lib/items";
import { layoutNames, layoutsMapping } from "./lib/layouts";
import { population } from "./lib/population";
import { populationOffsets } from "./lib/population-offsets";
import { Process } from "./lib/process";
import { production } from "./lib/production";
import { typesafeEntries } from "./lib/util";

type FormState = {
  processList: Process[];
  process?: Process;
  gameVersionIndex?: number;
  updateInterval?: number;
};

async function readPopulation(process: Process, pointerPath: PointerPath) {
  const address = await process.traversePointerPath(pointerPath);
  const result: PopulationState = {} as any;
  for (const [name, offset] of typesafeEntries(populationOffsets)) {
    const value = await process.readInteger(address + offset, 4);
    result[name] = Number(value);
  }
  return result;
}

type AppState = { type: AlertColor; message: string };

function App() {
  // app state
  const [hasMessageToShow, setHasMessageToShow] = useState(false);
  const [message, setMessage] = useState<{ type: AlertColor; text: string }>();

  function idle() {
    setHasMessageToShow(false);
    setMessage(undefined);
  }

  function showMessage(type: AlertColor, text: string) {
    setMessage({ type, text });
    setHasMessageToShow(true);
  }

  // form
  const [formState, setFormState] = useState<FormState>({ processList: [] });

  // modal
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const closeModal = () => setSelectedItem(null);

  // population and consumption
  const [populationState, setPopulation] = useState<PopulationState>(
    getEmptyPopulationState()
  );
  const consumption = useMemo(
    () => calculateConsumption(populationState),
    [populationState]
  );

  // tabs
  const statisticsTab = useId();
  const settingsTab = useId();
  const layoutsTab = useId();
  const [tab, setTab] = useState(settingsTab);

  useEffect(() => {
    if (tab === statisticsTab) tryToReadPopulation();
  }, [tab]);

  // auto update
  const [autoUpdateIntervalId, setAutoUpdateIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  function tryToClearInterval() {
    if (autoUpdateIntervalId) clearInterval(autoUpdateIntervalId);
  }

  useEffect(() => {
    tryToClearInterval();
    if (!formState.updateInterval) return;
    setAutoUpdateIntervalId(
      setInterval(tryToReadPopulation, formState.updateInterval * 1000)
    );
    return tryToClearInterval;
  }, [formState]);

  // reading population
  async function tryToReadPopulation() {
    if (!formState.process) {
      showMessage("error", "No process selected");
      return;
    }
    if (formState.gameVersionIndex === undefined) {
      showMessage("error", "No game version selected");
      return;
    }

    try {
      const population = await readPopulation(
        formState.process,
        gameVersions[formState.gameVersionIndex].pointerPath
      );
      setPopulation(population);
    } catch (error) {
      showMessage("error", String(error));
    }
  }

  return (
    <Stack direction="column" height="100vh">
      <Dialog open={!!selectedItem} onClose={closeModal}>
        <DialogContent>
          {selectedItem && (
            <ProductionView
              consumptionState={consumption}
              selectedItem={selectedItem}
            />
          )}
        </DialogContent>
      </Dialog>
      <Snackbar open={hasMessageToShow} autoHideDuration={6000} onClose={idle}>
        {message && (
          <Alert onClose={idle} severity={message.type} sx={{ width: "100%" }}>
            {message.text}
          </Alert>
        )}
      </Snackbar>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList variant="fullWidth" onChange={(_, v) => setTab(v)}>
            <Tab label="Statistics" value={statisticsTab} />
            <Tab label="Settings" value={settingsTab} />
            <Tab label="Layouts" value={layoutsTab} />
          </TabList>
        </Box>
        <TabPanel value={statisticsTab}>
          <PopulationView populationState={populationState} />
          <ConsumptionView
            consumptionState={consumption}
            onItemClick={setSelectedItem}
          />
        </TabPanel>
        <TabPanel value={settingsTab}>
          <PopulationForm
            onSubmit={setPopulation}
            formState={formState}
            setFormState={setFormState}
          />
        </TabPanel>
        <TabPanel
          value={layoutsTab}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            flex: 1,
            minHeight: 0,
          }}
        >
          <LayoutsView />
        </TabPanel>
      </TabContext>
    </Stack>
  );
}

function LayoutsView() {
  const [tab, setTab] = useState(layoutNames[0]);
  return (
    <TabContext value={tab}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          onChange={(_, v) => setTab(v)}
        >
          {layoutNames.map((name) => (
            <Tab label={name} value={name} />
          ))}
        </TabList>
      </Box>
      {typesafeEntries(layoutsMapping).map(([name, images]) => (
        <TabPanel
          key={name}
          value={name}
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            flexGrow: tab === name ? 1 : 0,
            minHeight: 0,
          }}
        >
          <ImageGallery images={images} />
        </TabPanel>
      ))}
    </TabContext>
  );
}

function ImageGallery(props: { images: string[] }) {
  const [step, setStep] = useState(0);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="0"
      >
        <img
          src={props.images[step]}
          alt="layout"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <MobileStepper
        variant="dots"
        steps={props.images.length}
        sx={{
          position: "unset",
        }}
        nextButton={
          <Button
            onClick={() => setStep((x) => x + 1)}
            disabled={step === props.images.length - 1}
          >
            right
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button onClick={() => setStep((x) => x - 1)} disabled={step === 0}>
            <KeyboardArrowLeft />
            left
          </Button>
        }
        activeStep={step}
      />
    </>
  );
}

function ProductionView(props: {
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
      <RowView data={productionEntries[props.selectedItem].slice(0, 4)} />
      <RowView data={productionEntries[props.selectedItem].slice(4, 8)} />
    </Stack>
  );
}

function ConsumptionView(props: {
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
      <RowView
        data={consumptionEntries.slice(0, 7)}
        onClick={props.onItemClick}
      />
      <RowView
        data={consumptionEntries.slice(7, 14)}
        onClick={props.onItemClick}
      />
      <RowView
        data={consumptionEntries.slice(14, 21)}
        onClick={props.onItemClick}
      />
    </>
  );
}

function PopulationView(props: { populationState: PopulationState }) {
  const populationEntries = useMemo(
    () =>
      typesafeEntries(props.populationState).map((x) => ({
        name: x[0],
        value: x[1],
        image: population[x[0]],
      })),
    [props.populationState]
  );

  return <RowView data={populationEntries} />;
}

function RowView<T extends string>(props: {
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
        <ItemView key={index} {...data} onClick={props.onClick} />
      ))}
    </Stack>
  );
}

function ItemView<T extends string>(props: {
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

function PopulationForm(props: {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  onSubmit?: (population: PopulationState) => void;
}) {
  async function scanForProcesses() {
    const results = await Process.listProcesses();
    const processList = results
      .sort((a, b) => a.compare(b))
      .filter((process, index, array) => {
        if (index === 0) return true;
        return process.name !== array[index - 1].name;
      });
    props.setFormState((old) => ({ ...old, processList }));
  }

  useEffect(() => {
    scanForProcesses();
  }, []);

  async function toggleAlwaysOnTop(value: boolean) {
    try {
      await invoke("toggle_always_on_top", { alwaysOnTop: value });
    } catch (error) {
      // TODO: Handle error
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
            value={props.formState.process?.pid ?? ""}
            onChange={(e) => {
              const pid = Number(e.target.value);
              const process = props.formState.processList.find(
                (process) => process.pid === pid
              );
              if (process) props.setFormState((old) => ({ ...old, process }));
            }}
          >
            {props.formState.processList.map((process) => (
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
            value={props.formState.gameVersionIndex ?? ""}
            onChange={(e) => {
              const gameVersionIndex = Number(e.target.value);
              if (isNaN(gameVersionIndex)) return;
              props.setFormState((old) => ({ ...old, gameVersionIndex }));
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
            value={props.formState.updateInterval ?? ""}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              const updateInterval = isNaN(value) ? undefined : value;
              props.setFormState((old) => ({ ...old, updateInterval }));
            }}
            inputProps={{ min: 0 }}
            label="Update Interval (seconds)"
          />
        </FormControl>
        <FormControlLabel
          control={
            <Switch onChange={(e) => toggleAlwaysOnTop(e.target.checked)} />
          }
          label="Always on top"
        />
      </Grid>
    </div>
  );
}

export default App;
