export function Sum(array: Array<number>): number {
  let total: number = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }
  return total;
}
