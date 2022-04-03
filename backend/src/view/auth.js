import { createToken, validTokenAdmin } from '../utils/auth/authValidation.js';
export function auth(app, authRoute) {
    app.post(authRoute + 'login', (req, res, next) => {
        res.send(validTokenAdmin(req.body));
    });
    app.post(authRoute + 'singIn', (req, res, next) => {
        console.log(req.body);
        res.send(createToken(req.body));
    });
}
