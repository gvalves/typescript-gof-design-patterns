import { IndividualCustomer } from '../customer/individual-customer';
import { Customer } from '../customer/customer';
import { IndividualCar } from '../vehicle/individual-car';
import { Vehicle } from '../vehicle/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new IndividualCustomer(name);
  }

  createVehicle(name: string): Vehicle {
    return new IndividualCar(name);
  }
}
