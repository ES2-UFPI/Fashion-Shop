import { getProductsController, getProductController } from '../../controllers/app/products.controllers.js';
import { postProductController } from '../../controllers/app/products.controllers.js';

export function productView(app, route) {
    app.get(route.main, (req, res, next) => {
        const response = getProductsController();
        res.send(response);
    });
    app.get(route.productsById, (req, res, next) => {
        const response = getProductController(req.params['id']);
        res.send(response);
    });
    app.post(route.main, (req, res, next) => {
        const response = postProductController(req.body);
        res.send(response);
    });
}
