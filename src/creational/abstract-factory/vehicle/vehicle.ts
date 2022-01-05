import { Customer } from '../customer/customer';

export interface Vehicle {
  name: string;

  pickUp(customer: Customer): void;
}
