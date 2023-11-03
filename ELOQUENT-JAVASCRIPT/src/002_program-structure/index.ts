import { prefix, title, reset, bold } from '../config';

export const Expression = `
%cExpression
%c
- A fragment of code that produces a value is called an expression
- Anything that produces a value is an expression.
`;

export const Statement = `
%cStatement
%c
If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

- stands alone
- (can) produce(s) Side Effects (ex: display something on the screen --> is changing the world )
- ends with ;
`;

export const Binding = `
%cBinding or Variable
%c
- A binding catches and holds values.
- 'let', 'const' and 'var' keyword defines a binding.
- After a binding has been defined, its name can be used as an expression.
    let ten = 10;
    console.log(ten * ten);
    // → 100
- Think of it as a Tentical: They graps values, they do not contain values.
- They are mutable trough the '='.
 
%cBinding names
%c
- Alphanumeric, $ and _. 
- Can not start with a number.
- Reserved words can not be used.
    break
    case
    catch
    class
    const
    continue
    debugger
    default
    delete
    do
    else
    enum
    export
    extends
    false
    finally
    for
    function
    if
    implements
    import
    interface
    in
    instanceof
    let
    new
    package
    private
    protected
    public
    return
    static
    super
    switch
    this
    throw
    true
    try
    typeof
    var
    void
    while
    with
    yield
- Capitalization of the binding.
    fuzzylittleturtle
    fuzzy_little_turtle
    FuzzyLittleTurtle
    fuzzyLittleTurtle --> preferred.
- Constructor functions --> Capitalized.
`;

export const Environment = `
%cEnvironment
%c
- Collection of bindings and there values that exist at a given time.
`;

export const Functions = `
%cFunctions
%c
- A function is a piece of program wrapped in a value.
- Example console.log function.
`;

export const ReturnValue = `
%cReturn Values
%c
- Anything that produces a value is an expression.
`;

export const Excercises002 = () => {
  console.groupCollapsed('ex 1:Looping A Triangle');
  console.log(
    `%cInfo:%c https://eloquentjavascript.net/code/#2
    `,
    title,
    reset
  );

  console.log('%cmine', bold);
  console.log(`
    let str = '';
    for (let index = 0; index < 10; index++) {
        str += '#';
        console.log(str);
    }
    `);
  let str = '';
  for (let index = 0; index < 10; index++) {
    str += '#';
    console.log(str);
  }

  console.log('%ctheirs', bold);
  console.log(`
    for (let line = '#'; line.length < 8; line += '#') 
        console.log(line);
    `);

  for (let line = '#'; line.length < 8; line += '#') console.log(line);

  console.groupEnd();

  console.groupCollapsed('ex 2: FizzBuzz');

  console.group('%cmine', bold);
  console.log(`
    for (let nr = 1; nr <= 100; nr++) {
        if (nr % 3 === 0) {
            console.log('%cFizz', prefix);
        } else if (nr % 5 === 0) {
            console.log('%cBuzz', prefix);
        } else {
            console.log(nr);
        }
    }
    `);

  for (let nr = 1; nr <= 100; nr++) {
    if (nr % 3 === 0) {
      console.log('%cFizz', prefix);
    } else if (nr % 5 === 0) {
      console.log('%cFizzBuzz', prefix);
    } else {
      console.log(nr);
    }
  }
  console.groupEnd();

  console.group('%ctheirs', bold);
  console.log(`
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
    `);

  for (let n = 1; n <= 100; n++) {
    let output = '';
    if (n % 3 == 0) output += 'Fizz';
    if (n % 5 == 0) output += 'Buzz';
    console.log(output || n);
  }
  console.groupEnd();

  console.groupEnd();

  console.groupCollapsed('ex 2: Chessboard');

  console.group('%cmine', bold);
  console.log(`
    const chessBoard = (size) => {
    const line = (even) => {
      let result = even ? '' : ' ';
      for (let nr = 1; nr <= size; nr++) {
        if (nr % 2 === 0) {
          result += '#';
        } else {
          result += ' ';
        }
      }
      return result + '\\n';
    };
    let result = '';
    for (let nr = 1; nr <= size; nr++) {
      result += nr + ' ' + line(nr % 2);
    }
    return result;
  };
    `);

  const chessBoard = (size) => {
    const line = (even) => {
      let result = even ? '' : ' ';
      for (let nr = 1; nr <= size; nr++) {
        if (nr % 2 === 0) {
          result += '#';
        } else {
          result += ' ';
        }
      }
      return result + '\n';
    };
    let result = '';
    for (let nr = 1; nr <= size; nr++) {
      result += nr + ' ' + line(nr % 2);
    }
    return result;
  };
  console.log(chessBoard(10));

  console.groupEnd();

  console.group('%ctheirs', bold);
  console.log(`
    let size = 8;
    let board = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
            board += " ";
            } else {
            board += "#";
            }
        }
        board += "\\n";
    }

    console.log(board);
    `);

  let size = 8;

  let board = '';

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }

  console.log(board);

  console.groupEnd();

  console.groupEnd();
};
