import { userMemory, productMemory, cartMemory } from './databasesMemory.js';
let users = userMemory;
let products = productMemory;
const cart = cartMemory;

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
        getCart: (id) => {
            return cart.find((item)=>item.id == id);
        },
        postCart: (userId, productId) => {
            const cartIndex = cart.findIndex((item)=>item.userId == userId);
            const newCart = { userId: userId, products: [...cartToUpdate[cartIndex].productsId, productId] };
            cart[cartIndex] = newCart;
        },
    }
    );
}
