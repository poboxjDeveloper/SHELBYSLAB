import { DurationInMinutes } from './DurationInMinutes';
import { Entitlement } from './Entitlement';

export interface Category {
  id: number;
  name: string;
  durationInDays?: any;
  durationInMinutes: DurationInMinutes;
  entitlements: Entitlement[];
  pendingSellCount: number;
  singlePendingSellId?: any;
  hasSellRequestsWithWarning: boolean;
}
