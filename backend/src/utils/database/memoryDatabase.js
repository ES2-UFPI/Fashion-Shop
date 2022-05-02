import { userMemory, productMemory } from './databasesMemory.js';
let users = userMemory;
let products = productMemory;
let carts = cartMemory;
import crypto from 'crypto';


export function databaseInMemory() {
    return ({
        getUsers: () => {
            return users;
        },
        postUser: (user) => {
            user['id'] = crypto.randomUUID();
            users = [...users, user];
            return ({ msg: 'updated with success' });
        },
        getProducts: () => {
            return products.map((item) => (
                {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    img: item.img,
                    valor: item.value,
                }));
        },
        getProduct: (id) => {
            return products.find((item) => item.id == id);
        },
        postProduct: (product) => {
            product['id'] = crypto.randomUUID();
            products = [...products, product];
            return ({ msg: 'updated with success' });
        },
        getCart: (userId) => {
            return cart.filter((item) => item.userId == userId);
        },
        postCart: (cart) => {
            carts = [...cart, carts];
            return ({ msg: 'updated with success' });
        },
    }
    );
}
