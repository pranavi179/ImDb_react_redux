import { combineReducers } from 'redux';


// create 2 functions
 const moviesReducer = () => {
     return [
                { title: 'Spacex', releaseDate: '17-nov-2019' ,rating: 10},
                { title: 'Spacex', releaseDate: '17-nov-2019' ,rating: 10},
                { title: 'Spacex', releaseDate: '17-nov-2019' ,rating: 10},

                { title: 'Spacex', releaseDate: '17-nov-2019' ,rating: 10},

                { title: 'Spacex', releaseDate: '17-nov-2019' ,rating: 10},

     ]
 }

 const selectedMovieReducer = (state = null,action) => {               // recieving action .in parameter state.initial state = null
        switch(action.type) {                                      
            case 'MOVIE_SELECTED ':
                return action.payload
                default:
                    return state
        }
 }

 export default combineReducers(
     {
         movies : moviesReducer,                   //parameters movies. gets the data from movieReducer
         selectedMovie: selectedMovieReducer
     }
 )