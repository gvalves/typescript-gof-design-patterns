import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationIntrinsicData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationIntrinsicData) {}

  deliver(name: string, number: string): void {
    console.log(`Entrega para ${name}`);
    console.log(`Em ${this.intrinsicState.street} ${this.intrinsicState.city}`);
    console.log(`Número: ${number}`);
    console.log('-'.repeat(50));
  }
}
