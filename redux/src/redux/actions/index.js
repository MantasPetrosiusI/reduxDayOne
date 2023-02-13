export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  }
}

export const removeFromFavouritesAction = (data) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: data,
  }
}

export const getJobsActionAsync = (query) => {
  return async (dispatch) => {
    const endpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      let res = await fetch(endpoint + query + `&limit=10`);
      if (res.ok) {
        let allJobs = await res.json();
        dispatch({
          type: GET_JOBS,
          payload: allJobs,
        })
      } else {
        console.error('An error occurred while fetching jobs');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
