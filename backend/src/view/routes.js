import { authRoute } from './auth.view.js';
import { appRoute } from './app/index.js';

const routeList = {
    authRoute: {
        logIn: '/auth/logIn',
        singIn: '/auth/singIn',
    },
    appRoute: {
        products: {
            main: '/app/products',
            productsById: '/app/products/:id',
        },
        cart: {
            main: '/app/cart',
            cartById: '/app/cart/:id',
        },
    },
    adminRoute: {
        products: {
            main: '/admin/products',
            productsById: '/admin/products/:id',
        },
        cart: {
            main: '/admin/cart',
            cartById: '/admin/cart/:id',
        },
    },
};

export function routes(application) {
    authRoute(application, routeList.authRoute);
    appRoute(application, routeList.appRoute);
}
