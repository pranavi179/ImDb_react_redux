import React from "react";
import { connect } from "react-redux";
// import { Button } from "antd";
// import MovieDetails from "./MovieDetails";

import { selectMovie } from "../actions/index";
// import { selectedMovie } from "../reducers/index";

const MovieList = ({ movies, selectMovie }) => {
  const listItems = movies.map(movie => {
    return (
      <div key={movie.title}>
        <span>{movie.title}</span>

        <button onClick={() => selectMovie(movie)}> details </button>

        {/* <div style={{ display: "active" }}>
            <h1>hello</h1>
            <div className="properties">
              <p>Title:{selectedMovie.title}</p>
              {/* <p>Release Date:{props.selectedMovie.releaseDate}</p> 
              <p>Release Date:{selectedMovie.releaseDate}</p>
              <p>Rating:{selectedMovie.rating}</p>
            </div>
          </div> */}
      </div>
    );
  });

  return (
    <div className="list-container">
      <h2>MovieList</h2>
      <ul>{listItems}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  selectMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
