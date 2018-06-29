import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    gradeData: []
  },
  mutations: {
    setUser (state, user) {
      Object.assign(state.user, user)
    },
    setGradeData (state, gradeData) {
      Object.assign(state.gradeData, gradeData)
    }
  }
})
