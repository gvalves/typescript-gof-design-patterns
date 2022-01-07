import { DefaultIterator } from './DefaultIterator';
import { MyIteratorProtocol } from './MyIteratorProtocol';

export class MyDataStructure {
  private items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new DefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  getItems(): string[] {
    return this.items;
  }

  size(): number {
    return this.items.length;
  }

  setIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
