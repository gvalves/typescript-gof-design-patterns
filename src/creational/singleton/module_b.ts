import { MyDatabaseModule } from './db/my-database-module';
import './module_a';

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: 'Pamela', age: 30 });
myDatabaseClassic.add({ name: 'Jill', age: 50 });
myDatabaseClassic.add({ name: 'Leonardo', age: 25 });

myDatabaseClassic.show();
