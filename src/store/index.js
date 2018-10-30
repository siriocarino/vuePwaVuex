import Vue from "vue";
import Vuex from "vuex";
import { state } from "./store"
import { mutations } from "./mutations"
import { actions } from "./actions"
import { getters } from "./getters"

import childA from "./modules/childA.js";
import childB from "./modules/childB.js";



Vue.use(Vuex)
console.log("test index store")

console.log(state.count) // -> 1


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    scoreBoard: childA,
    resultBoard: childB
  }
});
