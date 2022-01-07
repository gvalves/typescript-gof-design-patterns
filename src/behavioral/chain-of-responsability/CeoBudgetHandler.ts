import { BaseBudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class CeoBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento!');
    budget.approved = true;
    return budget;
  }
}
