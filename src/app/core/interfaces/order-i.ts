import { StateOrder } from '../enums/state-order';

export interface OrderI {
  nbDays: number;
  unitPrice: number;
  state: StateOrder;
  typePresta: string;
  designation: string;
  id: number;
}
