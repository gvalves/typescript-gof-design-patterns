import { VisitableProduct } from './VisitableProduct';
import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
