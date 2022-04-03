import { userMemory } from './databasesMemory.js';
let users = userMemory;
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
