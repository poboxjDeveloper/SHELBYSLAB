import { useState, useRef } from 'react';

export default function Calculator() {
  const hourInput = useRef(0);
  const minuteInput = useRef(0);
  const [hours, setHours] = useState(0);
  return (
    <>
      <form>
        <input type="text" ref={hourInput} placeholder="hh" />
        <input type="text" ref={minuteInput} placeholder="hh" />
        <button>calculate</button>
      </form>
    </>
  );
}
