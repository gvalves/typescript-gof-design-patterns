import { Device } from './device';

export class Radio implements Device {
  private name = 'Radio';
  private power = false;
  private volume = 0;

  getName(): string {
    return this.name;
  }

  getPower(): boolean {
    return this.power;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) return;
    this.volume = volume;
  }
}
