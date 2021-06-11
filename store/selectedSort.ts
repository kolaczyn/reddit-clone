import { GetterTree } from 'vuex'
import { RootState } from './index'
import { SelectedSort } from '~/customTypes'

export const state = () : {value: SelectedSort} => ({ value: 'New' })

export type SelectedSortState = ReturnType<typeof state>;

export const mutations = {
  setSelectedSort (state: SelectedSortState, payload: SelectedSort) {
    state.value = payload
  }
}

export const getters: GetterTree<SelectedSortState, RootState> = {
  selectedSort: state => state.value
}
