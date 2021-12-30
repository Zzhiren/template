export function bind(fn: any, thisArg: any) {
  return function wrap(...args) {
    return fn.apply(thisArg, args);
  };
}

export function extend(a: any, b: any, thisArg: any) {
  Object.getOwnPropertyNames(b).forEach(function assignValue(key: string) {
    const val = b[key];
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
