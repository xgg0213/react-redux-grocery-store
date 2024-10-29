const ADD_ITEM = 'cart/addItem';
const REMOVE_ITEM = 'cart/removeItem';

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