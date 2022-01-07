import { VisitableProduct } from './VisitableProduct';
import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
