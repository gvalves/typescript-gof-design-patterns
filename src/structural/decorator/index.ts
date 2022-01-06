import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithOneStamp = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirtWithOneStamp);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithOneStamp.getPrice(), tShirtWithOneStamp.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
