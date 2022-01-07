import { AlcoholicDrink } from './AlcoholicDrink';
import { Cigarette } from './Cigarette';
import { Food } from './Food';
import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() * 1.15;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() * 3;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() * 2;
  }
}
