import { SET_PRODUCT } from '../constants';
//import values from 'lodash.values';

const initialState = {
    cartProducts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            const cart = state.cartProducts;
            return { ...state, cartProducts: cart };
        }
        default:
            return state;
    }
};
