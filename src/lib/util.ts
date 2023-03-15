type Entries<T> = T extends any ? Array<[keyof T, T[keyof T]]> : never;

export function typesafeEntries<T extends Record<string, any>>(obj: T) {
  return Object.entries(obj) as Entries<T>;
}
