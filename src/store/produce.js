import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';
const LIKE_ITEM = 'cart/likeItem';

export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE:{
        const newState = {};
        action.payload.forEach(produce => {
          newState[produce.id] = produce;
        });
        return newState;
      }
      case LIKE_ITEM: {
        const id = action.payload;
        const liked = !state[id].liked;

        return {
            ...state,
            [id]: {
                ...state[id],
                liked,
            }
        }
      }
      default:
        return state;
    }
  }

export function populateProduce() {
    return {
        type: POPULATE,
        payload: produceData,
    }
}

export function likeItem(payload) {
    return {
        type: LIKE_ITEM,
        payload
    }
}