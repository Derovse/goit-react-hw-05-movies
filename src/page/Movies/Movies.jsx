import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormMovies from 'components/FormMovies/FormsMovies';
import { getFilmSearch } from 'components/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovies = searchParams.get('query');

  const fetchMoreMovies = useCallback(async () => {
    if (!searchMovies) return;

    try {
      const nextPage = Math.ceil(movie.length / 20) + 1;
      const searchMovie = await getFilmSearch(searchMovies, nextPage);
      if (searchMovie.results.length === 0) {
        toast.info('No more movies to load');
      } else {
        setMovie(prevMovies => [...prevMovies, ...searchMovie.results]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchMovies, movie]);

  useEffect(() => {
    if (!searchMovies) return;
    try {
      const fetchFilmSearch = async () => {
        setLoader(true);
        const searchMovie = await getFilmSearch(searchMovies);
        if (searchMovie.results.length === 0) {
          toast.error(`film not found ${searchMovies} `);
        } else {
          setMovie(searchMovie.results);
        }
        setLoader(false);
      };
      fetchFilmSearch();
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }, [searchMovies]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        fetchMoreMovies();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [movie, searchMovies, fetchMoreMovies]);

  return (
    <>
      <FormMovies
        setSearchParams={setSearchParams}
        searchMovies={searchMovies}
      />
      {movie.length > 0 && <MoviesList filmsList={movie} />}
      {isLoader && <Loader />}
      <ToastContainer theme="colored" />
    </>
  );
};

export default Movies;
