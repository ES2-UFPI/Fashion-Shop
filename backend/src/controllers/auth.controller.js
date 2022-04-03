import { createHmac, createToken } from '../utils/auth/authValidation.js';
import { authLoginModel } from '../model/auth.model.js';

export function loginController(data) {
    const user = {
        email: data.email,
        pwd: createHmac(data.pwd),
    };
    const response = authLoginModel(user);
    if (!response) {
        return ({ token: null });
    }
    const token = createToken(response[0]);
    return ({ token: token });
}
