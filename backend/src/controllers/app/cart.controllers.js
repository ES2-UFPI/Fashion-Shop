import { getCartModel } from '../../model/cart.model.js';

export function getCartController(userId) {
    return getCartModel(userId);
}
export function postCartController({ userId, productId }) {
    return postCartModel(userId, productId);
}
