import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function getProductsModel() {
    return databaseInMemory().getProducts();
}

export function postProductModel(product) {
    return databaseInMemory().postProduct(product);
}
