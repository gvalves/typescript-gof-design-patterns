import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract createVehicle(vehicleName: string): Vehicle;
}
