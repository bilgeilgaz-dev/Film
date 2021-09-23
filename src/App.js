import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import Table from './components/Table';
import SearchBox from './components/SearchBox';
import Details from './components/Details';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieName, setMovieName] = useState('Pokemon');
  const [year, setYear] = useState(2000);
  const [type, setType] = useState('movie');
  const [movieDetails, setMovieDetails] = useState(null);
  const [totalResult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(movieName, year, type);
  }, [movieName, year, type]);

  const getMovies = async (nameValue, yearValue, typeValue, pageValue) => {
    setIsLoading(true);
    const result = await axios.get('http://www.omdbapi.com/', {params: { apiKey: '6aa03351', s: nameValue, y: yearValue, type:typeValue}});
    //console.log('result', result);
    setTotalResult(result.data.totalResults);
    setMovies(result.data.Search);
    setIsLoading(false);
  }

  const getSelectedMovieDetails = async (id) => {
    setIsLoading(true);
    const result = await axios.get('http://www.omdbapi.com/', {params: { apiKey: '6aa03351', i: id}});
    console.log('result', result);
    setMovieDetails(result.data);
    setIsLoading(false);
  }

  const resetSelectedMovieDetails = () => {
    setMovieDetails(null);
  }

  const setMovieNameDebounced = _.throttle((event) => setMovieName(event.target.value), 500);
  const setMovieYearDebounced = _.throttle((event) => setYear(event.target.value), 500);
  const setTypeDebounced = _.throttle((event) => setType(event.target.value), 500);

  return (
    <div className="App">
      <SearchBox setMovieName={setMovieNameDebounced} setYear={setMovieYearDebounced} movieName={movieName} setType={setTypeDebounced} selectedType={type} />
      <Table isLoading={isLoading} movies={movies} totalResult={totalResult} page={page} setPage={setPage} getSelectedMovieDetails={getSelectedMovieDetails}/>
      <Details movieDetails={movieDetails} resetSelectedMovieDetails={resetSelectedMovieDetails}/>
    </div>
  );
}

export default App;
