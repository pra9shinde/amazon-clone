export const initialState = {
    basket: [],
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item], //push item into basket
            };
        default:
            return state;
    }
};

export default reducer;
