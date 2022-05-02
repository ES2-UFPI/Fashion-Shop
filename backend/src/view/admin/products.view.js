import { getProductsController } from '../../controllers/app/products.controllers.js';
import { postProductController } from '../../controllers/app/products.controllers.js';

export function productView(app, route) {
    app.get(route.all, (req, res, next) => {
        const response = getProductsController();
        res.send(response);
    });
    app.get(route.productById, (req, res, next) => {
        const response = getProductController(req.params['id']);
        res.send(response);
    });
    app.post(route.all, (req, res, next) => {
        const response = postProductController(req.body);
        res.send(response);
    });
}
