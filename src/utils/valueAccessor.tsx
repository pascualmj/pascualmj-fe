export const getValueByPathString = (object: any, path: string) =>
  path.split('.').reduce((o, k) => ((o || {}) as any)[k], object);
