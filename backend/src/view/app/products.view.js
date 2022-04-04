import { getProductsController } from '../../controllers/app/products.controllers.js';
import { postProductController } from '../../controllers/app/products.controllers.js';

export function productView(app, route, subRoute) {
    app.get(route + subRoute, (req, res, next) => {
        const response = getProductsController();
        res.send(response);
    });
}

export function productRegister(app, route, subRoute) {
    app.get(route + subRoute, (req, res, next) => {
        const response = postProductController();
        res.send(response);
    });
}
