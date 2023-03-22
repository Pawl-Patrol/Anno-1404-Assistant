import { Refresh } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Fab, Stack, Tab } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { AppTab, useForm } from "./context/formContext";
import { useNotification } from "./context/notificationContext";
import { LayoutsView } from "./layouts/Layouts";
import {
  calculateConsumption,
  getEmptyPopulationState,
  PopulationState,
} from "./lib/calculation";
import { GameVersion, gameVersions } from "./lib/game-versions";
import { Process } from "./lib/process";
import { typesafeEntries } from "./lib/util";
import { PopulationForm } from "./PopulationForm";
import { ProductionChain } from "./ProductionChain";
import { ConsumptionView, PopulationView } from "./views";

async function readPopulation(process: Process, gameVersion: GameVersion) {
  const address = await process.traversePointerPath(gameVersion.pointerPath);
  const result = {} as PopulationState;
  for (const [name, offset] of typesafeEntries(gameVersion.populationOffsets)) {
    const value = await process.readInteger(address + offset, 4);
    result[name] = Number(value);
  }
  return result;
}

export function App() {
  const form = useForm();
  const notification = useNotification();

  // population and consumption
  const [populationState, setPopulation] = useState<PopulationState>(
    getEmptyPopulationState()
  );
  const consumption = useMemo(
    () => calculateConsumption(populationState),
    [populationState]
  );

  useEffect(() => {
    if (form.tab === AppTab.Population) tryToReadPopulation();
  }, [form.tab]);

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
      <TabContext value={form.tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            onChange={(_, tab) => form.merge({ tab })}
          >
            <Tab label="Statistics" value={AppTab.Population} />
            <Tab label="Production chains" value={AppTab.Production} />
            <Tab label="Layouts" value={AppTab.Layouts} />
            <Tab label="Settings" value={AppTab.Settings} />
          </TabList>
        </Box>
        <TabPanel value={AppTab.Population}>
          <PopulationView populationState={populationState} />
          <ConsumptionView
            consumptionState={consumption}
            onItemClick={(selectedItem) => {
              form.merge({
                selectedItem,
                selectedItemQuantity: consumption[selectedItem],
                tab: AppTab.Production,
              });
            }}
          />
          <Fab
            onClick={tryToReadPopulation}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: "1rem",
            }}
            color="primary"
          >
            <Refresh />
          </Fab>
        </TabPanel>
        <TabPanel value={AppTab.Production}>
          <ProductionChain />
        </TabPanel>
        <TabPanel
          value={AppTab.Layouts}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: form.tab === AppTab.Layouts ? "100%" : 0,
            padding: 0,
            minHeight: 0,
          }}
        >
          <LayoutsView />
        </TabPanel>
        <TabPanel value={AppTab.Settings}>
          <PopulationForm />
        </TabPanel>
      </TabContext>
    </Stack>
  );
}
