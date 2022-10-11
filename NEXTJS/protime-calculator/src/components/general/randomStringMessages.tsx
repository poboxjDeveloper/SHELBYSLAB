import { useEffect, useState } from 'react';
import { randomString } from 'utils/randomString';
import css from './randomStringMessage.module.scss';

const RandomStringMessage = ({
  nrOfWords = 50,
}: {
  nrOfWords: number | undefined;
}): JSX.Element => {
  const [result, setResult] = useState(<></>);

  useEffect(() => {
    if (nrOfWords) {
      setResult(
        <div className={css.random}>
          <code>{nrOfWords}</code> {randomString(nrOfWords)}
        </div>
      );
    }
  }, [nrOfWords]);

  return result;
};

export default RandomStringMessage;
