import {Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from '@mui/material';
import {MouseEventHandler, useRef, useState} from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Logout} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {pagesLink} from "../../../constants";
import {APP_LINKS} from "../../../types/constant.types";

export const User = () => {
  const [open, setOpen] = useState<boolean>(false)
  const anchorEl = useRef<HTMLButtonElement | null>(null)

  const handleClose = () => setOpen(false)
  const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    anchorEl.current = event.target as HTMLButtonElement
    setOpen(true)
  }

  const navigate = useNavigate()

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
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={() => {
        navigate(APP_LINKS.PROFILE)
        handleClose()
      }}>
        <Avatar /> Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccountCircle sx={{ width: 32, height: 32 }}>M</AccountCircle>
        </IconButton>
      </Tooltip>
      {renderMenu}
    </>
  )
}
