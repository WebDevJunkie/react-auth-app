import axios from 'axios';

const BASEURL = 'https://localhost:44318/api/';

function register({username, email, password}) {
    return axios.post(`${BASEURL}users/register`, {username, email, password})
        .then(response => response.data);
}

function login({email, password}) {
    return axios.post(`${BASEURL}users/authenticate`, {email, password})
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
        });
}

function user() {
    return axios.get(`${BASEURL}users/user`, authHeader())
        .then(response => response.data);
}

function logout() {
    localStorage.removeItem('user');
}

function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { headers: { "Authorization" : `Bearer ${user.token}` } };
    } else {
        return {};
    }
}

export default {
    register,
    login,
    logout,
    user
}
