import { loginController, singInController } from '../controllers/auth.controller.js';
export function auth(app, authRoute) {
    app.post(authRoute + 'login', (req, res, next) => {
        const response = loginController(req.body);
        res.send(response);
    });

    app.post(authRoute + 'singIn', (req, res, next) => {
        const response = singInController(req.body);
        res.send(response);
    });
}
