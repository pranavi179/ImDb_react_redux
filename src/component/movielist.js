import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import { selectMovie } from "../actions/index";

const MovieList = ({ movies, selectMovie }) => {
  const listItems = movies.map(movie => {
    return (
      <div key={movie.title}>
        <span>{movie.title}</span>

        <Button onClick={() => selectMovie(movie)}> details </Button>

        <div style={{ display: "none" }}>
          <h1>hello</h1>
          {/* <div className="properties">
            <p>Title:{props.selectedMovie}</p>
            <p>Release Date:{props.selectedMovie.releaseDate}</p> 
            <p>Release Date:{props.selectedMovie}</p>
            <p>Rating:{props.selectedmovie}</p>
          </div> */}
        </div>
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
