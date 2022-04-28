import { getCartController, postCartController } from '../../controllers/app/cart.controllers.js';

export function cartView(app, route, subRoute) {
    app.get(route + subRoute, (req, res, next) => {
        const response = getCartController();
        res.send(response);
    });
    app.post(route + subRoute, (req, res, next) => {
        const response = postCartController(req.body);
        res.send(response);
    });
}
