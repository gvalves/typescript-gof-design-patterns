import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder

  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMainDishMealAndDessert(): void {
    const meal = this.mainDishBuilder
      .reset()
      .makeMeal()
      .makeDessert()
      .getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }

  makeMainDishBeverage(): void {
    const meal = this.mainDishBuilder.reset().makeBeverage().getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }

  makeVeganDishMeal(): void {
    const meal = this.veganDishBuilder.reset().makeMeal().getMeal();

    console.log(meal);
    console.log(meal.getPrice());
  }
}
