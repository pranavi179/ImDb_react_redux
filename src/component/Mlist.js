import React from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";


class MList extends React.Component {
  render() {
    return (
      <div>
         {/* {this.props.movies.map((movie) => ( */}
         { 
         movies.map(movie => (
          <Movie 
          key={movie.id} 
          movie={movie} />
            
        ))
        }
      </div>
    );
  }
}

MList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

MList.defaultProps = {
  movies: []
};

export default MList;
