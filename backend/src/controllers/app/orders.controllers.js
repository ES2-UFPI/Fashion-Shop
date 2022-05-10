import { getOrdersModel, getOrderModel, postOrderModel } from '../../model/orders.model.js';

export function getOrdersController(userId) {
    return getOrdersModel(userId);
}

export function getOrderController(id) {
    return getOrderModel(id);
}

export function postOrderController({ userId, order }) {
    return postOrderModel(userId, order);
}

