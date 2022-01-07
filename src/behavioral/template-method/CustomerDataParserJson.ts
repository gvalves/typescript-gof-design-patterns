import { promises } from 'fs';
import { CustomerData } from './CustomerData';
import { CustomerDataParser } from './CustomerDataParser';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);
    const customerData: CustomerData[] = JSON.parse(rawData.toString());

    return customerData;
  }

  protected hook(): void {
    console.log('O hook foi executado!');
  }
}
