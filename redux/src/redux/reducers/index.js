const initialState = {
    favorites: {
        content: []
    },
    user: {},
}
const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                favorites: {
                    ...state.favorites, content:[...state.favorites.content, action.payload],
                },
            }
        case 'REMOVE_FROM_FAVORITES': 
            return {
                ...state,
                favorites: {
                    ...state.favorites, 
                    content: state.favorites.content.filter((element, i) => i !== action.payload),
                },
            }

    default:
        return state;
    }
}