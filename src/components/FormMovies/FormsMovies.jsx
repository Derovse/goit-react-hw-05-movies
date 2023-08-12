import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './FormMovies.module.css';

const FormMovies = ({ setSearchParams, searchMovies }) => {
  const inputRef = useRef(null);

  const onSubmitInput = ev => {
    ev.preventDefault();
    const value = ev.target.search.value;
    setSearchParams({
      query: value,
    });
    inputRef.current.value = '';

    if (searchMovies === value) {
      return toast.warn(`You are already watching this movie '${value}'`);
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmitInput}>
        <div className={styles.formInputContainer}>
          <input
            type="text"
            name="search"
            required
            ref={inputRef}
            className={styles.searchInput}
            placeholder="Search for a movie..."
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
};

FormMovies.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default FormMovies;
