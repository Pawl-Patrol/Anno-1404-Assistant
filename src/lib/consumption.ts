import { Item } from "./items";
import { Population } from "./population";

type ItemConsumption = {
  amount: number;
  depends: number;
};

export const consumption = {
  Beggars: {
    Fish: { amount: 285, depends: 1 },
    Cider: { amount: 500, depends: 1 },
  },
  Peasants: {
    Fish: { amount: 200, depends: 1 },
    Cider: { amount: 340, depends: 60 },
  },
  Citizens: {
    Fish: { amount: 500, depends: 1 },
    Spices: { amount: 500, depends: 1 },
    Cider: { amount: 340, depends: 1 },
    LinenGarments: { amount: 476, depends: 1 },
  },
  Patricians: {
    Fish: { amount: 909, depends: 1 },
    Spices: { amount: 909, depends: 1 },
    Bread: { amount: 727, depends: 1 },
    Cider: { amount: 652, depends: 1 },
    Beer: { amount: 625, depends: 510 },
    LinenGarments: { amount: 1052, depends: 1 },
    LeatherJerkins: { amount: 1428, depends: 690 },
    Books: { amount: 1875, depends: 940 },
    Candlesticks: { amount: 2500, depends: 0 }, // only exception
  },
  Noblemen: {
    Fish: { amount: 1250, depends: 1 },
    Spices: { amount: 1250, depends: 1 },
    Bread: { amount: 1025, depends: 1 },
    Meat: { amount: 1136, depends: 1 },
    Cider: { amount: 1153, depends: 1 },
    Beer: { amount: 1071, depends: 1 },
    Wine: { amount: 1000, depends: 1500 },
    LinenGarments: { amount: 2500, depends: 1 },
    LeatherJerkins: { amount: 2500, depends: 1 },
    FurCoats: { amount: 1562, depends: 950 },
    BrocadeRobes: { amount: 2112, depends: 4000 },
    Books: { amount: 3333, depends: 1 },
    Candlesticks: { amount: 3333, depends: 3000 },
    Glasses: { amount: 1709, depends: 2200 },
  },
  Nomads: {
    Dates: { amount: 450, depends: 1 },
    Milk: { amount: 436, depends: 145 },
    Carpets: { amount: 909, depends: 295 },
  },
  Envoys: {
    Dates: { amount: 600, depends: 1 },
    Milk: { amount: 666, depends: 1 },
    Carpets: { amount: 1500, depends: 1 },
    Coffee: { amount: 1000, depends: 1 },
    PearlNecklaces: { amount: 751, depends: 1040 },
    Parfum: { amount: 1250, depends: 2600 },
    Marzipan: { amount: 2453, depends: 4360 },
  },
} as Record<Population, Partial<Record<Item, ItemConsumption>>>;
