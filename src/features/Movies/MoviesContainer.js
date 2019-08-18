import React, { Component } from 'react';
import MoviesList from './MoviesList';
const ENDPOINT = 'https://reactjs-cdp.herokuapp.com/movies';
const serialize = (obj) => {
    const str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

export default class MoviesContainer extends Component {
    state = {
        search: '',
        searchBy: 'title',
        movies: [],
    }

    setSearch = (value) => {
        this.setState({search: value});
    };

    setMovies = (data) => {
        this.setState({movies: data});
    };

    searchMovies = () => {
        this.fetchMovies({sortOrder: 'asc', searchBy: this.state.searchBy, search: this.state.search});
    };

    fetchMovies = (params) => {
        const url = `${ENDPOINT}?${serialize(params)}`;
        fetch(url)
            .then(res => res.json())
            .then(({data}) => {
                this.setMovies(data);
            });
    };

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <div>
                <MoviesList 
                    search = {this.state.search}
                    movies = {this.state.movies}
                    setSearch = {this.setSearch}
                    searchMovies = {this.searchMovies}
                />
            </div>
        );
    }
}
