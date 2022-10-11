import { Category } from 'interfaces/Category';
import { Entitlement } from 'interfaces/Entitlement';
import { useEffect, useState } from 'react';
import {
  daysThatCanBeTransferredToNextYear,
  daysToTakeThisYear,
  pronetBalanceToDays,
  pronetBalanceToMinutes,
} from 'utils/protimeHelpers';

const TotalsTable = ({ categories }: { categories: Array<Category> }) => {
  //   const [totalMinutesToTake, setTotalMinutesToTake] = useState(0);
  //   const [totalMinutesToTransfer, setTotalMinutesToTransfer] = useState(0);

  let totalMinutesToTake = 0;
  let totalMinutesToTransfer = 0;
  let totalDaysToTake = 0;
  let totalDaysToTransfer = 0;

  const calculateMinutes = (): void => {
    console.log('calculateMinutes');

    categories.forEach((c) => {
      calculateByEntitlements(c.entitlements);
    });
  };

  const calculateByEntitlements = (entitlements: Entitlement[]): void => {
    console.log('calculateByEntitlements');

    entitlements.forEach((e: Entitlement) => {
      calculateByEntitlement(e);
    });
  };

  const calculateByEntitlement = (entitlement: Entitlement): void => {
    console.log('calculateByEntitlement');

    const id = entitlement.yearCounterAbsenceDefinitionId;

    if (daysToTakeThisYear(id)) {
      totalMinutesToTake += pronetBalanceToMinutes(
        entitlement.balance.remainingValue
      );
      totalDaysToTake += pronetBalanceToDays(
        entitlement.balance.remainingValue
      );
    }

    if (daysThatCanBeTransferredToNextYear(id)) {
      totalMinutesToTransfer += pronetBalanceToMinutes(
        entitlement.balance.remainingValue
      );
      totalDaysToTransfer += pronetBalanceToDays(
        entitlement.balance.remainingValue
      );
    }
  };
  calculateMinutes();

  return (
    <>
      <h2>Totals table</h2>
      <table>
        <tbody>
          <tr>
            <th>Total hours to take</th>
            <td>{totalMinutesToTake / 60}</td>
            <td>{totalDaysToTake}</td>
          </tr>
          <tr>
            <th>Total hours to transfer</th>
            <td>{totalMinutesToTransfer / 60}</td>
            <td>{totalDaysToTransfer}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TotalsTable;
