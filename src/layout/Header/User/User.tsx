import {Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from '@mui/material';
import {MouseEventHandler, useRef, useState} from 'react';
import {Logout} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import my_image from '../../../assets/image/me.jfif'
import {useTranslation} from "react-i18next";
import {ADMIN_DATA, APP_LINKS} from "../../../types/enum";
import {useAppDispatch} from "../../../store/hooks/hooks";
import {setAuth} from "../../../store/services/isAuth";

export const User = () => {
  const [open, setOpen] = useState<boolean>(false)
  const anchorEl = useRef<HTMLButtonElement | null>(null)

  const handleClose = () => setOpen(false)
  const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    anchorEl.current = event.target as HTMLButtonElement
    setOpen(true)
  }

  const dispatch = useAppDispatch()

  const {t} = useTranslation()

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_DATA.USERNAME);
    dispatch(setAuth(false))
    handleClose()
  }

  const handleProfile = () => {
    navigate(APP_LINKS.PROFILE)
    handleClose()
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl.current}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 9,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
      <MenuItem onClick={handleProfile}>
        <Avatar/> {t('user_panel.profile')}
      </MenuItem>
      <Divider/>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small"/>
        </ListItemIcon>
        {t('user_panel.logout')}
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleOpen}
          size="small"
          sx={{ml: 2}}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <img style={{borderRadius: '50%', width: 32, height: 32}} src={my_image} alt="my image"/>
        </IconButton>
      </Tooltip>
      {renderMenu}
    </>
  )
}
