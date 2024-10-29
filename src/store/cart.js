const ADD_ITEM = 'cart/addItem';

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