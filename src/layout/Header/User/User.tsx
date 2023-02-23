import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';

export const User = () => {
  const [open, setOpen] = useState<boolean>(false)
  const anchorEl = useRef<Element | null>(null)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const renderMenu = (
    <Menu
      anchorEl={anchorEl.current}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </Box>

  )
}
