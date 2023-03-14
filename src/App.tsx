import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Dialog, DialogContent, Stack, Tab } from "@mui/material";
import { useEffect, useId, useMemo, useState } from "react";
import { useForm } from "./formContext";
import { LayoutsView } from "./Layouts";
import {
  calculateConsumption,
  getEmptyPopulationState,
  PopulationState,
} from "./lib/calculation";
import { GameVersion, gameVersions } from "./lib/game-versions";
import { Item } from "./lib/items";
import { Process } from "./lib/process";
import { typesafeEntries } from "./lib/util";
import { useNotification } from "./notificationContext";
import { PopulationForm } from "./PopulationForm";
import { ConsumptionView, PopulationView, ProductionView } from "./Views";

async function readPopulation(process: Process, gameVersion: GameVersion) {
  const address = await process.traversePointerPath(gameVersion.pointerPath);
  const result: PopulationState = {} as any;
  for (const [name, offset] of typesafeEntries(gameVersion.populationOffsets)) {
    const value = await process.readInteger(address + offset, 4);
    result[name] = Number(value);
  }
  return result;
}

export function App() {
  const form = useForm();
  const notification = useNotification();

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
    if (!form.updateInterval) return;
    setAutoUpdateIntervalId(
      setInterval(tryToReadPopulation, form.updateInterval * 1000)
    );
    return tryToClearInterval;
  }, [form]);

  // reading population
  async function tryToReadPopulation() {
    if (!form.process) {
      notification.show("error", "No process selected");
      return;
    }
    if (form.gameVersionIndex === undefined) {
      notification.show("error", "No game version selected");
      return;
    }

    try {
      const population = await readPopulation(
        form.process,
        gameVersions[form.gameVersionIndex]
      );
      setPopulation(population);
    } catch (error) {
      notification.show("error", String(error));
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
          <PopulationForm onSubmit={setPopulation} />
        </TabPanel>
        <TabPanel
          value={layoutsTab}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: 0,
            minHeight: 0,
          }}
        >
          <LayoutsView />
        </TabPanel>
      </TabContext>
    </Stack>
  );
}
