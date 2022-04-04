import { productView } from './products.view.js';
import { productRegister } from './products.view.js';

const routeList = {
    product: 'products',
    addproduct: 'addproduct',
};

export function appRoute(app, appPrefix) {
    productView(app, appPrefix, routeList.product);
    productRegister(app, appPrefix, routeList.addproduct);
}
