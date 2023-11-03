export function Range(start: number, end: number, step: number): Array<number> {
  if (step === null) {
    step = 1;
  }

  let array: Array<number> = [];

  for (let index = start; index <= end; index++) {
    array.push(index);
  }

  return array;
}
