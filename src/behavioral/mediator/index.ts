import { Buyer } from './Buyer';
import { Mediator } from './Mediator';
import { Seller } from './Seller';

export type SellerProduct = { id: string; name: string; price: number };

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Caneta', price: 8.9 });
seller1.addProduct({ id: '2', name: 'Calça', price: 37.9 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Carro', price: 49_000 });
seller2.addProduct({ id: '4', name: 'Lápis', price: 2.4 });

mediator.addSellers(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
