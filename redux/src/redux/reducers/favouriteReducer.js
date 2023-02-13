import { ADD_TO_FAVOURITES , REMOVE_FROM_FAVOURITES} from "../actions"

const initialState = [];

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      return [state.filter((data) => data !== action.payload)];
    default:
      return state
  }
}

export default FavouriteReducer;