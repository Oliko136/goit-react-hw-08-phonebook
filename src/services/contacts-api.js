import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchAll() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function addContact(body) {
    const { data } = await axios.post('/contacts', body);
    return data;
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}