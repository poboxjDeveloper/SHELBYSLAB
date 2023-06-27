export let AtomicElements: string = `
%cAtomic elements of JavaScript programs: Values
%c
- numbers (64 bits) -> max: 18 quintillion
- strings 
- unary operators
    delete
    typeof
    void
    - (minus, can be used as unary and binary operator) -> - (10 - 2)
    + (plus)
- boolean
- empty values
    null
    undefined

more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
`;

export let AutomaticTypeConversion: string = `
%cType Coercion:

%cconsole.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

type coercion = When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect.
(This is not possible in typescript, as the compiler complains.)
`;

export let ShortCircuitingLogicalOperators: string = `
%cShort-circuiting of Logical Operators:
%c
The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes


`;
