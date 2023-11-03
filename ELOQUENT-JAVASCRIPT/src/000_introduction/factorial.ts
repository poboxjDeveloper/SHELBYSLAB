export function Factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    let calc = Factorial(n - 1) * n;
    console.log('factorial ->', n - 1, ':', calc);
    return calc;
  }
}
