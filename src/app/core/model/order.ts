import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {

  nbDays= 5;
  unitPrice= 500;
  state= StateOrder.OPTION;
  typePresta!: string;
  designation!: string;
  id!: number;

  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }

}}
