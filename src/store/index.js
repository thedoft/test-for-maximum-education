import { createStore } from 'vuex';
import * as api from '../utils/api';

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {
      filials: [],
      isPostSuccess: false,
    }
  },
  mutations: {
    setFilials(state, filials) {
      state.filials = filials;
    },
    setPostSuccessTrue(state) {
      state.isPostSuccess = true;
    }
  },
  actions: {
    async getFilials({ commit }) {
      try {
        const filials = await api.getFilials();
        commit('setFilials', filials);
      } catch (err) {
        console.log(err);
      }
    },
    async sendData({ commit }, data) {
      try {
        const res = await api.sendData(data);

        if (res.success === true) {
          commit('setPostSuccessTrue');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});

export default store;
