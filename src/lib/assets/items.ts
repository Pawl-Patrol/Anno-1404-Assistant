import beerUrl from "./icons/Beer.png";
import booksUrl from "./icons/Books.png";
import breadUrl from "./icons/Bread.png";
import brocadeRobesUrl from "./icons/BrocadeRobes.png";
import candlesticksUrl from "./icons/Candlesticks.png";
import carpetsUrl from "./icons/Carpets.png";
import ciderUrl from "./icons/Cider.png";
import coffeeUrl from "./icons/Coffee.png";
import datesUrl from "./icons/Dates.png";
import fishUrl from "./icons/Fish.png";
import furCoatsUrl from "./icons/FurCoats.png";
import glassesUrl from "./icons/Glasses.png";
import leatherJerkinsUrl from "./icons/LeatherJerkins.png";
import linenGarmentsUrl from "./icons/LinenGarments.png";
import marzipanUrl from "./icons/Marzipan.png";
import meatUrl from "./icons/Meat.png";
import milkUrl from "./icons/Milk.png";
import parfumUrl from "./icons/Parfum.png";
import pearlNecklacesUrl from "./icons/PearlNecklaces.png";
import spicesUrl from "./icons/Spices.png";
import wineUrl from "./icons/Wine.png";

export const items = {
  Fish: fishUrl,
  Spices: spicesUrl,
  Bread: breadUrl,
  Meat: meatUrl,
  Cider: ciderUrl,
  Beer: beerUrl,
  Wine: wineUrl,
  LinenGarments: linenGarmentsUrl,
  LeatherJerkins: leatherJerkinsUrl,
  FurCoats: furCoatsUrl,
  BrocadeRobes: brocadeRobesUrl,
  Books: booksUrl,
  Candlesticks: candlesticksUrl,
  Glasses: glassesUrl,
  Dates: datesUrl,
  Milk: milkUrl,
  Carpets: carpetsUrl,
  Coffee: coffeeUrl,
  PearlNecklaces: pearlNecklacesUrl,
  Parfum: parfumUrl,
  Marzipan: marzipanUrl,
} satisfies Record<string, string>;

export type Item = keyof typeof items;
