import {SpinnerSvg} from "../../components/IconsComponent";
import {Box} from "@mui/material";

const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Preloader = () => (
  <Box style={sectionStyle} component='section'>
    <SpinnerSvg />
  </Box>
);
