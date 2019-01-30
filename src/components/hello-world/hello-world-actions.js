import { SET_MESSAGE } from './hello-world-constants';

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message
});

export const getMessage = () => dispatch => {
   dispatch(setMessage('hello world!!'))
}
