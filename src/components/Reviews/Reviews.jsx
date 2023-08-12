import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../Api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;
    const fetchFilmReviews = async () => {
      try {
        const fetchedReviews = await getFilmReviews(moviesId);
        setReviews(fetchedReviews.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchFilmReviews();
  }, [moviesId]);

  return (
    <div className={styles.reviewsContainer}>
      {reviews.length === 0 && <p>No reviews available for this movie</p>}
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id} className={styles.reviewsListItem}>
            <h4 className={styles.reviewsListItemAuthor}>Author: {author}</h4>
            <p className={styles.reviewsListItemContent}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
