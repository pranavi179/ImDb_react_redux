import React from "react";
import { connect } from "react-redux";

// import { selectedMovie } from "../reducers/index";

const MovieDetails = props => {
  const selectedMovie = props.location.state;
  console.log("Props", props.location.state);
  if (!selectedMovie) {
    return (
      <div className="details-container" style={{ width: "70%" }}>
        <h2>Movie</h2>
        <div className="properties" style={{ backgroundColor: "Black " }}>
          <p>Select Movie</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="details-container"
        style={{ width: "70%", color: "#000" }}
      >
        <h2>Movie</h2>
        <div className="properties">
          <p>Title:{selectedMovie.title}</p>
          {/* <p>Release Date:{props.selectedMovie.releaseDate}</p> */}
          <p>Release Date:{selectedMovie.releaseDate}</p>
          <p>Rating:{selectedMovie.rating}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(MovieDetails);
