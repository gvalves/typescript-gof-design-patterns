import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Beans } from './beans';
import { MealBox } from './meal-box';
import { Rice } from './rice';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);

    this._meal.add(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
