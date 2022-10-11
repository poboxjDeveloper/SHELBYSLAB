import { Entitlement } from 'interfaces/Entitlement';
import {
  dayOrDaysLabel,
  daysThatCanBeTransferredToNextYear,
  daysToTakeThisYear,
  pronetBalanceToDays,
} from 'utils/protimeHelpers';

import css from './entitlementTableRows.module.scss';

const EntitlementTableRows = ({
  data,
}: {
  data: Array<Entitlement>;
}): JSX.Element => {
  const getCssClass = (yearCounterAbsenceDefinitionId: number) => {
    if (daysToTakeThisYear(yearCounterAbsenceDefinitionId)) {
      return css.take;
    }
    if (daysThatCanBeTransferredToNextYear(yearCounterAbsenceDefinitionId)) {
      return css.transfer;
    }
  };

  const children = data.map((e: Entitlement) => {
    return (
      <tr
        key={e.yearCounterAbsenceDefinitionId}
        className={getCssClass(e.yearCounterAbsenceDefinitionId)}
      >
        <td>{e.typeName}</td>
        <td>
          {e.balance.remainingValue} {e.balance.label}
        </td>
        <td>
          {pronetBalanceToDays(e.balance.remainingValue)}{' '}
          {dayOrDaysLabel(e.balance.remainingValue)}
        </td>
      </tr>
    );
  });
  return <>{children}</>;
};

export { EntitlementTableRows };
