export abstract class ProductComponent {
  abstract getPrice(): number;

  add(...products: ProductComponent[]): void {
    throw new Error('Invalid ProductComponent::add call');
  }

  remove(product: ProductComponent): void {
    throw new Error('Invalid ProductComponent::remove call');
  }
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private readonly _children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this._children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this._children.indexOf(product);
    if (productIndex !== -1) this._children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this._children.reduce((sum, product) => sum + product.getPrice(), 0);
  }
}

const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
