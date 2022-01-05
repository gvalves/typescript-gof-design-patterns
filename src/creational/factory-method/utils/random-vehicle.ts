import { BycicleFactory } from '../factories/bycicle-factory';
import { CarFactory } from '../factories/car-factory';
import { Vehicle } from '../vehicle/vehicle';
import { randomNumbers } from './random-numbers';

export const randomVehicle = (): Vehicle => {
  const carFactory = new CarFactory();
  const bycicleFactory = new BycicleFactory();

  const car1 = carFactory.createVehicle('Fusca');
  const car2 = carFactory.createVehicle('Celta Preto');
  const bycicle = bycicleFactory.createVehicle('Bycicle');

  const vehicles = [car1, car2, bycicle];

  return vehicles[randomNumbers(vehicles.length)];
};
