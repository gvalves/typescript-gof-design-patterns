import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Customer } from '../customer/customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { Vehicle } from '../vehicle/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string): Vehicle {
    return new EnterpriseCar(name);
  }
}
