import { sleep } from '../utils/sleep';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    await sleep(2000);

    return [
      { street: 'Av Brasil', number: 50 },
      { street: 'Rua A', number: 40 },
    ];
  }
}
