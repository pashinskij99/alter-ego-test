import {ILimit} from "../types/store.types";

export const setLimit = (start: number, limit: number): ILimit => ({start, limit})
