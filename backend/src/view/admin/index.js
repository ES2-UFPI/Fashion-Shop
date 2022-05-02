import { productView } from './products.view.js';


export function adminRoute(app, appPrefix) {
    productView(app, appPrefix.product);
}
