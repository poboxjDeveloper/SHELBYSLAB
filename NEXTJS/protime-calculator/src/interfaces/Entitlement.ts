import { Balance } from './Balance';
import { RoundtripValidityPeriod } from './RoundtripValidityPeriod';
import { Indicators } from './Indicators';

export interface Entitlement {
  typeId?: any;
  yearCounterAbsenceDefinitionId: number;
  typeName: string;
  validityPeriod: string;
  balance: Balance;
  roundtripValidityPeriod: RoundtripValidityPeriod;
  durationUnit: string;
  indicators: Indicators;
}
