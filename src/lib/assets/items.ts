import beerUrl from "./icons/Beer.png";
import booksUrl from "./icons/Books.png";
import brassUrl from "./icons/Brass.png";
import breadUrl from "./icons/Bread.png";
import brocadeRobesUrl from "./icons/BrocadeRobes.png";
import candlesticksUrl from "./icons/Candlesticks.png";
import cannonsUrl from "./icons/Cannons.png";
import carpetsUrl from "./icons/Carpets.png";
import ciderUrl from "./icons/Cider.png";
import coffeeUrl from "./icons/Coffee.png";
import datesUrl from "./icons/Dates.png";
import fishUrl from "./icons/Fish.png";
import furCoatsUrl from "./icons/FurCoats.png";
import glassUrl from "./icons/Glass.png";
import glassesUrl from "./icons/Glasses.png";
import ironUrl from "./icons/Iron.png";
import leatherJerkinsUrl from "./icons/LeatherJerkins.png";
import linenGarmentsUrl from "./icons/LinenGarments.png";
import marzipanUrl from "./icons/Marzipan.png";
import meatUrl from "./icons/Meat.png";
import milkUrl from "./icons/Milk.png";
import mosaicUrl from "./icons/Mosaic.png";
import parfumUrl from "./icons/Parfum.png";
import pearlNecklacesUrl from "./icons/PearlNecklaces.png";
import ropesUrl from "./icons/Ropes.png";
import saltUrl from "./icons/Salt.png";
import spicesUrl from "./icons/Spices.png";
import stoneUrl from "./icons/Stone.png";
import toolsUrl from "./icons/Tools.png";
import warMachinesUrl from "./icons/WarMachines.png";
import weaponsUrl from "./icons/Weapons.png";
import wineUrl from "./icons/Wine.png";
import woodUrl from "./icons/Wood.png";

// I'm using pretty names here, because these names are exposed to the user
export const items = {
  Fish: fishUrl,
  Spices: spicesUrl,
  Bread: breadUrl,
  Meat: meatUrl,
  Cider: ciderUrl,
  Beer: beerUrl,
  Wine: wineUrl,
  "Linen Garments": linenGarmentsUrl,
  "Leather Jerkins": leatherJerkinsUrl,
  "Fur Coats": furCoatsUrl,
  "Brocade Robes": brocadeRobesUrl,
  Books: booksUrl,
  Candlesticks: candlesticksUrl,
  Glasses: glassesUrl,
  Dates: datesUrl,
  Milk: milkUrl,
  Carpets: carpetsUrl,
  Coffee: coffeeUrl,
  "Pearl Necklaces": pearlNecklacesUrl,
  Parfum: parfumUrl,
  Marzipan: marzipanUrl,
  Ropes: ropesUrl,
  Brass: brassUrl,
  Tools: toolsUrl,
  Mosaic: mosaicUrl,
  Glass: glassUrl,
  Weapons: weaponsUrl,
  Cannons: cannonsUrl,
  "War Machines": warMachinesUrl,
  Salt: saltUrl,
  Iron: ironUrl,
  Wood: woodUrl,
  Stone: stoneUrl,
} satisfies Record<string, string>;

export type Item = keyof typeof items;
