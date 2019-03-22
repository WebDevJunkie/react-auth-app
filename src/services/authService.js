import axios from 'axios';

const BASEURL = 'https://localhost:44318/api/';

function register({username, email, password}) {
    return axios.post(`${BASEURL}users/register`, {username, email, password})
        .then(response => response.data);
}

function login({email, password}) {
    return axios.post(`${BASEURL}users/authenticate`, {email, password})
        .then(response => {
            localStorage.setItem('user', response.data.token);
        });
}

function logout() {
    localStorage.removeItem('user');
}

export default {
    register,
    login,
    logout
}
