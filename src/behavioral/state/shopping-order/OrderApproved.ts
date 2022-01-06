import { OrderPending } from './OrderPending';
import { OrderRejected } from './OrderRejected';
import { ShoppingOrder } from './ShoppingOrder';
import { ShoppingOrderState } from './ShoppingOrderState';

export class OrderApproved implements ShoppingOrderState {
  private name = 'Approved';

  constructor(private order: ShoppingOrder) {}

  getName() {
    return this.name;
  }

  approvePayment(): void {
    console.log('O pedido já está aprovado!');
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log(`O pedido foi enviado!`);
  }
}
