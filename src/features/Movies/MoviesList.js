import React, { Component } from 'react';
import MoviesItem from './MoviesItem'

export default class MoviesList extends Component {
    handleChangeSearch = (event) => {
        this.props.setSearch(event.target.value);
    };

    handlerClickSearch = () => {
        this.props.searchMovies();
    };

    render() {
        return (
            <div className='container'>
                <div className='row shadow header'>
                    <div className="logo mt-4 col-md-1"></div>
                    <div className="input-group mt-4 col-md-11">
                        <input className="form-control" placeholder="Search" onChange={this.handleChangeSearch} />
                        <div className="input-group-append">
                            <button className="btn btn-warning" type="submit" onClick={this.handlerClickSearch}>Go</button> 
                        </div>
                    </div>
                </div>
                <div className='row header'>
                    <div className="col-md-6 mt-2 mb-2">
                        <div className="d-flex align-items-center position">
                            <div className="lable">
                                SearchBy:
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline-light ml-2' value='title'>Title</button>
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline-light ml-2' value='genres'>Genres</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2 mb-2">
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="lable ml-5">
                                SortBy:
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline-light ml-2' value='vote_average'>Rating</button>
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline-light ml-2' value='release_date'>Data</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {this.props.movies.map(movie =>
                        <MoviesItem
                            key = {movie.id} 
                            id = {movie.id}
                            title = {movie.title}
                            genres = {movie.genres.join(', ')}
                            poster = {movie.poster_path}
                            rating = {movie.vote_average}
                            data = {movie.release_date}
                        />
                    )}
                </div>
                <div className='row justify-content-center footer'>
                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                        (c) Copyright IMDB 2019
                    </div>
                </div>    
            </div>
        );
    }
}
