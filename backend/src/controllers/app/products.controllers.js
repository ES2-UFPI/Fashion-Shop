import { getProductsModel, postProductModel, getProductModel } from '../../model/products.model.js';

export function getProductsController() {
    return getProductsModel();
}
export function getProductController(id) {
    return getProductModel(id);
}
export function postProductController(product) {
    return postProductModel(product);
}
