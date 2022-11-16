import { createSignal, createEffect } from 'solid-js';

// This can be out of the component
const [tel, setTel] = createSignal(0);

export default function Counter() {
  // how do we manage state
  // create signal is the way to create state. This is a primitive

  const [count, setCount] = createSignal(0);

  const add = () => setCount(count() + 1);
  const remove = () => setCount(count() - 1);

  const doTel = () => setTel(tel() + 5);
  const doUnTel = () => setTel(tel() - 1);

  // Components will only be run 1 time !!!!
  console.log(`hello this is the count from within the component: ${count()}`);
  console.log(`hello this is the tel from within the component: ${tel()}`);

  // This effect reruns every time.
  createEffect(() => {
    console.log(`hello this is the count in createEffect: ${count()}`);
    console.log(`hello this is the tel from within the component: ${tel()}`);
  });

  //Count is a getter function
  return (
    <>
      <h1>This is the counter</h1>
      <div>Counter</div>
      <button onClick={add} onKeyUp={doTel}>
        Add
      </button>
      <button onClick={remove} onKeyUp={doUnTel}>
        Remove
      </button>
      <div>Current count: {count()}</div>
    </>
  );
}
