import axios from 'axios';

const GET_ORDER_LIST = 'GET_ORDER_LIST';
const CHANGE_ORDER_STATUS = 'CHANGE_ORDER_STATUS';

export const getOrderList = function (orderList) {
    return {
        type: GET_ORDER_LIST,
        orderList
    }
};

export const changeOrderStatus = function (status) {
    return {
        type: CHANGE_ORDER_STATUS,
        status
    }
};
//thunk to fetch all orders from DB
export function fetchOrderList() {
    return function (dispatch) {
        axios.get('/api/users/orderList')
            .then(res => res.data)
            .then(orderList => {
                dispatch(getOrderList(orderList));
            })
            .catch(err => console.log(err));
    }
}
//thunk to update order status in DB when admin changes status on front end
export function changeStatus(body) {
    return function (dispatch) {
        console.log('hit thunk', body)
        axios.put('/api/users/orderList', body)
            .then(res => res.data)
            .then((updatedBody) => {
                dispatch(changeStatus(updatedBody));
            })
            .catch(err => console.log(err));
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ORDER_LIST:
            return action.orderList;
        case CHANGE_ORDER_STATUS:
            return action.status;
        default:
            return state;
    }
}
