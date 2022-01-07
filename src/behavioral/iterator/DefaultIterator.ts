import { MyIteratorProtocol } from './MyIteratorProtocol';
import { MyDataStructure } from './MyDataStructure';

export class DefaultIterator implements MyIteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    const result = this.makeValue(this.dataStructure.getItems()[this.index]);
    result.done = this.index++ >= this.dataStructure.size();

    return result;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
