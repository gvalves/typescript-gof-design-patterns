import { LightIntensityCommand } from './LightIntensityCommand';
import { SmartHouseApp } from './SmartHouseApp';
import { LightPowerCommand } from './LightPowerCommand';
import { SmartHouseLight } from './SmartHouseLight';

const bedroomLight = new SmartHouseLight('Bedroom light');
const bathroomLight = new SmartHouseLight('Bathroom light');

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');

console.log();

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}
