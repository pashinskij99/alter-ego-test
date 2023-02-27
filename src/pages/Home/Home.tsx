import { Box, Typography } from "@mui/material";
import {useTranslation} from "react-i18next";

const styleSection = {display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 2}

export const Home = () => {
  const {t} = useTranslation()
  return (
    <Box component='section' sx={styleSection}>
      <Typography variant='h1'>{t('home')}</Typography>
    </Box>
  );
}
