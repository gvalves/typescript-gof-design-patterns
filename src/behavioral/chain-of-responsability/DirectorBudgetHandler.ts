import { BaseBudgetHandler } from './BaseBudgetHandler';
import { CustomerBudget } from './CustomerBudget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O diretor tratou o orçamento!');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
