import { cartView } from './cart.view.js';
import { productView } from './products.view.js';


export function appRoute(app, appPrefix) {
    productView(app, appPrefix.product);
    cartView(app, appPrefix.cart);
}
