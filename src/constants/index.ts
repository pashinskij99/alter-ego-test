import { APP_LINKS, IPagesLink } from "../types/constant.types"
import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// import ErrorIcon from '@mui/icons-material/Error';

export const ROUTES = {
  HOME: APP_LINKS.HOME,
  PROFILE: APP_LINKS.PROFILE,
  NEWS: APP_LINKS.NEWS,
  ERROR: APP_LINKS.ERROR
}

export const pagesLink: IPagesLink[] = [
  {id: 1, name: 'Home', href: ROUTES.HOME, icon: HomeIcon},
  {id: 2, name: 'News', href: ROUTES.NEWS, icon: NewspaperIcon},
]