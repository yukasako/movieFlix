import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { MainLayout } from './Layouts/MainLayout';
import { SearchPage } from './Pages/SearchPage';
import { MoviesPage } from './Pages/MoviesPage';
import { TVShowsPage } from './Pages/TVShowsPage';
import { MoviePage } from './Pages/MoviePage';
import { TVShowPage } from './Pages/TVShowPage';
import { FavoritePage } from './Pages/FavoritePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<MoviesPage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movies/:id' element={<MoviePage />} />
      <Route path='/shows' element={<TVShowsPage />} />
      <Route path='/shows/:id' element={<TVShowPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/favorite/' element={<FavoritePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
