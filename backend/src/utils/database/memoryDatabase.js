import { userMemory, productMemory, cartMemory, orderMemory } from './databasesMemory.js';
let users = userMemory;
let products = productMemory;
const cart = cartMemory;
const orders = orderMemory;
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
            const newCart = { userId: userId, cart: [...cart[cartIndex].cart, product] };
            cart[cartIndex] = newCart;
        },
        getOrders: (userId) => {
            return orders.find((item) => item.userId == userId);
        },
        getOrder: (id) => {
            return orders.find((item) => item.pedidos.id == id);
        },
        postOrder: (userId, order) => {
            const ordersIndex = orders.findIndex((item) => item.userId == userId);
            const newOrder =  { userId: userId, pedidos: [...orders[ordersIndex].pedidos, order] };
            orders[ordersIndex] = newOrder;
        }
    }
    );
}
