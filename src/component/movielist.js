import React from "react";
import { connect } from "react-redux";
// import { Button } from "antd";
// import MovieDetails from "./MovieDetails";
import { Row, Col, Layout } from "antd";
import {  Link } from "react-router-dom";
import { selectMovie } from "../actions/index";
// import { selectedMovie } from "../reducers/index";
const { Content } = Layout;

const MovieList = ({ movies, selectMovie }) => {
  const listItems = movies.map((movie, index) => {
    return (
      <Link to={{ pathname: "/movieDetails", state: movie }} key={index}>
        <div  style={{ color: "black", fontSize: 20 }}>
          <span>{movie.title}</span>

          <button
            onClick={movie => selectMovie(movie)}
            // style={{ color: "cyan", fontSize: 20 }}
          >
            details
          </button>
          <hr />
          <Content>
            {/* <Grid id ="content"> */}
            <Row>
              <Col span={5}>
                {" "}
                {/* <MList movies={this.state.movies} /> i want the grid */}
              </Col>
            </Row>
          </Content>

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
      </Link>
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
