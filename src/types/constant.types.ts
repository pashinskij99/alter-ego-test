import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import {Status} from "./store.types";
import {APP_LINKS} from "./enum";

export interface IPagesLink {
  id: number
  name: string
  href: APP_LINKS
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export interface ILoadMoreButton {
  photosLength: number
  loading: Status
}

export interface ISkills {
  id: number
  name: string
}

export interface IExperience {
  id: number
  name: string
}

export interface IProjects {
  id: number
  href: string
}
