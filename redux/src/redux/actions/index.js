export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavouritesAction = company => ({
  type: ADD_TO_FAVOURITES,
  payload: company
});

export const removeFromFavouritesAction = company => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company
});


export const setSearchResults = (results) =>({
  type: GET_JOBS,
  payload: results,
})

export const fetchSearchResults = (query) =>{
  return async dispatch =>{
    try{
      //const endpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      //let res = await fetch(endpoint + query + `&limit=10`);
      const res = await fetch(`/api/search?q=${query}`)
      const results = await res.json();

      dispatch(setSearchResults(results));
    }catch(error) {
      console.error(error)
    }
  }
}