import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { selectMovie } from '../actions/index';

const MovieList = (props) => {
    const listItems = props.movies.map((movie)=> {
        return(
            <div key = {movie.title}>
                <span>{movie.title}</span>
                
                <Button onClick = {() => props.selectMovie(movie)}> details </Button>

                <div style={{display:'none'}}>
                    <h1>hello</h1>
                </div>

            </div>
        )
    })

    return(
        <div className= "list-container">
            <h2>MovieList</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>
{
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {

    selectMovie:selectMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
