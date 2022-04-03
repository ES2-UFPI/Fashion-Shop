import { auth } from './auth.view.js';

const authRoute = '/auth/';

export function routes(app) {
    auth(app, authRoute);
}
