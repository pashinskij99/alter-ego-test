import {Link, Navigate} from "react-router-dom";
import {Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useAppSelector} from "../../store/hooks/hooks";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import my_image from '../../assets/image/me.jfif'
import {experience, projects, skills} from "../../constants";
import {useTranslation} from "react-i18next";
import {APP_LINKS} from "../../types/enum";

export const Profile = () => {
  const {isAuth} = useAppSelector(state => state.isAuth)

  return isAuth
    ? <ProfileContent/>
    : <Navigate to={APP_LINKS.HOME}/>
}

const styleDotIcon = {fontSize: '10px', color: '#000'}
const styleLink = {textDecoration: 'none', color: 'inherit'}

const ProfileContent = () => {
  const {t} = useTranslation()

  return (
    <Box component='section'>
      <Container>
        <Box display='grid' gridTemplateColumns='42% 58%' alignItems='center' marginBottom='30px'>
          <Box style={{maxWidth: '400px'}}>
            <img width='100%' style={{borderRadius: '50%'}} src={my_image} alt="my image"/>
          </Box>
          <Box>
            <Box textAlign='right'>
              <Typography variant='h2' marginBottom='10px' component='h1'>
                {t('profile.title.0')}<br/>{t('profile.title.1')}
              </Typography>
              <Typography letterSpacing='8px' component='h5' marginBottom='10px'>{t('profile.sub_title')}</Typography>
            </Box>
            <Typography component='p'>
              {t('profile.description')}
            </Typography>
          </Box>

        </Box>
        <Box style={{gridRowGap: '30px'}} display='grid' gridTemplateColumns='42% 58%'>
          <Box>
            <Typography component='h4' variant='h4'>{t('profile.skills.title')}</Typography>
            <List>
              {skills.map(({id}) => (
                <ListItem key={id}>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={styleDotIcon}/>
                  </ListItemIcon>
                  <ListItemText primary={t(`profile.skills.${id}`)}/>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography component='h4' variant='h4'>{t('profile.experience.title')}</Typography>
            <Typography component='p'>2020-2022 Frontend Developer | Unilimes</Typography>
            <List>
              {experience.map(({id}) => (
                <ListItem key={id}>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={styleDotIcon}/>
                  </ListItemIcon>
                  <ListItemText primary={t(`profile.experience.${id}`)}/>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography component='h4' variant='h4'>{t('profile.projects.title')}</Typography>
            <List>
              {projects.map(({id, href}) => (
                <ListItem key={id}>
                  <Link style={styleLink} to={href} target='_blank'>
                    <ListItemText primary={href}/>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
