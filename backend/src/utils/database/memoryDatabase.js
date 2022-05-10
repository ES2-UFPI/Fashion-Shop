import { userMemory, productMemory, cartMemory } from './databasesMemory.js';
let users = userMemory;
let products = productMemory;
const cart = cartMemory;
import crypto from 'crypto';
export function databaseInMemory() {
    return ({
        getUsers: () => {
            return users;
        },
        postUser: (user) => {
            users = [...users, user];
            return ({ msg: 'updated with success' });
        },
        getProducts: () => {
            return products;
        },
        getProduct: (id) => {
            return products.find((item) => item.id == id);
        },
        postProduct: (product) => {
            product.id = crypto.randomUUID();
            products = [...products, product];
            return ({ msg: 'updated with success' });
        },
        getCart: (userId) => {
            return cart.find((item) => item.userId == userId);
        },
        postCart: (userId, product) => {
            const cartIndex = cart.findIndex((item) => item.userId == userId);
            const newCart = { userId: userId, products: [...cart[cartIndex].products, product] };
            cart[cartIndex] = newCart;
        },
    }
    );
}
