import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function authLoginModel(data) {
    return databaseInMemory()
        .getUsers()
        .filter((item) => item.email == data.email && item.pwd == data.pwd).map(
            (item) => ({
                name: item.name,
                email: item.email,
            }),
        );
}
export function authSingInModel(data) {
    const response = databaseInMemory()
        .getUsers()
        .filter((item) => item.email == data.email);
    console.log(response.length == 0);
    if (response.length == 0) {
        const user = { name: data.name, email: data.email, pwd: data.pwd, admin: false };
        databaseInMemory()
            .postUser(user);
        return user;
    }
    return false;
}
