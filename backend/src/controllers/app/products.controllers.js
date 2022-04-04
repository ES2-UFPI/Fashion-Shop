import { getProductsModel } from '../../model/products.model.js';
import { postProductModel } from '../../model/products.model.js';

export function getProductsController() {
    return getProductsModel();
}

export function postProductController() {
    return postProductModel();
}
