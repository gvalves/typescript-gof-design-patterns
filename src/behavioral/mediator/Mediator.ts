import { Seller } from './Seller';
import { SellerProduct } from './index';

export class Mediator {
  private sellers: Seller[] = [];

  addSellers(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): SellerProduct | void {
    const product = this.sellers
      .map((seller) => seller.sell(id))
      .find((product) => product);

    console.log(`Produto comprado: ${product}`);

    return product;
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
