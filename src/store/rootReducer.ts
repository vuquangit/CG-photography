import { combineReducers } from 'redux'
import { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit'

import themeHeader from './ThemeHeader'

const stores = {
  themeHeader: themeHeader
}

export const rootReducer = combineReducers(stores)

const createReducer = (
  injectedReducers = {}
): Reducer<CombinedState<any>, AnyAction> => {
  const rootReducer = combineReducers({
    ...injectedReducers,
    ...stores
  })

  return rootReducer
}

export default createReducer

export type RootState = ReturnType<typeof rootReducer>
