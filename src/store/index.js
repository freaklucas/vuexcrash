import { createStore } from "vuex";

import CounterModule from "./modules/counter.module";

export default createStore({
  state: {
    counterState: CounterModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    CounterModule,
  },
  getters: {
    getCounterState: function (state) {
      return state.counterState.counter;
    },
  },
});
