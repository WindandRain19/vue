import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const Count = {
  namespaced: true,
  actions: {
    incrementOdd(context, value) {
      console.log("decrement被调用");
      if (context.state.sum % 2) {
        context.commit("INCREMENT", value);
      }
    },
    incrementWait(context, value) {
      console.log("decrement被调用");
      setTimeout(() => {
        context.commit("INCREMENT", value);
      }, 500);
    },
  },
  mutations: {
    INCREMENT(state, value) {
      console.log("INCREMENT被调用");
      state.sum += value;
    },
    DECREMENT(state, value) {
      console.log("DECREMENT被调用");
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "中山中学",
    address: "广东",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

const Person = {
  namespaced: true,
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
      console.log("ADD_PERSON被调用");
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "001", name: "张三" }],
  },
  getters: {},
};

// 用于影响组件操作的动作
// const actions = {
//     increment(context, value) {
//       console.log("increment被调用");
//       context.commit("INCREMENT", value);
//     },
//     decrement(context, value) {
//       console.log("decrement被调用");
//       context.commit("DECREMENT", value);
//     },
//   incrementOdd(context, value) {
//     console.log("decrement被调用");
//     if (context.state.sum % 2) {
//       context.commit("INCREMENT", value);
//     }
//   },
//   incrementWait(context, value) {
//     console.log("decrement被调用");
//     setTimeout(() => {
//       context.commit("INCREMENT", value);
//     }, 500);
//   },
// };

// 用于操作数据
// const mutations = {
//   INCREMENT(state, value) {
//     console.log("INCREMENT被调用");
//     state.sum += value;
//   },
//   DECREMENT(state, value) {
//     console.log("DECREMENT被调用");
//     state.sum -= value;
//   },
//   ADD_PERSON(state, value) {
//     console.log("ADD_PERSON被调用");
//     state.personList.unshift(value);
//   },
// };

// 用于存贮数据
// const state = {
//   sum: 0,
//   school: "中山中学",
//   address: "广东",
//   personList: [{ id: "001", name: "张三" }],
// };

// 将state中的数据进行加工
// const getters = {
//   bigSum(state) {
//     return state.sum * 10;
//   },
// };

export default new Vuex.Store({
  //   actions,
  //   mutations,
  //   state,
  //   getters,
  modules: {
    Count,
    Person,
  },
});
