import { bold } from '../config';

export const DefiningAFunction = `
%cFunction
%c
- function -> binding where value is a function.
- keyword function.
- body in braces {}.
- parameter list.
- produce a value or undefined.
- can create side-effects
`;

export const BindingsAndScopes = `
%cBinding and Scope
%c
- a binding has a scope.
- global scope <> local scope.
- bindings declared with let or const -> local to the block.
- bindings declared with var -> the whole block or global.

%cNested scope
%c
The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.
`;

export const FunctionsAsValues = `
%cFunction as value
%c
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
`;

export const DeclarationNotation = `
%cDeclaration notation
%c
function square(x) {
  return x * x;
}

%cAdvantage:%c They are conceptually moved to the top of their scope and can be used by all the code in that scope. 'Hoisted'.
`;

export const ArrowFunctions = `
%cArrow functions
%c
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
`;

export const TheCallStack = `
%cThe Call Stack
%c
Call stack = place where computer stores the context.

`;

export const Sample003_01 = () => {
  greet('Harry');
  console.log('Bye');
};

function greet(who) {
  console.log('Hello ' + who);
}

export const OptionalArguments = `
%cOptional Arguments
%c
This is possible in js, but not in TS.
In js you can add a parameter list.
If a parameter is not assigned --> parameter = undefined.
You can give default values to a parameter.

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64


`;

export const Closure = `
%cClosure
%c
Being able to reference a specific instance of a local binding in an enclosing scope.

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

`;

export const Sample003_02 = () => {
  let twice = multiplier(2);
  let tenTimes = multiplier(10);
  console.log(twice(5), tenTimes(5));
};

function multiplier(factor: number) {
  // returns a function that multiplies by factor...
  return (nr: number) => nr * factor;
}

export const Recursion = `
%cRecursion
%c
- Function calling itself.
- It's generally slower than calling function multiple times.
- 

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, \`(${history} + 5)\`) ||
             find(current * 3, \`(${history} * 3)\`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

explanation:
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!

`;

export const Sample003_03 = () => {
  console.log(`%cmine isMin`, bold);
  console.log(`
function min(x, y) {
    if (x > y) return y;
    return x;
}
`);

  console.log('min(0, 10)   ->', min(0, 10));
  console.log('min(0, -10)  ->', min(0, -10));

  console.log(`%ctheirs`, bold);
  console.log(`
function min(a, b) {
  if (a < b) return a;
  else return b;
}
`);

  console.log(`%cmine isEven`, bold);
  console.log(`
function isEven(x) {
  if (x % 2 === 0) return true;
  else if (x % 2 === 1 || x % 2 === -1) return false;
  else isEven(x - 2);
}
`);

  console.log('isEven(0):', isEven(0));
  console.log('isEven(50):', isEven(50));
  console.log('isEven(75):', isEven(75));
  console.log('isEven(-1)', isEven(-1));
  console.log('isEven(-124)', isEven(-124));

  console.log(`%ctheirs`, bold);
  console.log(`
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

`);

  console.log(`%cmine countBc`, bold);
  console.log(`
function countBs(str) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') score++;
  }

  return score;
}

function countChar(str,letter) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) score++;
  }

  return score;
}
`);

  console.log('countBs("BARBEAPAPA"):', countBs('BARBEAPAPA'));
  console.log('countBs("BBC")', countBs('BBC'));
  console.log('countChar("BARBEAPAPA","A"):', countChar('BARBEAPAPA', 'A'));
  console.log('countChar("BBC","C")', countChar('BBC', 'C'));
  console.log('countChar("kakkerlak","C")', countChar('kakkerlak', 'k'));

  console.log(`%ctheirs`, bold);
  console.log(`
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

`);
};

function min(x, y) {
  if (x > y) return y;
  return x;
}

function isEven(x) {
  if (x % 2 === 0) return true;
  else if (x % 2 === 1 || x % 2 === -1) return false;
  else isEven(x - 2);
}

function countBs(str) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') score++;
  }

  return score;
}

function countChar(str, letter) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) score++;
  }

  return score;
}
