import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsCast } from '../Api';
import ImgCart from 'components/ImgCart';
import styles from './Cast.module.css';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!moviesId) return;
    const fetchFilmCast = async () => {
      const cast = await getFilmsCast(moviesId);
      setCast(cast.cast);
    };
    fetchFilmCast();
  }, [moviesId]);

  return (
    <div className={styles.cast}>
      {cast.length === 0 && <p>We don't have any cast for this movie</p>}
      {cast.map(({ original_name, profile_path, id, character }) => (
        <div key={id} className={styles.castItem}>
          <img
            src={ImgCart(profile_path)}
            alt={original_name}
            width="200"
            className={styles.castImage}
          />
          <h4 className={styles.castName}>{original_name}</h4>
          <p className={styles.castCharacter}>Character: {character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
