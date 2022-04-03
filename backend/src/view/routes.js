import { auth } from './auth.js';

const authRoute = '/auth/';

export function routes(app) {
    auth(app, authRoute);
}
