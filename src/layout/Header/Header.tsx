import { AppBar, Box, Button, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { pagesLink } from '../../constants';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <AppBar position='sticky'>
      <Container fixed>
        <Toolbar>
          <IconButton onClick={() => setOpen(true)} edge="start" color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Box sx={{ width: '320px' }}>
              <nav aria-label="main mailbox folders">
                <List>
                  {pagesLink.map(({ id, name, href, icon: Icon }) => (
                    <ListItem disablePadding key={id} onClick={() => setOpen(false)}>
                      <Link style={{width: '100%', textDecoration: 'none', color: '#000'}} to={href}>
                        <ListItemButton>
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </nav>

            </Box>
          </SwipeableDrawer>
          <Typography style={{ flexGrow: 1 }} variant='h6'>React App</Typography>
          <Box mr={'auto'}>
            <Button color="inherit" variant='outlined'>Log in</Button>
          </Box>
          <Button sx={{ marginLeft: 2 }} color="secondary" variant='contained'>Sign up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
};
