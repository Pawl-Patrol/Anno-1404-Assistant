import beerUrl from "./assets/icons/Beer.png";
import booksUrl from "./assets/icons/Books.png";
import breadUrl from "./assets/icons/Bread.png";
import brocadeRobesUrl from "./assets/icons/BrocadeRobes.png";
import candlesticksUrl from "./assets/icons/Candlesticks.png";
import carpetsUrl from "./assets/icons/Carpets.png";
import ciderUrl from "./assets/icons/Cider.png";
import coffeeUrl from "./assets/icons/Coffee.png";
import datesUrl from "./assets/icons/Dates.png";
import fishUrl from "./assets/icons/Fish.png";
import furCoatsUrl from "./assets/icons/FurCoats.png";
import glassesUrl from "./assets/icons/Glasses.png";
import leatherJerkinsUrl from "./assets/icons/LeatherJerkins.png";
import linenGarmentsUrl from "./assets/icons/LinenGarments.png";
import marzipanUrl from "./assets/icons/Marzipan.png";
import meatUrl from "./assets/icons/Meat.png";
import milkUrl from "./assets/icons/Milk.png";
import parfumUrl from "./assets/icons/Parfum.png";
import pearlNecklacesUrl from "./assets/icons/PearlNecklaces.png";
import spicesUrl from "./assets/icons/Spices.png";
import wineUrl from "./assets/icons/Wine.png";

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
