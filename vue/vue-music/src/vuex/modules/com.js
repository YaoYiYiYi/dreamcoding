import * as types from '../types'

const state = {
  showSidebar: false,
  searchHistory: ['123', 'abc']
}

const mutations = {
  // 是否展示个人菜单界面
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit}, query) {
    let searchHistory = [query,...state.searchHistory.splice()]
    searchHistory = [...new Set(searchHistory)] // 为了去重
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  getters,
  mutations,
  actions
}