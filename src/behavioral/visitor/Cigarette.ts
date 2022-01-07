import { VisitableProduct } from './VisitableProduct';
import { TaxVisitorProtocol } from './TaxVisitorProtocol';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarrete', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
