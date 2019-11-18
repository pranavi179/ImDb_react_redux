export const selectMovie = (movie) => {      //click on detail button to get detail of movie.action is function
    return {                                        // action creates a returns an obj
        type: 'MOVIE_SELECTED',                         // properties  
        payload: movie
    }
}