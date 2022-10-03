import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesSearch } from 'pages/MoviesSearch';
import { Home } from '../pages/Home';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='movies' element={<MoviesSearch/>}/>
          <Route path="movies/:movieId" element={<div>movies/:movieId</div>}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
