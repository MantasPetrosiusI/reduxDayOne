import { GET_JOBS } from "../actions";

const initialState = {
    listing: [],
}

const jobReducer = (state, initialState, action) =>{
    switch(action.type){
        case GET_JOBS:
            return{
                ...state,
                listing: action.payload,
            }
            default:
                return state
    }
}
export default jobReducer;