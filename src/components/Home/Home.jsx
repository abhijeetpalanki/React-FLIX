import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../../config';

import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';

import './Home.css';

export class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
  };

  componentDidMount() {
    if (localStorage.getItem('HomeState')) {
      const state = JSON.parse(localStorage.getItem('HomeState'));
      this.setState({ ...state });
    } else {
      this.setState({
        loading: true,
      });
      this.fetchItems(this.createEndpoint('movie/popular', false, ''));
    }
  }

  fetchItems = async (endpoint) => {
    const { movies, heroImage, searchTerm } = this.state;
    const result = await (await fetch(endpoint)).json();

    try {
      this.setState(
        {
          movies: [...movies, ...result.results],
          heroImage: heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        },
        () => {
          if (searchTerm === '') {
            localStorage.setItem('HomeState', JSON.stringify(this.state));
          }
        }
      );
    } catch (error) {
      console.log('There was an error: ', error);
    }
  };

  createEndpoint = (type, loadMore, term) => {
    return `${API_URL}${type}?api_key=${API_KEY}&language=en-US&page=${
      loadMore && this.state.currentPage + 1
    }&query=${term}`;
  };

  updateItems = (loadMore, term) => {
    this.setState(
      {
        movies: loadMore ? [...this.state.movies] : [],
        loading: true,
        searchTerm: loadMore ? this.state.searchTerm : term,
      },
      () => {
        this.fetchItems(
          !this.state.searchTerm
            ? this.createEndpoint('movie/popular', loadMore, '')
            : this.createEndpoint(
                'search/movie',
                loadMore,
                this.state.searchTerm
              )
        );
      }
    );
  };

  render() {
    const {
      movies,
      heroImage,
      loading,
      currentPage,
      totalPages,
      searchTerm,
    } = this.state;

    return (
      <div className="flix-home">
        <SearchBar callback={this.updateItems} />

        {heroImage && !searchTerm ? (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
              title={heroImage.original_title}
              text={heroImage.overview}
            />
          </div>
        ) : null}

        <div className="flix-home-grid">
          <FourColGrid
            header={searchTerm ? 'Search Results' : 'Popular Movies'}
            loading={loading}
          >
            {movies.map((movie, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                      : './images/no_image.jpg'
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              );
            })}
          </FourColGrid>

          {loading ? <Spinner /> : null}

          {currentPage < totalPages && !loading ? (
            <LoadMoreBtn text="Load More" onClick={this.updateItems} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
