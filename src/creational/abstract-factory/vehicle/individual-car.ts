import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class IndividualCar implements Vehicle {
  constructor(public name: string) {}

  pickUp(customer: Customer): void {
    console.log(`${this.name} está buscando ${customer.name} (INDIVIDUAL)`);
  }
}
