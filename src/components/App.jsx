import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const MoviesSearch = lazy(() => import('../pages/MovieSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to="/home"/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="movies" element={<MoviesSearch/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
