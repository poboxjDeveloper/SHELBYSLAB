import hours from 'data/hours.json';
import { TKeyValue } from 'interfaces/TKeyValue';

const getHourData = (): TKeyValue[] => {
  return hours.hours as TKeyValue[];
};

export { getHourData };
