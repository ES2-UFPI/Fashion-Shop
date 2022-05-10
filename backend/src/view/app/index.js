import { cartView } from './cart.view.js';
import { productView } from './products.view.js';
import { orderView } from './orders.view.js';

export function appRoute(app, appRoutes) {
    productView(app, appRoutes.products);
    cartView(app, appRoutes.cart);
    orderView(app, appRoutes.orders);
}
