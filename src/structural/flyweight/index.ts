import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Gustavo', '30', 'Av Brasil', 'São Paulo');
deliveryContext(factory, 'Bruno', '30', 'Av Brasil', 'São Paulo');
deliveryContext(factory, 'Marcelo', '80', 'Av Brasil', 'São Paulo');
deliveryContext(factory, 'Maria', '80', 'Rua A', 'São Paulo');
deliveryContext(factory, 'João', '803', 'Rua B', 'São Paulo');

console.log();
console.log(factory);
