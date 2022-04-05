import { productView } from './products.view.js';

const routeList = {
    product: 'products',
};

export function appRoute(app, appPrefix) {
    productView(app, appPrefix, routeList.product);
}
