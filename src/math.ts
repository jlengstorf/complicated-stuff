export function add(a: number, b: number) {
  return a + b;
}

function forceToInteger(num: number) {
  const asInt = Number(num);

  if (isNaN(asInt)) {
    throw new Error('Must provide a number');
  }

  return asInt;
}

export function addButOverEngineered(a: number) {
  const aAsInt = forceToInteger(a);

  return function (b: number) {
    const bAsInt = forceToInteger(b);

    return aAsInt + bAsInt;
  };
}
