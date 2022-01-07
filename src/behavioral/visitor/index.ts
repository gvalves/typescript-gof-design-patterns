import { AlcoholicDrink } from './AlcoholicDrink';
import { BrasilTaxVisitor } from './BrasilTaxVisitor';
import { Cigarette } from './Cigarette';
import { Food } from './Food';
import { USTaxVisitor } from './USTaxVisitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(7);

const brazilTaxVisitor = new BrasilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);
const totalWithTaxesUS = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
  0,
);

console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
