import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _meals: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._meals.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => this._meals.push(meal));
  }
}
