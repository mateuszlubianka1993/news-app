export default (state=[], action) => {
    switch(action.type) {
        case 'GET_SEARCHED':
            return action.payload
        default:
            return state
    }
}
