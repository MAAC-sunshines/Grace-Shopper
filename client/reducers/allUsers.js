import axios from 'axios';

const GET_USERS = 'GET_USERS';

export const getUsers = function (users) {
    return {
        type: GET_USERS,
        users
    }
};

export function fetchUsers() {
    return function (dispatch) {
        axios.get('/api/users')
            .then(res => res.data)
            .then(users => {
                dispatch(getUsers(users));
            })
            .catch(err => console.log(err));
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.users;
        default:
            return state;
    }
}
