import {
  ENTITLEMENTS_TO_TAKE,
  TRANSFERABLE_ENTITLEMENTS,
} from 'constants/pronetConstants';

/**
 * It returns a string in the format of YYYY-MM-DD.
 * @returns A string in the format of YYYY-MM-DD
 */
export const pronetDateString = () => {
  const current = new Date();
  return `${current.getFullYear()}-${(current.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${current.getDate().toString().padStart(2, '0')}`;
};

/**
 * It takes a string in the format of "HH:MM" and returns the total number of minutes
 * @param {string} balance - string - the balance from the Pronet API
 * @returns A function that takes a string and returns a number.
 */
export const pronetBalanceToMinutes = (balance: string): number => {
  const hours = parseInt(balance.split(':')[0]) * 60;
  const minutes = parseInt(balance.split(':')[1]);
  const totalMinutes = hours + minutes;

  // console.log('pronetBalanceToMinutes', balance, totalMinutes);

  return totalMinutes;
};

/**
 * Convert a string of the form "HH:MM" to a number of hours.
 * @param {string} balance - string - the balance you want to convert
 * @returns A function that takes a string and returns a number.
 */
export const pronetBalanceToHours = (balance: string): number => {
  const minutes = pronetBalanceToDays(balance);
  const days = minutes / 60;

  // console.log('pronetBalanceToHours', balance, days);

  return days;
};

/**
 * It takes a string in the format of "HH:MM" and returns the number of days that string represents
 * @param {string} balance - string,
 * @param {boolean} [floored=true] - boolean = true
 * @returns A function that takes two parameters and returns a number.
 */
export const pronetBalanceToDays = (
  balance: string,
  floored: boolean = true
): number => {
  const oneDayInMinutes = 7 * 60 + 12;
  const minutes = pronetBalanceToMinutes(balance);
  let days: number;
  if (floored) {
    days = Math.floor(minutes / oneDayInMinutes);
  } else {
    days = minutes / oneDayInMinutes;
  }

  // console.log('pronetBalanceToDays', balance, days);

  return days;
};

/**
 * It takes a string, converts it to a number, and then returns a string based on the number
 * @param {string} balance - string = '0:00'
 * @returns A string.
 */
export const dayOrDaysLabel = (balance: string): string => {
  let result: string = '';
  const days = pronetBalanceToDays(balance);
  if (days > 1 || days === 0) {
    result = 'days';
  } else {
    result = 'day';
  }

  // console.log('dayOrDaysLabel', balance, result);

  return result;
};

/**
 * This function returns true if the yearCounterAbsenceDefinitionId is in the array of
 * ENTITLEMENTS_TO_TAKE
 * @param {number} yearCounterAbsenceDefinitionId - number
 * @returns A function that takes a number and returns a boolean.
 */
export const daysToTakeThisYear = (
  yearCounterAbsenceDefinitionId: number
): boolean => {
  return ENTITLEMENTS_TO_TAKE.includes(yearCounterAbsenceDefinitionId);
};

/**
 * This function returns true if the yearCounterAbsenceDefinitionId is in the TRANSFERABLE_ENTITLEMENTS
 * array.
 * @param {number} yearCounterAbsenceDefinitionId - number =&gt; this is the id of the absence type
 * @returns A boolean value.
 */
export const daysThatCanBeTransferredToNextYear = (
  yearCounterAbsenceDefinitionId: number
): boolean => {
  return TRANSFERABLE_ENTITLEMENTS.includes(yearCounterAbsenceDefinitionId);
};
