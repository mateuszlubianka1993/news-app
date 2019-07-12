export default (state = [], action) => {
    switch(action.type) {
        case 'GET_TOP_HEADLINES':
            return action.payload
        default:
            return state;
    };
};