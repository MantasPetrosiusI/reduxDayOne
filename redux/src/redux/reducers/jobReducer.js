import { GET_JOBS } from "../actions"

const initialState = []

const JobReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_JOBS: 
        return action.allJobs;
        default:
            return state;
    }
}
export default JobReducer;