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
            return products.map((item)=>(
                {
                    name: item.name,
                    description: item.description,
                    img: item.img,
                    valor: item.value,
                }));
        },
        getProduct: (id) => {
            return products.find((item)=>item.id == id);
        },
        postProduct: (product) => {
            products = [...products, product];
            return ({ msg: 'updated with success' });
        },
    }
    );
}
