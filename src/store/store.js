import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  loading: false,
  beerList: [],
  activeId: null,
  showBeer: null
}

const mutations = {
  SET_LOADING_STATE (state, currentLoadingState) {
    state.loading = currentLoadingState;
  },

  SET_ACTIVE_ID (state, id) {
    state.activeId = id;
  },

  ADD_RESULT (state, list) {
    state.beerList = list;
  },

  SHOW_BEER (state, newId) {
    state.showBeer = +new Date();
    state.activeId = newId;
  }
}

const actions = {
  addResult({commit}, list){
     commit('ADD_RESULT', list);
   },

   setActiveId({commit}, id){
     commit('SET_ACTIVE_ID', id);
   },

   setLoadingState({commit}, state){
     commit('SET_LOADING_STATE', state);
   },

   showBeer({commit}, newId){
     commit('SHOW_BEER', newId);
   }
}

const getters = {
  beerList: state => state.beerList,
  loading: state => state.loading,
  activeId: state => state.activeId,
  showBeer: state => state.showBeer
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})