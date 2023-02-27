import {Route, Routes} from 'react-router-dom';
import {ROUTES} from '../../constants';
import {Home} from '../../pages/Home';
import {Header} from '../../layout/Header';
import {News} from '../../pages/News';
import {Box} from "@mui/material";
import {Profile} from "../../pages/Profile";

export const App = () => (
  <Box
    display='flex'
    flexDirection='column'
    minHeight='100vh'
  >
    <Header/>

    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>}/>
      <Route path={ROUTES.NEWS} element={<News/>}/>
      <Route path={ROUTES.PROFILE} element={<Profile/>}/>
    </Routes>

  </Box>
)

