import { promises } from 'fs';
import { CustomerData } from './CustomerData';
import { CustomerDataParser } from './CustomerDataParser';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.split('\n').filter((line) => line);

    const customerData: CustomerData[] = [];

    lines.forEach((line) => {
      const [name, age, cpf] = line.split('\t');
      customerData.push({ name, age: parseInt(age), cpf });
    });

    return customerData;
  }
}
