const ADD_ITEM = 'cart/addItem';
const REMOVE_ITEM = 'cart/removeItem';
const ADD_INCREMENT = 'cart/addIncrement';
const ADD_DECREMENT = 'cart/addDecrement';
const EMPTY_CART = 'cart/empty';

export default function cartReducer (state={}, action) {
    switch (action.type) {
        case ADD_ITEM:{
            const id = action.payload;
            const count = state[id] ? state[id].count+1 : 1;
            return {
                    ...state,
                    [id]: {
                            id,
                            count,
                    }
            }
          }
        case REMOVE_ITEM: {
            const id = action.payload;
            const newState = {...state};
            delete newState[id];
            return {...newState};
        }
        case ADD_INCREMENT: {
            const id = action.payload;
            const count = state[id].count+1;
            return {
                ...state,
                [id]: {
                    id,
                    count,
                }
            }

        }
        case ADD_DECREMENT: {
            const id = action.payload;
            const count = state[id].count-1;
            const newState={...state};

            if (count===0) {
                delete newState[id];
                return {...newState};
            }
            return {
                ...state,
                [id]: {
                    id,
                    count,
                }
            }

        }
        case EMPTY_CART: {
            return {};
        }
        default:
            return state
    }
    
}


export function addItem(payload) {
    return {
        type: ADD_ITEM,
        payload
    }
}

export function removeItem(payload) {
    return {
        type: REMOVE_ITEM,
        payload,
    }
}

export function addIncrement(payload) {
    return {
        type: ADD_INCREMENT,
        payload,
    }
}

export function addDecrement(payload) {
    return {
        type: ADD_DECREMENT,
        payload,
    }
}


// Since this action will completely reset the state we don't need to handle
// any payload data. We'll just reset the cart to it's initial state in the
// reducer
export function emptyCart() {
    return {
        type: EMPTY_CART,
        // payload,
    }
}