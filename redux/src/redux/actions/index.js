export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavorites = company => ({
  type: ADD_TO_FAVORITES,
  payload: company
});

export const removeFromFavorites = company => ({
  type: REMOVE_FROM_FAVORITES,
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