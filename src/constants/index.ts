import {IExperience, IPagesLink, IProjects, ISkills} from "../types/constant.types"
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {APP_LINKS} from "../types/enum";

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

export const skills: ISkills[] = [
  {id: 0, name: 'Javascript, ES6+'},
  {id: 1, name: 'ReactJS, NextJS, Redux, ReduxToolkit'},
  {id: 2, name: 'HTML5, CSS3(Sass / Scss / Less) / Bootstrap'},
  {id: 3, name: 'Three.js'},
  {id: 4, name: 'Version Control, Git, GitLab'},
  {id: 5, name: 'Adaptive and Cross-Browser Development'},
  {id: 6, name: 'Debugging'},
]

export const experience: IExperience[] = [
  {id: 0, name: 'Adaptive cross-browser layout of websites and\n' +
      'landing pages'},
  {id: 1, name: 'Creation of sites on React, NextJS, Typescript, Redux, ThreeJS'},
  {id: 2, name: 'Most of the projects required the use of 3D\n' +
      'models and graphics, for these purposes I used\n' +
      'the ThreeJS library'},
  {id: 3, name: 'Teamwork was done using GitLab'},
  {id: 4, name: 'Uploading applications to Amazon server (AWS)\n' +
      'using pm'},
]

export const projects: IProjects[] = [
  {id: 0, href: 'https://namastatedev.wpengine.com/'},
  {id: 1, href: 'https://pashinskij99.github.io/'},
  {id: 2, href: 'https://spotify-clone-eight-lake.vercel.app/'},
  {id: 3, href: 'https://wibe-studio-two.vercel.app/'},
  {id: 4, href: 'https://subjects-one.vercel.app/'},
]
