import almondPlantationUrl from "./assets/Almonds.png";
import pigFarmUrl from "./assets/AnimalHides.png";
import barrelCooperageUrl from "./assets/Barrels.png";
import monasteryBreweryUrl from "./assets/Beer.png";
import apiaryUrl from "./assets/Beeswax.png";
import printingHouseUrl from "./assets/Books.png";
import copperSmelterUrl from "./assets/Brass.png";
import bakeryUrl from "./assets/Bread.png";
import saltMineUrl from "./assets/Brine.png";
import silkWeavingMillUrl from "./assets/BrocadeRobes.png";
import candlemakersWorkshopUrl from "./assets/Candles.png";
import redsmithsWorkshopUrl from "./assets/Candlesticks.png";
import carpetWorkshopUrl from "./assets/Carpets.png";
import cattleFarmUrl from "./assets/Cattle.png";
import ciderFarmUrl from "./assets/Cider.png";
import charcoalBurnersHutUrl from "./assets/Coal.png";
import roastingHouseUrl from "./assets/Coffee.png";
import coffeePlantationUrl from "./assets/CoffeeBeans.png";
import copperMineUrl from "./assets/CopperOre.png";
import datePlantationUrl from "./assets/Dates.png";
import fishingLodgeUrl from "./assets/Fish.png";
import millUrl from "./assets/Flour.png";
import furriersWorkshopUrl from "./assets/FurCoats.png";
import trappersLodgeUrl from "./assets/Furs.png";
import opticiansWorkshopUrl from "./assets/Glasses.png";
import goldSmelterUrl from "./assets/Gold.png";
import goldMineUrl from "./assets/GoldOre.png";
import vineyardUrl from "./assets/Grapes.png";
import hempPlantationUrl from "./assets/Hemp.png";
import monasteryGardenUrl from "./assets/Herbs.png";
import indigoFarmUrl from "./assets/Indigo.png";
import ironSmelterUrl from "./assets/Iron.png";
import ironMineUrl from "./assets/IronOre.png";
import tanneryUrl from "./assets/LeatherJerkins.png";
import weaversHutUrl from "./assets/LinenGarments.png";
import confectionersWorkshopUrl from "./assets/Marzipan.png";
import butcheryUrl from "./assets/Meat.png";
import goatFarmUrl from "./assets/Milk.png";
import paperMillUrl from "./assets/Paper.png";
import perfumeryUrl from "./assets/Parfum.png";
import pearlWorkshopUrl from "./assets/PearlNecklaces.png";
import pearlFishersHutUrl from "./assets/Pearls.png";
import quarzQuarryUrl from "./assets/Quartz.png";
import roseNurseryUrl from "./assets/RoseOil.png";
import saltWorksUrl from "./assets/Salt.png";
import silkPlantationUrl from "./assets/Silk.png";
import spiceFarmUrl from "./assets/Spices.png";
import sugarMillUrl from "./assets/Sugar.png";
import sugarCanePlantationUrl from "./assets/SugarCane.png";
import cropFarmUrl from "./assets/Wheat.png";
import winePressUrl from "./assets/Wine.png";
import lumberjacksHutUrl from "./assets/Wood.png";

export const buildings = {
  fishingLodge: fishingLodgeUrl,
  ciderFarm: ciderFarmUrl,
  weaversHut: weaversHutUrl,
  hempPlantation: hempPlantationUrl,
  spiceFarm: spiceFarmUrl,
  bakery: bakeryUrl,
  mill: millUrl,
  cropFarm: cropFarmUrl,
  monasteryBrewery: monasteryBreweryUrl,
  monasteryGarden: monasteryGardenUrl,
  tannery: tanneryUrl,
  pigFarm: pigFarmUrl,
  saltWorks: saltWorksUrl,
  saltMine: saltMineUrl,
  charcoalBurnersHut: charcoalBurnersHutUrl,
  printingHouse: printingHouseUrl,
  indigoFarm: indigoFarmUrl,
  paperMill: paperMillUrl,
  lumberjacksHut: lumberjacksHutUrl,
  redsmithsWorkshop: redsmithsWorkshopUrl,
  candlemakersWorkshop: candlemakersWorkshopUrl,
  apiary: apiaryUrl,
  copperSmelter: copperSmelterUrl,
  copperMine: copperMineUrl,
  butchery: butcheryUrl,
  cattleFarm: cattleFarmUrl,
  winePress: winePressUrl,
  vineyard: vineyardUrl,
  barrelCooperage: barrelCooperageUrl,
  ironSmelter: ironSmelterUrl,
  ironMine: ironMineUrl,
  opticiansWorkshop: opticiansWorkshopUrl,
  quarzQuarry: quarzQuarryUrl,
  furriersWorkshop: furriersWorkshopUrl,
  trappersLodge: trappersLodgeUrl,
  silkWeavingMill: silkWeavingMillUrl,
  silkPlantation: silkPlantationUrl,
  goldSmelter: goldSmelterUrl,
  goldMine: goldMineUrl,
  datePlantation: datePlantationUrl,
  goatFarm: goatFarmUrl,
  carpetWorkshop: carpetWorkshopUrl,
  roastingHouse: roastingHouseUrl,
  coffeePlantation: coffeePlantationUrl,
  pearlWorkshop: pearlWorkshopUrl,
  pearlFishersHut: pearlFishersHutUrl,
  perfumery: perfumeryUrl,
  roseNursery: roseNurseryUrl,
  confectionersWorkshop: confectionersWorkshopUrl,
  almondPlantation: almondPlantationUrl,
  sugarMill: sugarMillUrl,
  sugarCanePlantation: sugarCanePlantationUrl,
} satisfies Record<string, string>;

export type Building = keyof typeof buildings;
