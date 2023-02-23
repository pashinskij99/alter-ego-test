import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Home } from '../../pages/Home';
import { Header } from '../../layout/Header';
import { News } from '../../pages/News';
import {Box} from "@mui/material";

export const App = () => (
  <Box>
    <Header />

    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NEWS} element={<News />} />
    </Routes>

  </Box>
);
