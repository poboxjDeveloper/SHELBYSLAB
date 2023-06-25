/**
 * Creates an array of x random numbers.
 * @param {number} amount - the amount of random numbers to create.
 * @param {number} max - the maximum possible number in the resulting array.
 * @param {boolean} round - make it rounded numbers. Defaults to true.
 */
const random = (amount, max, round = true, order = false) => {
  const result = [];

  for (let i = 0; i <= amount; i += 1) {
    const random = Math.random() * max;
    if (round) {
      result.push(Math.round(random));
    } else {
      result.push(random);
    }
  }
  if (order) return doOrder(result);
  return result;
};

// console.log(random(10, 100000));
// console.log(random(10, 100000, false));
// console.log(random(10, 100000, true, true));
// console.log(random(10, 100000, true, false));

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

// console.log(range(1, 10));
// console.log(range(0, 100, 10));

/**
 * Helper function for ordering an array.
 * @param {[Array]} array - the array to order.
 * @returns the ordered array.
 */
function doOrder(array) {
  console.log('order the array', array);
  const ordered = array.sort((a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
  });
  console.log('the ordered:', ordered);
  return ordered;
}

console.log(doOrder([1, 3687, 5, 7421]));
