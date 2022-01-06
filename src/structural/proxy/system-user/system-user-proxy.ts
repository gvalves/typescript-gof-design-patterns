import { sleep } from '../utils/sleep';
import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private user: SystemUserProtocol | null = null;
  private userAddress: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private getUser(): SystemUserProtocol {
    if (!this.user) {
      this.user = new AdminUser(this.firstName, this.userName);
    }

    return this.user;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    const user = this.getUser();

    if (!this.userAddress) {
      this.userAddress = await user.getAddresses();
    }

    return this.userAddress;
  }
}
