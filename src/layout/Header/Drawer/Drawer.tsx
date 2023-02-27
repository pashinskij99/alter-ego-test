import {useState} from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {pagesLink} from "../../../constants";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false)

  const {t} = useTranslation()

  return (
    <>

      <IconButton onClick={() => setOpen(true)} edge="start" color='inherit' aria-label='menu'>
        <MenuIcon/>
      </IconButton>

      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box sx={{width: '320px'}}>
          <nav aria-label="main mailbox folders">
            <List>
              {pagesLink.map(({id, name, href, icon: Icon}) => (
                <ListItem disablePadding key={id} onClick={() => setOpen(false)}>
                  <Link style={{width: '100%', textDecoration: 'none', color: '#000'}} to={href}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon/>
                      </ListItemIcon>
                      <ListItemText primary={t(`nav.${name.toLowerCase()}`)}/>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>

        </Box>
      </SwipeableDrawer>
    </>
  )
}


