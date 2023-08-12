import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import ImgCart from 'components/ImgCart';
import styles from './MoviesList.module.css';

const MoviesList = ({ filmsList }) => {
  const location = useLocation();

  return (
    <div className={styles.moviesListContainer}>
      {filmsList?.map(({ id, original_title, poster_path }, index) => (
        <div key={`${id}-${index}`} className={styles.moviesListItem}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={styles.movieLink}
          >
            <div className={styles.movieImageContainer}>
              <img
                src={ImgCart(poster_path)}
                alt={original_title}
                className={styles.movieImage}
              />
            </div>
            <h3>{original_title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  filmsList: PropTypes.array,
};

export default MoviesList;
