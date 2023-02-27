import {Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const styleButton = {
  padding: '6px 0px',
  minWidth: '30px'
}

const styleSection = {
  display: 'flex', alignItems: 'center'
}

type Language = 'en' | 'ua'

const spanStyle = {fontWeight: '600', fontSize: '20px', padding: '0 5px'}

export const LanguageMenu = () => {

  const {i18n} = useTranslation()

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language)
  }

  return (
    <Box style={styleSection}>
      <Button onClick={() => changeLanguage("en")} style={styleButton} color='inherit'>EN</Button>
      <span style={spanStyle}>/</span>
      <Button onClick={() => changeLanguage("ua")} style={styleButton} color='inherit'>UA</Button>
    </Box>
  );
}
