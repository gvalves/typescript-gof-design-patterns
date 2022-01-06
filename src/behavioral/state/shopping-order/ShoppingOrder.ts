import { OrderPending } from './OrderPending';
import { ShoppingOrderState } from './ShoppingOrderState';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
    console.log(`O estado atual do pedido é ${this.getStateName()}`);
  }

  rejectPayment(): void {
    this.state.rejectPayment();
    console.log(`O estado atual do pedido é ${this.getStateName()}`);
  }

  waitPayment(): void {
    this.state.waitPayment();
    console.log(`O estado atual do pedido é ${this.getStateName()}`);
  }

  shipOrder() {
    this.state.shipOrder();
  }
}
