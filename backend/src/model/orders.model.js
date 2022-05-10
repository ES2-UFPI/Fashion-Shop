import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function getOrdersModel(user) {
    return databaseInMemory().getOrders(user);
}

export function getOrderModel(id) {
    return databaseInMemory().getOrder(id);
}

export function postOrderModel(userId, order) {
    return databaseInMemory().postOrder(userId, order);
}