import { userMemory, productMemory } from './databasesMemory.js';
let users = userMemory;
let products = productMemory;
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
        postUser: (product) => {
            products = [...products, product];
            return ({ msg: 'updated with success' });
        },
    }
    );
}
