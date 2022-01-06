import { OrderApproved } from './OrderApproved';
import { OrderPending } from './OrderPending';
import { ShoppingOrder } from './ShoppingOrder';
import { ShoppingOrderState } from './ShoppingOrderState';

export class OrderRejected implements ShoppingOrderState {
  private name = 'Rejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    console.log('O pedido já foi rejeitado!');
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log(`Pedido rejeitado não pode ser enviado!`);
  }
}
