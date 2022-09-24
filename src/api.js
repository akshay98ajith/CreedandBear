import { faker } from "@faker-js/faker";

export let users = {
    1: {
        id: 1,
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg",
        first_name: 'Super',
        last_name: 'User',
        username: 'superuser',
        email: 'super@super.com',
        phone: '11111111',
        password: 'superuser',
        address: faker.address.city(),
    }
}


export const getUsersAPI = () =>
    new Promise((resolve, reject) => {
        if (!users) {
            return setTimeout(
                () => reject(new Error('Users not found')),
                250
            );
        }
        setTimeout(() => resolve(Object.values(users)), 250);
    });

export const getUserProfileAPI = (id) =>
    new Promise((resolve, reject) => {
        const user = users[id];
        if (!user) {
            return setTimeout(
                () => reject(new Error('User not found')),
                250
            );
        }
        setTimeout(() => resolve(user), 250);
    });


export const createUserAPI = (data) =>
    new Promise((resolve, reject) => {
        // if (!data.firstName || !data.lastName) {
        //     reject(new Error('Not all information provided'));
        // }
        const id = faker.datatype.uuid();
        const avatar = faker.internet.avatar()
        const newUser = { id, avatar, ...data };
        users = { ...users, [id]: newUser };
        setTimeout(() => resolve(true), 250);
    });

export const generateUserAPI = () =>
    new Promise((resolve, reject) => {
        // if (!data.firstName || !data.lastName) {
        //     reject(new Error('Not all information provided'));
        // }
        const id = faker.datatype.uuid();
        const first_name = faker.name.firstName();
        const last_name = faker.name.lastName();
        const email = faker.internet.email();
        const avatar = faker.internet.avatar();
        const address = faker.address.city();
        const phone = faker.phone.number();
        const password = faker.internet.password();
        const username = faker.internet.userName();
        const newUser = { id, first_name, last_name, email, avatar, address, phone, password, username };
        users = { ...users, [id]: newUser }
        setTimeout(() => resolve(true), 250);
    });

export const deleteUserAPI = (id) =>
    new Promise((resolve, reject) => {
        const { [id]: user, ...rest } = users;

        if (!user) {
            return setTimeout(
                () => reject(new Error('User not found')),
                250
            );
        }

        users = { ...rest };

        return setTimeout(() => resolve(true), 250);
    });

export const updateUserAPI = (id, data) =>
    new Promise((resolve, reject) => {
        if (!users[id]) {
            return setTimeout(
                () => reject(new Error('User not found')),
                250
            );
        }

        users[id] = { ...users[id], ...data };

        return setTimeout(() => resolve(true), 250);
    });