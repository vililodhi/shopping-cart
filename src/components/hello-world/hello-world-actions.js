import { SET_MESSAGE } from './hello-world-constants';

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message
});

export const getMessage = (test) => dispatch => {
   dispatch(setMessage(test))
}
