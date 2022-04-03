import { databaseInMemory } from '../utils/database/memoryDatabase.js';

export function authLoginModel(data) {
    return databaseInMemory()
        .getUsers()
        .filter((item) => item.email == data.email && item.pwd == data.pwd);
}
