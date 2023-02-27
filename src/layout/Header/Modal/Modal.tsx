import {ReactNode, useState} from "react";
import {Box, Button, Fade} from "@mui/material";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import {useTranslation} from "react-i18next";

interface IModalComponent {
  children: ReactNode
}

export const ModalComponent = ({children}: IModalComponent) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    p: 4,
  };

  const {t} = useTranslation()

  return (
    <Box ml='15px'>
      <Button onClick={handleOpen} color="inherit" variant='outlined'>{t('sign_in')}</Button>
      <Button sx={{marginLeft: 2}} color="secondary" variant='contained'>{t('sign_up')}</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
