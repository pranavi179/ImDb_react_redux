import React, { Component } from "react";
import MovieDetails from './MovieDetails';
import MovieList from './movielist';


export default class Default extends Component {
  render() {
    return (
      <div>
        <h3>Im the content </h3>
        <h1>Movies Page to be here</h1>
        <div className = "container">
          <MovieList />
          <MovieDetails />

      </div>
      </div>
      
    );
  }
}
