import { getProductController, getProductsController } from '../../src/controllers/app/products.controllers';

describe('[Products.Controller]', () => {
    test('Get Products', () => {
        const products = getProductsController();
        const product = getProductController(products[0].id);
        expect(product.id).toBeDefined();
    });
});

