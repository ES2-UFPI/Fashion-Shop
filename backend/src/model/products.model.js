import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function getProductsModel() {
    return databaseInMemory().getProducts();
}
