import { authRoute } from './auth.view.js';
import { appRoute } from './app/index.js';

const routeList = {
    authRoute: '/auth/',
    appRoute: '/app/',
};

export function routes(application) {
    authRoute(application, routeList.authRoute);
    appRoute(application, routeList.appRoute);
}
