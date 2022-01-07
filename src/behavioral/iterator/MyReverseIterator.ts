import { MyDataStructure } from './MyDataStructure';
import { MyIteratorProtocol } from './MyIteratorProtocol';

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index = this.dataStructure.size();

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = this.dataStructure.size();
  }

  next(): IteratorResult<string> {
    const result = this.makeValue(this.dataStructure.getItems()[--this.index]);
    result.done = this.index < 0;

    return result;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
