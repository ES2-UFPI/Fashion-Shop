import { getProductsController } from '../../controllers/app/products.controllers.js';
import { postProductController } from '../../controllers/app/products.controllers.js';

export function productView(app, route, subRoute) {
    app.get(route + subRoute, (req, res, next) => {
        const response = getProductsController();
        res.send(response);
    });
    app.get(route + subRoute +'/:id', (req, res, next) => {
        const response = getProductController(req.params['id']);
        res.send(response);
    });
    app.post(route + subRoute, (req, res, next) => {
        const response = postProductController(req.body);
        res.send(response);
    });
}
