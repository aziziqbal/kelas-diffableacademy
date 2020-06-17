import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        count: 0,
        user: null,
        statusUser: false,
	},
	getters: {
		getCounter: state => {
			return state.count
        },
        getUser: state => {
            return state.user
        }
    },
    mutations: {
        addUser(state, event) {
          state.user = event
          state.statusUser = event.status
        }
      },
      actions: {
        createEvent({ commit }, event) {
          commit('addUser', event);
        },
      },
})