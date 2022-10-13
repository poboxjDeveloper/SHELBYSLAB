import InformationTable from 'components/general/informationTable';
import { TKeyValue } from 'interfaces/TKeyValue';
import { MouseEventHandler, MouseEvent, useEffect, useState } from 'react';
import { randomString } from 'utils/stringHelpers';

const Information = () => {
  const [info, setInfo] = useState<TKeyValue[]>([]);

  //   useEffect(() => {
  //     console.log('component is in useEffect', Date.now());
  //     info.push({ key: 'date', value: Date.now().toString() });
  //     setInfo(info);
  //     console.log('current info', info);
  //   }, [info]);

  useEffect(() => {
    console.log('useEffect has been triggered');
  }, []);

  const addRandomString = () => {
    setInfo(() => {
      info.push({
        key: (Math.random() * 1000).toString() + '--addRandomString',
        value: randomString(20),
      });
      return info;
    });
    console.log('addRandomString', info);
  };
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    console.log(e);
    addRandomString();
  };

  return (
    <>
      <h1>Test how the hooks work in conjunction with components</h1>

      <h2>Hard coded values for headers and messages</h2>
      <InformationTable
        headers={['FIRST', 'SECOND']}
        messages={[
          { key: 'first', value: 'first hardcoded value' },
          { key: 'second', value: 'second hardcoded value' },
          { key: 'third', value: 'third hardcoded value' },
          { key: 'fourth', value: 'fourth hardcoded value' },
        ]}
      />
      <h2>Insert a random string in the values</h2>
      <button
        onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
          handleButtonClick(e)
        }
        name="addRandomString"
      >
        Add
      </button>
      <div>{JSON.stringify(info)}</div>

      <InformationTable
        headers={['DYNAMIC FIRST', 'DYNAMIC SECOND']}
        messages={info}
      />
    </>
  );
};

export default Information;
