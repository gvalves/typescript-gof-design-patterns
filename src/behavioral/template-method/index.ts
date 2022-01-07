import { resolve } from 'path';
import { CustomerDataParserJson } from './CustomerDataParserJson';
import { CustomerDataParserTxt } from './CustomerDataParserTxt';

const main = async () => {
  const filepathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filepathTxt);

  await customerDataParserTxt.fixCustomerData();

  console.log(customerDataParserTxt.customerData);

  const filepathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filepathJson);

  await customerDataParserJson.fixCustomerData();

  console.log(customerDataParserJson.customerData);
};

main();
