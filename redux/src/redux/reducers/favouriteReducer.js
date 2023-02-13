import { ADD_TO_FAVORITES , REMOVE_FROM_FAVORITES} from "../actions"

const initialState = [];

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return [state.filter((company) => company !== action.payload)];
    default:
      return state
  }
}

export default FavouriteReducer;