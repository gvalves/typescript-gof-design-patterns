import { AlcoholicDrink } from './AlcoholicDrink';
import { Cigarette } from './Cigarette';
import { Food } from './Food';
import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class BrasilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() * 1.05;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() * 2.5;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() * 1.5;
  }
}
