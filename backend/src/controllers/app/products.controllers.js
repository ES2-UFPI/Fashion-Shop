import { getProductsModel, postProductModel } from '../../model/products.model.js';

export function getProductsController() {
    return getProductsModel();
}

export function postProductController(product) {
    return postProductModel(product);
}
