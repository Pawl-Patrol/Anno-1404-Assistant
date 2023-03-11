import almondsUrl from "./assets/layouts/Almonds/almonds.png";
import almonds2Url from "./assets/layouts/Almonds/almonds2.png";
import apiaryUrl from "./assets/layouts/Apiary/apiary.png";
import beerUrl from "./assets/layouts/Beer/beer.png";
import beer2Url from "./assets/layouts/Beer/beer2.png";
import breadUrl from "./assets/layouts/Bread/bread.png";
import bread2Url from "./assets/layouts/Bread/bread2.png";
import candlesticksUrl from "./assets/layouts/Candlesticks/candlesticks.png";
import candlesticks2Url from "./assets/layouts/Candlesticks/candlesticks2.png";
import coffeeUrl from "./assets/layouts/Coffee/coffee.png";
import coffee2Url from "./assets/layouts/Coffee/coffee2.png";
import coffeebeansUrl from "./assets/layouts/Coffeebeans/coffeebeans.png";
import coffeebeans2Url from "./assets/layouts/Coffeebeans/coffeebeans2.png";
import datesUrl from "./assets/layouts/Dates/dates.png";
import dates2Url from "./assets/layouts/Dates/dates2.png";
import dates3Url from "./assets/layouts/Dates/dates3.png";
import dates4Url from "./assets/layouts/Dates/dates4.png";
import hempUrl from "./assets/layouts/Hemp/hemp.png";
import hemp2Url from "./assets/layouts/Hemp/hemp2.png";
import hemp3Url from "./assets/layouts/Hemp/hemp3.png";
import herbsUrl from "./assets/layouts/Herbs/herbs.png";
import herbs2Url from "./assets/layouts/Herbs/herbs2.png";
import housesUrl from "./assets/layouts/Houses/houses.png";
import houses2Url from "./assets/layouts/Houses/houses2.png";
import indigoUrl from "./assets/layouts/Indigo/indigo.png";
import indigo2Url from "./assets/layouts/Indigo/indigo2.png";
import indigo3Url from "./assets/layouts/Indigo/indigo3.png";
import linenGarmentsUrl from "./assets/layouts/LinenGarments/linenGarments.png";
import parfumUrl from "./assets/layouts/Parfum/parfum.png";
import spicesUrl from "./assets/layouts/Spices/spices.png";
import spices2Url from "./assets/layouts/Spices/spices2.png";
import spices3Url from "./assets/layouts/Spices/spices3.png";
import spices4Url from "./assets/layouts/Spices/spices4.png";
import spices5Url from "./assets/layouts/Spices/spices5.png";
import woodUrl from "./assets/layouts/Wood/wood.png";
import wood2Url from "./assets/layouts/Wood/wood2.png";
import wood3Url from "./assets/layouts/Wood/wood3.png";
import { typesafeKeys } from "./util";

export const layoutsMapping = {
  Almonds: [almondsUrl, almonds2Url],
  Apiary: [apiaryUrl],
  Beer: [beerUrl, beer2Url],
  Bread: [breadUrl, bread2Url],
  Candlesticks: [candlesticksUrl, candlesticks2Url],
  Coffee: [coffeeUrl, coffee2Url],
  Coffeebeans: [coffeebeansUrl, coffeebeans2Url],
  Dates: [datesUrl, dates2Url, dates3Url, dates4Url],
  Hemp: [hempUrl, hemp2Url, hemp3Url],
  Herbs: [herbsUrl, herbs2Url],
  Houses: [housesUrl, houses2Url],
  Indigo: [indigoUrl, indigo2Url, indigo3Url],
  LinenGarments: [linenGarmentsUrl],
  Parfum: [parfumUrl],
  Spices: [spicesUrl, spices2Url, spices3Url, spices4Url, spices5Url],
  Wood: [woodUrl, wood2Url, wood3Url],
} satisfies Record<string, string[]>;

export const layoutNames = typesafeKeys(layoutsMapping);

export type Category = keyof typeof layoutsMapping;
