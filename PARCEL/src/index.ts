import { Range } from './000_introduction/range';
import { Sum } from './000_introduction/sum';
import { Factorial } from './000_introduction/factorial';
import {
  AtomicElements,
  AutomaticTypeConversion,
  ShortCircuitingLogicalOperators,
} from './001_values-types-operators/index';

let prefix = '🍒';
let title =
  'color:yellow; background-color:red; font-weight:bold;padding-left:5px;';
let bold = 'color:#ef7215;background-color:transparent;font-weight:bold;';
let reset = 'color:default';

console.group('000 Introduction');

console.group(prefix, 'Range');
console.table(Range(2, 21, 2));
console.groupEnd();

console.group(prefix, 'Sum');
console.log('sum of [2, 21, 2] =', Sum([2, 21, 2]).toString());
console.groupEnd();

console.group(prefix, 'Factorial');
console.log('factor of 4 =', Factorial(4).toString());
console.groupEnd();

console.groupEnd();

console.group('001 Values, types, and operators');
console.log(AtomicElements, title, reset);
console.log(AutomaticTypeConversion, bold, reset);
console.log(ShortCircuitingLogicalOperators, bold, reset);

console.groupEnd();
