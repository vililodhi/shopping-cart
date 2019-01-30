import { SET_MESSAGE } from './hello-world-constants';
import values from 'lodash.values';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: values(action.message) };
        default:
            return state;
    }
};
