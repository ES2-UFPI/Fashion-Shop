import { loginController, singInController } from '../controllers/auth.controller.js';

export function authRoute(app, authPrefix) {
    app.post(authPrefix + 'login', (req, res, next) => {
        const response = loginController(req.body);
        res.send(response);
    });

    app.post(authPrefix + 'singIn', (req, res, next) => {
        const response = singInController(req.body);
        res.send(response);
    });
}
