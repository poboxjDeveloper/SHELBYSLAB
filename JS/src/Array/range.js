/**
 * Creates a new array starting with the start number and ending with the end number
 * @param {number} start - the start number of the range.
 * @param {number} end - the end number of the range.
 * @param {number} step - increment the range by the step.
 */
const range = (start, end, step) => {
  if (!step) {
    step = 1;
  }
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

console.log(range(1, 10));
console.log(range(0, 100, 10));
