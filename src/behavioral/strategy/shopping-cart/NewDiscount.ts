import { DiscountStrategy } from './DiscountStrategy';
import { ECommerceShoppingCart } from './ECommerceShoppingCart';

export class NewDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    this.discount = 5;

    return total - total * (this.discount / 100);
  }
}
