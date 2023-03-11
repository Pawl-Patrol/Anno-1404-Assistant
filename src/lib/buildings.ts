import almondPlantationUrl from "./assets/icons/Almonds.png";
import pigFarmUrl from "./assets/icons/AnimalHides.png";
import barrelCooperageUrl from "./assets/icons/Barrels.png";
import monasteryBreweryUrl from "./assets/icons/Beer.png";
import apiaryUrl from "./assets/icons/Beeswax.png";
import printingHouseUrl from "./assets/icons/Books.png";
import copperSmelterUrl from "./assets/icons/Brass.png";
import bakeryUrl from "./assets/icons/Bread.png";
import saltMineUrl from "./assets/icons/Brine.png";
import silkWeavingMillUrl from "./assets/icons/BrocadeRobes.png";
import candlemakersWorkshopUrl from "./assets/icons/Candles.png";
import redsmithsWorkshopUrl from "./assets/icons/Candlesticks.png";
import carpetWorkshopUrl from "./assets/icons/Carpets.png";
import cattleFarmUrl from "./assets/icons/Cattle.png";
import ciderFarmUrl from "./assets/icons/Cider.png";
import charcoalBurnersHutUrl from "./assets/icons/Coal.png";
import roastingHouseUrl from "./assets/icons/Coffee.png";
import coffeePlantationUrl from "./assets/icons/CoffeeBeans.png";
import copperMineUrl from "./assets/icons/CopperOre.png";
import datePlantationUrl from "./assets/icons/Dates.png";
import fishingLodgeUrl from "./assets/icons/Fish.png";
import millUrl from "./assets/icons/Flour.png";
import furriersWorkshopUrl from "./assets/icons/FurCoats.png";
import trappersLodgeUrl from "./assets/icons/Furs.png";
import opticiansWorkshopUrl from "./assets/icons/Glasses.png";
import goldSmelterUrl from "./assets/icons/Gold.png";
import goldMineUrl from "./assets/icons/GoldOre.png";
import vineyardUrl from "./assets/icons/Grapes.png";
import hempPlantationUrl from "./assets/icons/Hemp.png";
import monasteryGardenUrl from "./assets/icons/Herbs.png";
import indigoFarmUrl from "./assets/icons/Indigo.png";
import ironSmelterUrl from "./assets/icons/Iron.png";
import ironMineUrl from "./assets/icons/IronOre.png";
import tanneryUrl from "./assets/icons/LeatherJerkins.png";
import weaversHutUrl from "./assets/icons/LinenGarments.png";
import confectionersWorkshopUrl from "./assets/icons/Marzipan.png";
import butcheryUrl from "./assets/icons/Meat.png";
import goatFarmUrl from "./assets/icons/Milk.png";
import paperMillUrl from "./assets/icons/Paper.png";
import perfumeryUrl from "./assets/icons/Parfum.png";
import pearlWorkshopUrl from "./assets/icons/PearlNecklaces.png";
import pearlFishersHutUrl from "./assets/icons/Pearls.png";
import quarzQuarryUrl from "./assets/icons/Quartz.png";
import roseNurseryUrl from "./assets/icons/RoseOil.png";
import saltWorksUrl from "./assets/icons/Salt.png";
import silkPlantationUrl from "./assets/icons/Silk.png";
import spiceFarmUrl from "./assets/icons/Spices.png";
import sugarMillUrl from "./assets/icons/Sugar.png";
import sugarCanePlantationUrl from "./assets/icons/SugarCane.png";
import cropFarmUrl from "./assets/icons/Wheat.png";
import winePressUrl from "./assets/icons/Wine.png";
import lumberjacksHutUrl from "./assets/icons/Wood.png";

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
