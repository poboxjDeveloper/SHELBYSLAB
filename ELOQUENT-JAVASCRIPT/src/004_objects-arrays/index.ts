import { journalEvents, phi, tableFor } from './04_data';
import { bold, title } from '../config';
import JOURNAL from './journal';

export const DataSets = `
%cData Sets
%c
- Array
- zero based
- accessed by [] notation

example
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

`;

export const Properties = `
%cProperties
%c
- Accessed by . notation
    Math.max
    myString.length
- When using square brackets, the expression between the brackets is evaluated to get the property name.
    myString[0]

`;

export const Methods = `
%cMethods
%c
example for a string
    let doh = "Doh";
    console.log(typeof doh.toUpperCase);
    // → function
    console.log(doh.toUpperCase());
    // → DOH


    `;

export const Objects = `
%cObjects
%c
example of an object.

    let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };
    console.log(day1.squirrel);
    // → false
    console.log(day1.wolf);
    // → undefined
    day1.wolf = false;
    console.log(day1.wolf);
    // → false

    let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
    };

accessing properties that don't exist return undefined.

you can delete properties with the delete operator.
    let anObject = {left: 1, right: 2};
    console.log(anObject.left);
    // → 1
    delete anObject.left;
    console.log(anObject.left);
    // → undefined
    console.log("left" in anObject);
    // → false
    console.log("right" in anObject);
    // → true

Accessing the properties of an object can be done with te Object.keys method.

    console.log(Object.keys({x: 0, y: 0, z: 2}));
    // → ["x", "y", "z"]

Copy objects into an object.

    let objectA = {a: 1, b: 2};
    Object.assign(objectA, {b: 3, c: 4});
    console.log(objectA);
    // → {a: 1, b: 3, c: 4}


`;

export const Mutability = `
%cMutability
%c
- immutable: strings, numbers, booleans.
- mutable: objects
    Objects work differently. You can change their properties, causing a single object value to have different content at different times.

    let object1 = {value: 10};
    let object2 = object1;
    let object3 = {value: 10};

    console.log(object1 == object2);
    // → true
    console.log(object1 == object3);
    // → false

    object1.value = 15;
    console.log(object2.value);
    // → 15
    console.log(object3.value);
    // → 10

The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

`;

export const ArrayFunctions = `
%cArray Functions
%c
- shift
- unshift
- indexOf
- lastIndexOf
- concat
- slice
- ...

`;

export const StringFunctions = `
%cString Functions
%c
- toUpperCase
- length
- slice
- indexOf
- trim
- padStart
- split
- join
- repeat
`;

export const Rest = `
%cRest parameter
%c
    function max(...numbers) {
        let result = -Infinity;
        for (let number of numbers) {
            if (number > result) result = number;
        }
        return result;
    }
    console.log(max(4, 1, 9, -2));
    // → 9

    let words = ["never", "fully"];
    console.log(["will", ...words, "understand"]);
    // → ["will", "never", "fully", "understand"]
`;

// Run code here in the context of Chapter 4
export const MyJournal = () => {
  for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ':', correlation);
    }
  }
};

// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054

export const TheSumOfARange = () => {
  // Your code here.

  let range = (
    first: number,
    last: number,
    step: undefined | number = undefined
  ) => {
    let result: number[] = [];

    for (let index = first; index <= last; index++) {
      result.push(index);
    }

    return result;
  };

  console.log('Range:', range(1, 10));

  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //   console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  //   console.log(sum(range(1, 10)));
  // → 55
};

export const ReversingAnArray = (inputs: any[]) => {
  const reverseArray = (input: any[]) => {
    const result: any[] = [];
    input.forEach((nr) => {
      result.unshift(nr);
    });
    return result;
  };

  const reverseArrayInPlace = (inputs: any[]) => {
    for (let index = 0; index < Math.floor(inputs.length / 2); index++) {
      const element = inputs[index];
      inputs[index] = inputs[inputs.length - 1 - index];
      inputs[inputs.length - 1 - index] = element;

      return inputs;
    }
  };

  console.group(`ReversingAnArray`);
  const reverseArrayResult = reverseArray(inputs);
  console.log('%creverseArray', title);
  console.log(`original: ${inputs}, result: ${reverseArrayResult}`);

  const reverseArrayInPlaceResult = reverseArrayInPlace(inputs);
  console.log('%creverseArrayInPlace', title);
  console.log(`original: ${inputs}, result: ${reverseArrayInPlaceResult}`);
  console.groupEnd();
};

export const ListAndArrayStuff = () => {
  console.group('%cList And Array stuff', title);

  console.group(`%cPrependToList`, title);
  console.log('\tresult:', PrependToList(0, null));
  console.log('\tresult:', PrependToList(1, ArrayToList([10])));
  console.log('\tresult:', PrependToList(2, ArrayToList([10, 20])));
  console.log('\tresult:', PrependToList(3, ArrayToList([10, 20, 30, 40])));
  console.groupEnd();

  console.group(`%cArrayToList`, title);
  console.log('\tresult:', ArrayToList([]));
  console.log('\tresult:', ArrayToList([10]));
  console.log('\tresult:', ArrayToList([10, 20]));
  console.log('\tresult:', ArrayToList([10, 20, 30, 40]));
  console.groupEnd();

  console.group(`%cListToArray`, title);
  console.log('\tresult:', ListToArray(ArrayToList([])));
  console.log('\tresult:', ListToArray(ArrayToList([10])));
  console.log('\tresult:', ListToArray(ArrayToList([10, 20])));
  console.log('\tresult:', ListToArray(ArrayToList([10, 20, 30, 40])));
  console.groupEnd();

  console.groupEnd();
};

interface List {
  value: number | undefined;
  rest: List | null;
}
export const ArrayToList = (inputs: number[]) => {
  console.groupCollapsed('ArrayToList');
  console.log('|_inputs: ', inputs);

  let list: List = { value: undefined, rest: null };
  let lastItem: number | undefined = inputs[inputs.length - 1];
  if (lastItem) {
    list = { value: lastItem, rest: null };
    console.log('\t|_element:', lastItem);
    for (let index = inputs.length - 2; index >= 0; index--) {
      const element = inputs[index];
      console.log('\t|_element:', element);
      list = { value: element, rest: list };
    }
  }

  console.groupEnd();
  return list;
};

export const ListToArray = (list: List | null) => {
  const Convert = (list: List, result: number[]) => {
    console.group('%cexecute Convert', bold);
    console.log('|_convert list:', list);

    for (let key of Object.keys(list)) {
      if (key === 'value') {
        const val = list[key];
        if (val) {
          console.log('\t|__val->', val);
          result.push(val);
        }
      }
      if (key === 'rest') {
        const rest: List | null = list[key];
        console.log('\t|__rest->', rest);
        if (rest !== null) {
          return Convert(rest, result);
        }
      }
    }

    console.log('result', result);
    console.groupEnd();

    return result;
  };

  const OverallResult: number[] = [];
  if (list === null) return;

  console.groupCollapsed('ListToArray');
  console.log('|_list: ', list);
  Convert(list, OverallResult);
  console.groupEnd();

  return OverallResult;
};

export const PrependToList = (value: number | undefined, rest: List | null) => {
  console.group('PrependToList');
  console.log('|_inputs: value:', value, 'rest:', rest);
  console.groupEnd();
  if (value) {
    return { value: value, rest: rest };
  }

  return undefined;
};
