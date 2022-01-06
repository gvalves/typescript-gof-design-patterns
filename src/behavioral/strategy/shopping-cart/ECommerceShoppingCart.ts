import { ECommerceProductProtocol } from './ECommerceProductProtocol';
import { DiscountStrategy } from './DiscountStrategy';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this.discountStrategy.getDiscount(this);
  }

  setDiscountStrategy(strategy: DiscountStrategy) {
    this.discountStrategy = strategy;
  }
}
