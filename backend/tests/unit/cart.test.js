import { getCartController } from '../../src/controllers/app/cart.controllers';

describe('[Cart.Controller]', () => {
    test('Get cart', () => {
        const cart = getCartController('teste');
        expect(cart).toBeDefined();
    });
});
