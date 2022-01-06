import { ShoppingOrder } from './shopping-order/ShoppingOrder';

const order = new ShoppingOrder();

order.approvePayment();
order.waitPayment();
order.rejectPayment();

order.shipOrder();
