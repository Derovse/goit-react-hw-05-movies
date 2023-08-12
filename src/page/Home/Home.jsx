import { useEffect, useState } from 'react';
import { getFilms } from '../../components/Api';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      const fetchFilms = async () => {
        const fetchedFilms = await getFilms();
        setFilms(fetchedFilms.results);
      };

      fetchFilms();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: 'black' }}>Trending Today</h1>
      <MoviesList filmsList={films} />
    </div>
  );
};

export default Home;
