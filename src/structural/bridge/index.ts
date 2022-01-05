import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
) {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);
const tvRemoteControl = new RemoteControl(tv);
const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControl);
clientCode(tvRemoteControlWithVolume);
clientCode(radioRemoteControl);
clientCode(radioRemoteControlWithVolume);
