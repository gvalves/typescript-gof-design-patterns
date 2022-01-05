import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const individualFactory = new IndividualCustomerVehicleFactory();
const enterpriseFactory = new EnterpriseCustomerVehicleFactory();

const individualCar = individualFactory.createVehicle('Fusca');
const individualCustomer = individualFactory.createCustomer('João');

const enterpriseCar = enterpriseFactory.createVehicle('Celta');
const enterpriseCustomer = enterpriseFactory.createCustomer('Helena');

individualCar.pickUp(individualCustomer);
enterpriseCar.pickUp(enterpriseCustomer);
