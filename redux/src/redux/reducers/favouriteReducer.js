import { ADD_TO_FAVOURITES , REMOVE_FROM_FAVOURITES} from "../actions"

const initialState = {
  favourite: [],
}

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
          favourite: [...state.favourite, action.payload],
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
          favourite: state.favourite.filter((fav) => fav !== action.payload),
      }
    default:
      return state
  }
}

export default FavouriteReducer;