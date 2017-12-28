import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './list.json';
const mock = new MockAdapter(axios);
mock.onGet('/page').reply((config) => {
    return new Promise((resolve, reject) => {
        resolve([200, data]);
    });
});
