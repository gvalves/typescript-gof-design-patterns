import { SmartHouseCommand } from './SmartHouseCommand';

export class SmartHouseApp {
  private commands: { [key: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand): void {
    if (key in this.commands) return;
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    if (!(key in this.commands)) return;
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    if (!(key in this.commands)) return;
    this.commands[key].undo();
  }
}
