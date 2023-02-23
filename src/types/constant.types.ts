import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export enum APP_LINKS {
  HOME = '/',
  PROFILE = '/profile',
  NEWS = '/news',
  ERROR = '/error'
}


export interface IPagesLink {
  id: number
  name: string
  href: APP_LINKS
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}
