import { databaseInMemory } from '../utils/database/memoryDatabase.js';


export function getCartModel(id) {
    return databaseInMemory().getCart(id);
}

export function postCartModel(userId, productId) {
    return databaseInMemory().postCart(userId, productId);
}
