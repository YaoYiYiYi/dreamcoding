import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1
}

// methods
const mutations = {
  add (state, n) {
    state.count += n
  },
  minus (state) {
    state.count--
  }
}

// 处理同异步
const actions = {
  addAction (context, n) {
    context.commit('add', n)
  },

  minusAction ({commit}) {
    setTimeout(() => {
      commit('minus')
    }, 3000)
    console.log('我比reduce先执行')
  }
}

// computed
const getters = {
  getcount: (state) => {
    return state.count + 100
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
