import almondPlantationUrl from "./icons/Almonds.png";
import pigFarmUrl from "./icons/AnimalHides.png";
import barrelCooperageUrl from "./icons/Barrels.png";
import monasteryBreweryUrl from "./icons/Beer.png";
import apiaryUrl from "./icons/Beeswax.png";
import printingHouseUrl from "./icons/Books.png";
import copperSmelterUrl from "./icons/Brass.png";
import bakeryUrl from "./icons/Bread.png";
import saltMineUrl from "./icons/Brine.png";
import silkWeavingMillUrl from "./icons/BrocadeRobes.png";
import candlemakersWorkshopUrl from "./icons/Candles.png";
import redsmithsWorkshopUrl from "./icons/Candlesticks.png";
import cannonFoundryUrl from "./icons/Cannons.png";
import carpetWorkshopUrl from "./icons/Carpets.png";
import cattleFarmUrl from "./icons/Cattle.png";
import ciderFarmUrl from "./icons/Cider.png";
import clayPitUrl from "./icons/Clay.png";
import charcoalBurnersHutUrl from "./icons/Coal.png";
import roastingHouseUrl from "./icons/Coffee.png";
import coffeePlantationUrl from "./icons/CoffeeBeans.png";
import copperMineUrl from "./icons/CopperOre.png";
import datePlantationUrl from "./icons/Dates.png";
import fishingLodgeUrl from "./icons/Fish.png";
import millUrl from "./icons/Flour.png";
import furriersWorkshopUrl from "./icons/FurCoats.png";
import trappersLodgeUrl from "./icons/Furs.png";
import glassSmelterUrl from "./icons/Glass.png";
import opticiansWorkshopUrl from "./icons/Glasses.png";
import goldSmelterUrl from "./icons/Gold.png";
import goldMineUrl from "./icons/GoldOre.png";
import vineyardUrl from "./icons/Grapes.png";
import hempPlantationUrl from "./icons/Hemp.png";
import monasteryGardenUrl from "./icons/Herbs.png";
import indigoFarmUrl from "./icons/Indigo.png";
import ironSmelterUrl from "./icons/Iron.png";
import ironMineUrl from "./icons/IronOre.png";
import tanneryUrl from "./icons/LeatherJerkins.png";
import weaversHutUrl from "./icons/LinenGarments.png";
import confectionersWorkshopUrl from "./icons/Marzipan.png";
import butcheryUrl from "./icons/Meat.png";
import goatFarmUrl from "./icons/Milk.png";
import mosaicWorkshopUrl from "./icons/Mosaic.png";
import paperMillUrl from "./icons/Paper.png";
import perfumeryUrl from "./icons/Parfum.png";
import pearlWorkshopUrl from "./icons/PearlNecklaces.png";
import pearlFishersHutUrl from "./icons/Pearls.png";
import forestGlassworksUrl from "./icons/Potash.png";
import quarzQuarryUrl from "./icons/Quartz.png";
import ropeyardUrl from "./icons/Ropes.png";
import roseNurseryUrl from "./icons/RoseOil.png";
import saltWorksUrl from "./icons/Salt.png";
import silkPlantationUrl from "./icons/Silk.png";
import spiceFarmUrl from "./icons/Spices.png";
import stoneMasonsHutUrl from "./icons/Stone.png";
import sugarMillUrl from "./icons/Sugar.png";
import sugarCanePlantationUrl from "./icons/SugarCane.png";
import toolmakersWorkshopUrl from "./icons/Tools.png";
import warMachinesWorkshopUrl from "./icons/WarMachines.png";
import weaponSmithyUrl from "./icons/Weapons.png";
import cropFarmUrl from "./icons/Wheat.png";
import winePressUrl from "./icons/Wine.png";
import lumberjacksHutUrl from "./icons/Wood.png";

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
  ropeyard: ropeyardUrl,
  toolmakersWorkshop: toolmakersWorkshopUrl,
  mosaicWorkshop: mosaicWorkshopUrl,
  clayPit: clayPitUrl,
  glassSmelter: glassSmelterUrl,
  forestGlassworks: forestGlassworksUrl,
  weaponSmithy: weaponSmithyUrl,
  cannonFoundry: cannonFoundryUrl,
  warMachinesWorkshop: warMachinesWorkshopUrl,
  stoneMasonsHut: stoneMasonsHutUrl,
} satisfies Record<string, string>;

export type Building = keyof typeof buildings;
