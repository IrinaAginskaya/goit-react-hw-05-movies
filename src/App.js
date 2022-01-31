import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/Appbar/Appbar';
import Container from './components/Container/Container';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
// import HomePage from './views/HomePage/HomePage.js';

const HomePage = lazy(() => import('./views/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./views/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetails/MovieDetailes'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
