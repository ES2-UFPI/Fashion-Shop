import { getOrdersController, getOrderController } from '../../controllers/app/orders.controllers.js';
import { postOrderController } from '../../controllers/app/orders.controllers.js';

export function orderView(app, route) {
    app.get(route.main, (req, res, next) => {
        const response = getOrdersController();
        res.send(response);
    });
    app.get(route.ordersById, (req, res, next) => {
        const response = getOrderController(req.params['id']);
        res.send(response);
    });
    app.post(route.main, (req, res, next) => {
        const response = postOrderController(req.body);
        res.send(response);
    });
}