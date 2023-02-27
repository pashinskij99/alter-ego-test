import {Navigate} from "react-router-dom";
import {APP_LINKS} from "../../types/constant.types";
import {Box, Container, Typography} from "@mui/material";
import {useAppSelector} from "../../store/hooks/hooks";

export const Profile = () => {
  const {isAuth} = useAppSelector(state => state.isAuth)

  return isAuth
    ? <ProfileContent />
    : <Navigate to={APP_LINKS.HOME} />
}

const ProfileContent = () => (
  <Box component='section'>
    <Container>

    </Container>
  </Box>
)
