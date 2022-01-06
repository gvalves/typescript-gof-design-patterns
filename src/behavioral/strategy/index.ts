import { NewDiscount } from './shopping-cart/NewDiscount';
import { ECommerceShoppingCart } from './shopping-cart/ECommerceShoppingCart';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.setDiscountStrategy(new NewDiscount());

shoppingCart.addProduct({ name: 'P1', price: 50 });
shoppingCart.addProduct({ name: 'P2', price: 50 });

console.log(shoppingCart.getTotalWithDiscount());
