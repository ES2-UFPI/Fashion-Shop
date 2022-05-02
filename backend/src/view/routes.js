import { authRoute } from './auth.view.js';
import { appRoute } from './app/index.js';
import { adminRoute } from './admin/index.js';

const routeList = {
    authRoute: {
        singIn: '/auth/singIn',
        logIn: '/auth/logIn',
    },
    appRoute: {
        product: {
            all: '/app/products',
            productById: '/app/products/:id',
        },
        cart: {
            all: '/app/cart',
            cartByUserId: '/app/cart/:userId',
        },
    },
    adminRoute: {
        product: {
            all: '/admin/products',
            productById: '/app/products/:id',
        },
        cart: {
            all: '/admin/cart',
            cartByUserId: '/app/cart/:userId',
        },
    },
};

export function routes(application) {
    authRoute(application, routeList.authRoute);
    appRoute(application, routeList.appRoute);
    adminRoute(application, routeList.adminRoute);
}
