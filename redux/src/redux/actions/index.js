

export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_JOBS = 'GET_JOBS'

export const addToFavouritesAction = (data) => {
    console.log(data)
    return {
        type: ADD_TO_FAVOURITE,
        payload: data,
    }
}

export const removeFromFavoritesAction = (i) => {
    return{
        type: REMOVE_FROM_FAVOURITE,
        payload: i,
    }  
}

export const getJobsActionAsync = (baseEndpoint, params) =>{
    return async (dispatch) =>{
        try{
            let res = await fetch(
                baseEndpoint + params.companyName
            )
            if(res.ok){
                let fetchJobs = await res.json()
                dispatch({
                    type:GET_JOBS,
                    payload: fetchJobs
                })
            }else{
                console.log('error')
            }
            }catch(error){
                console.log(error)
            }
        }
    }