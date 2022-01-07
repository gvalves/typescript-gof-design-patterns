import { MyDataStructure } from './MyDataStructure';
import { MyReverseIterator } from './MyReverseIterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('a', 'b', 'c', 'd', 'e');

const [a, b] = dataStructure;

console.log('ROUBADOS', a, b);
console.log('VÁRIAS LINHAS DE CÓDIGOS...');

const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.setIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log();
console.log('PRECISA-SE RESETAR O ITERATOR');

for (const data of dataStructure) {
  console.log(data);
}
