import { loginController } from '../controllers/auth.controller.js';
import { createToken } from '../utils/auth/authValidation.js';
export function auth(app, authRoute) {
    app.post(authRoute + 'login', (req, res, next) => {
        const response = loginController(req.body);
        res.send(response);
    });

    app.post(authRoute + 'singIn', (req, res, next) => {
        res.send({ token: createToken(req.body) });
    });
}
