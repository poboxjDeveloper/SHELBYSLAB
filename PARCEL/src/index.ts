import { Range } from './000_introduction/range';
import { Sum } from './000_introduction/sum';
import { Factorial } from './000_introduction/factorial';

let prefix = '🍒';

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
