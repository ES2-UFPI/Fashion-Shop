import { userMemoryDatabase } from './databasesMemory.js';
let users = userMemoryDatabase;
export function databaseInMemory() {
    return ({
        getUsers: () => {
            return users;
        },
        postUser: (user) => {
            users = [...users, user];
            return ({ msg: 'updated with success' });
        },
    }
    );
}
