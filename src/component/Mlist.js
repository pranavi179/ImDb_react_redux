import React from "react";
import Movie from "./Movie";

class MList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movie.map(movie => (
          <Movie key={movie.id} 
          movie={movie} />
        ))}
      </div>
    );
  }
}

MList.propTypes = {
  movie: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

MList.defaultProps = {
  movie: []
};

export default MList;
