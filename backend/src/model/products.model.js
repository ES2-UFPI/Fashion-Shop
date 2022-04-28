import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function getProductsModel() {
    return databaseInMemory().getProducts();
}
export function getProductModel(id) {
    return databaseInMemory().getProduct(id);
}

export function postProductModel(product) {
    return databaseInMemory().postProduct(product);
}
