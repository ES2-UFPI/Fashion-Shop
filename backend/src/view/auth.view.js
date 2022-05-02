import { loginController, singInController } from '../controllers/auth.controller.js';

export function authRoute(app, authRoutes) {
    app.post(authRoutes.logIn, (req, res, next) => {
        const response = loginController(req.body);
        res.send(response);
    });

    app.post(authRoutes.singIn, (req, res, next) => {
        const response = singInController(req.body);
        res.send(response);
    });
}
