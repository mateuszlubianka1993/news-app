export default (state=[], action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return action.payload
        default:
            return state;
    }
};