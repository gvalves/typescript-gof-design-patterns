import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class EnterpriseCar implements Vehicle {
  constructor(public name: string) {}

  pickUp(customer: Customer): void {
    console.log(`${this.name} está buscando ${customer.name} (ENTERPRISE)`);
  }
}
