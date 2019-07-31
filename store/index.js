import Vue from 'Vue';
import Vuex from 'Vuex';
import city from './modules/city';
import navbar from './modules/navbar';

Vue.use(Vuex);

const store =()=> new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {}
});

export default store;
