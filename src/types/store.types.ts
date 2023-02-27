export type Status = 'pending' | 'fulfilled' | 'rejected' | ''

export enum ADMIN_DATA {
  USERNAME = 'admin',
  PASSWORD = '12345'
}

export interface ILimit {
  start: number
  limit: number
}
