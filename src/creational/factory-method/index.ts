// import { CarFactory } from './factories/car-factory';
import { randomNumbers } from './utils/random-numbers';
import { randomVehicle } from './utils/random-vehicle';

// const carFactory = new CarFactory();

// const fusca = carFactory.createVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

// const celta = carFactory.createVehicle('Celta');
// celta.pickUp('Joana');
// celta.stop();

const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicle();
  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();

  console.log('-'.repeat(10));
}
