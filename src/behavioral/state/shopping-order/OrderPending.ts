import { OrderRejected } from './OrderRejected';
import { OrderApproved } from './OrderApproved';
import { ShoppingOrderState } from './ShoppingOrderState';
import { ShoppingOrder } from './ShoppingOrder';

export class OrderPending implements ShoppingOrderState {
  private name = 'Pending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está pendente!');
  }

  shipOrder(): void {
    console.log(`Aguardando pagamento do pedido para poder enviá-lo!`);
  }
}
