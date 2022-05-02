import { getCartController, postCartController } from '../../controllers/app/cart.controllers.js';

export function cartView(app, route) {
    app.get(route.main, (req, res, next) => {
        const response = getCartController();
        res.send(response);
    });
    app.post(route.main, (req, res, next) => {
        const response = postCartController(req.body);
        res.send(response);
    });
}
