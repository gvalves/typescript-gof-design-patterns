import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';

export interface CustomerVehicleFactory {
  createCustomer(name: string): Customer;
  createVehicle(name: string): Vehicle;
}
