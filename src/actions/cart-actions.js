import { SET_PRODUCT } from '../constants';

export const setProduct = (products) => ({
    type: SET_PRODUCT,
    products
});

export const getProduct = (product) => dispatch => {
    dispatch(setProduct(product))
}
