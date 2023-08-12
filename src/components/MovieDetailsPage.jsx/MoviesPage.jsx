import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import ImgCart from 'components/ImgCart';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ films, moviesId }) => {
  const location = useLocation();
  const backToMovies = useRef(location.state?.from ?? '/');

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = films;

  return (
    <div className={styles.movieDetailsContainer}>
      <Link to={backToMovies.current} className={styles.goBackLink}>
        Go Back
      </Link>
      <section
        className={styles.movieHeader}
        style={{
          background: `url(${ImgCart(backdrop_path)}) center/cover no-repeat`,
        }}
      >
        <img
          src={ImgCart(poster_path)}
          alt={original_title}
          className={styles.moviePoster}
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{original_title}</h1>
          <p className={styles.movieReleaseScore}>
            Release Date: {release_date} | User Score: {vote_average * 10}%
          </p>
          <p className={styles.movieOverview}>{overview}</p>
          <p className={styles.movieGenres}>
            Genres: {genres?.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </section>
      <p className={styles.moreInfo}>More Info</p>
      <ul className={styles.moreInfoList}>
        <li>
          <Link to={`cast`} className={styles.moreInfoLink}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} className={styles.moreInfoLink}>
            Reviews
          </Link>
        </li>
      </ul>
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default MovieDetailsPage;
