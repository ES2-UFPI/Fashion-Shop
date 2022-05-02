import { databaseInMemory } from '../utils/database/memoryDatabase.js';
import crypto from 'crypto';

export function authLoginModel(data) {
    return databaseInMemory()
        .getUsers()
        .filter((item) => item.email == data.email && item.pwd == data.pwd).map(
            (item) => ({
                name: item.name,
                email: item.email,
                admin: item.admin || false,
            }),
        );
}
export function authSingInModel({ name = '', email, pwd }) {
    const response = databaseInMemory()
        .getUsers()
        .filter((item) => item.email == email);
    if (response.length == 0) {
        const user = { id: crypto.randomUUID(), name, email, pwd, admin: false };
        databaseInMemory()
            .postUser(user);
        return user;
    }
    return false;
}
