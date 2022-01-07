import { CeoBudgetHandler } from './CeoBudgetHandler';
import { CustomerBudget } from './CustomerBudget';
import { DirectorBudgetHandler } from './DirectorBudgetHandler';
import { ManagerBudgetHandler } from './ManagerBudgetHandler';
import { SellerBudgetHandler } from './SellerBudgetHandler';

const customerBudget = new CustomerBudget(9999999);

const seller = new SellerBudgetHandler();

seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(customerBudget);
