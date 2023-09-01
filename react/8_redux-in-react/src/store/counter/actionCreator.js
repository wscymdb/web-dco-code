import { ADD_COUNT, SUB_COUNT } from './constant'

export const createAddAction = (num) => ({ type: ADD_COUNT, num })
export const createSubAction = (num) => ({ type: SUB_COUNT, num })
