type UndefinedIfNull<T> = T extends null
  ? undefined
  : T extends (infer U)[]
    ? UndefinedIfNull<U>[]
    : T extends object
      ? { [K in keyof T]: UndefinedIfNull<T[K]> }
      : T;

export function recursiveNullFieldsToUndefined<T>(obj: T): UndefinedIfNull<T> {
  if (obj === null) {
    // biome-ignore lint/suspicious/noExplicitAny:
    return undefined as any;
  }

  if (typeof obj === "object") {
    // biome-ignore lint/suspicious/noExplicitAny:
    const newObj: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      newObj[key] = recursiveNullFieldsToUndefined(obj[key]);
    }
    return newObj;
  }

  // biome-ignore lint/suspicious/noExplicitAny:
  return obj as any;
}
