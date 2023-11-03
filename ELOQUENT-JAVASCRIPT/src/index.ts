import { prefix, title, reset, bold } from './config';
import { Range } from './000_introduction/range';
import { Sum } from './000_introduction/sum';
import { Factorial } from './000_introduction/factorial';
import {
  AtomicElements,
  AutomaticTypeConversion,
  ShortCircuitingLogicalOperators,
} from './001_values-types-operators/index';

import {
  Expression,
  Statement,
  Binding,
  Environment,
  Functions,
  ReturnValue,
  Excercises002,
} from './002_program-structure';

import {
  DefiningAFunction,
  BindingsAndScopes,
  FunctionsAsValues,
  DeclarationNotation,
  ArrowFunctions,
  TheCallStack,
  Sample003_01,
  OptionalArguments,
  Closure,
  Sample003_02,
  Recursion,
  Sample003_03,
} from './003_functions';

import {
  ArrayFunctions,
  ArrayToList,
  DataSets,
  ListAndArrayStuff,
  ListToArray,
  Methods,
  Mutability,
  MyJournal,
  Objects,
  Properties,
  Rest,
  ReversingAnArray,
  StringFunctions,
  TheSumOfARange,
} from './004_objects-arrays';

// ---------------------------------------------------------------------
console.groupCollapsed('000 Introduction');

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

// ---------------------------------------------------------------------
console.groupCollapsed('001 Values, types, and operators');
console.log(AtomicElements, title, reset);
console.log(AutomaticTypeConversion, bold, reset);
console.log(ShortCircuitingLogicalOperators, bold, reset);
console.groupEnd();

// ---------------------------------------------------------------------
console.groupCollapsed('002 Program Structure');

console.groupCollapsed('Theory');
console.log(Expression, title, reset);
console.log(Statement, title, reset);
console.log(Binding, title, reset, bold, reset);
console.log(Environment, title, reset);
console.log(Functions, title, reset);
console.log(ReturnValue, title, reset);
console.groupEnd();

Excercises002();
console.groupEnd();

// ---------------------------------------------------------------------
console.groupCollapsed('003 Functions');
console.group('Theory');
console.log(DefiningAFunction, title, reset);
console.log(BindingsAndScopes, title, reset, bold, reset);
console.log(FunctionsAsValues, title, reset);
console.log(DeclarationNotation, title, reset, bold, reset);
console.log(ArrowFunctions, title, reset);
console.log(TheCallStack, title, reset);
console.log(Sample003_01());
console.log(OptionalArguments, title, reset);
console.log(Closure, title, reset);
console.log(Sample003_02());
console.log(Recursion, title, reset);
console.log(Sample003_03());
console.groupEnd();
console.groupEnd();

// ---------------------------------------------------------------------
console.group('004 Data Structures');
console.group('Objects and Arrays');
console.log(DataSets, title, reset);
console.log(Properties, title, reset);
console.log(Methods, title, reset);
console.log(Objects, title, reset);
console.log(Mutability, title, reset);
console.groupEnd();
console.group('Functions for Arrays and strings');
console.log(ArrayFunctions, title, reset);
console.log(StringFunctions, title, reset);
console.log('DO DO DO'.repeat(10));
console.log(Rest, title, reset);
let words = ['never', 'fully'];
console.log(['will', ...words, 'understand']);
console.log(MyJournal());
console.log(TheSumOfARange());
console.log(ReversingAnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ReversingAnArray(['A', 'B', 'C', 'D', 'E']));

console.log(ListAndArrayStuff());

console.groupEnd();
console.groupEnd();
