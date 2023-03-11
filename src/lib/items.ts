import beerUrl from "./assets/Beer.png";
import booksUrl from "./assets/Books.png";
import breadUrl from "./assets/Bread.png";
import brocadeRobesUrl from "./assets/BrocadeRobes.png";
import candlesticksUrl from "./assets/Candlesticks.png";
import carpetsUrl from "./assets/Carpets.png";
import ciderUrl from "./assets/Cider.png";
import coffeeUrl from "./assets/Coffee.png";
import datesUrl from "./assets/Dates.png";
import fishUrl from "./assets/Fish.png";
import furCoatsUrl from "./assets/FurCoats.png";
import glassesUrl from "./assets/Glasses.png";
import leatherJerkinsUrl from "./assets/LeatherJerkins.png";
import linenGarmentsUrl from "./assets/LinenGarments.png";
import marzipanUrl from "./assets/Marzipan.png";
import meatUrl from "./assets/Meat.png";
import milkUrl from "./assets/Milk.png";
import parfumUrl from "./assets/Parfum.png";
import pearlNecklacesUrl from "./assets/PearlNecklaces.png";
import spicesUrl from "./assets/Spices.png";
import wineUrl from "./assets/Wine.png";

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
