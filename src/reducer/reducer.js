const initialState = [];


const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;
        default:
            return state
    }
};

export default reducer;