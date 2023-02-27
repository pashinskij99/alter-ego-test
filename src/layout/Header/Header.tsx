import {AppBar, Container, Toolbar, Typography} from '@mui/material'
import {User} from "./User";
import {Drawer} from "./Drawer";
import {ModalComponent} from "./Modal";
import {useAppSelector} from "../../store/hooks/hooks";
import {Form} from "../../components/Form";
import {LanguageMenu} from "./LanguageMenu";

export const Header = () => {
  const {isAuth} = useAppSelector(storeState => storeState.isAuth)

  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar style={{position: 'relative'}}>

          <Drawer/>

          <Typography style={{flexGrow: 1}} variant='h6'>React App</Typography>

          <LanguageMenu />

          {isAuth
            ? <User/>
            : <ModalComponent>
              <Form/>
            </ModalComponent>
          }

        </Toolbar>
      </Container>
    </AppBar>
  )
};
