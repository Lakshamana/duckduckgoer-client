export const dedupe = <T>(array: T[]) =>
  array.reduce((acc, item: T) => (acc.includes(item) ? acc : [...acc, item]), [] as T[])
