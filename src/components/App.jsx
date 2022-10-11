import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesSearch } from 'pages/MoviesSearch';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
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
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
