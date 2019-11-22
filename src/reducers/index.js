import { combineReducers } from "redux";

// create 2 functions
export const moviesReducer = () => {
  return [
    { title: "Spacex", releaseDate: "17-nov-2019", rating: 10 },
    { title: "Spacex1", releaseDate: "17-nov-2019", rating: 10 },
    { title: "Spacex2", releaseDate: "17-nov-2019", rating: 10 },

    { title: "Spacex3", releaseDate: "17-nov-2019", rating: 10 },

    { title: "Spacex4", releaseDate: "17-nov-2019", rating: 10 }
  ];
};

export const selectedMovieReducer = (state = null, action) => {
  // recieving action .in parameter state.initial state = null
  switch (action.type) {
    case "MOVIE_SELECTED ":
      return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer, //parameters movies. gets the data from movieReducer
  selectedMovie: selectedMovieReducer
});
