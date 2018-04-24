import axios from 'axios';

const GET_ORDER_LIST = 'GET_ORDER_LIST';

export const getOrderList = function (orderList) {
    return {
        type: GET_ORDER_LIST,
        orderList
    }
};

export function fetchOrderList() {
    return function (dispatch) {
        axios.get('/api/orderList')
            .then(res => res.data)
            .then(orderList => {
                dispatch(getOrderList(orderList));
            })
            .catch(err => console.log(err));
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ORDER_LIST:
            return action.orderList;
        default:
            return state;
    }
}
