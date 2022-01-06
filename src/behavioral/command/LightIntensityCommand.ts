import { SmartHouseCommand } from './SmartHouseCommand';
import { SmartHouseLight } from './SmartHouseLight';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`The intensity of ${this.light.name} is ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`The intensity of ${this.light.name} is ${intensity}`);
  }
}
