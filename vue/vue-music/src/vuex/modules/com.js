import * as types from '../types'

// data
const state = {
  showSidebar: false,
  searchHistory: ['123', 'abc']
}

// methods
const mutations = {
  // 是否展示个人菜单界面
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  // 修改 搜索的历史记录
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  },
  [types.COM_DELETE_SEARCH_HISTORY] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.COM_DELETE_SEARCH_HISTORYALL] (state){
    state.searchHistory = []
  }
}

// 处理同异步
const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit}, query) {
    let searchHistory = [query,...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)] // 为了去重
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY, index)
  },
  deleteAll ({commit}) {
    commit(types.COM_DELETE_SEARCH_HISTORYALL)
  }
}

// computed
const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory,
}

export default {
  state,
  getters,
  mutations,
  actions
}