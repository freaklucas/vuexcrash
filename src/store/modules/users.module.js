export default {
  namespaced: true,
  state: {
    userList: {
      loading: false,
      users: [],
      errorMessage: null,
    },
  },
  mutations: {
    GET_USERS_REQUEST: function (state) {
      state.userList.loading = true;
    },
    GET_USERS_SUCCESS: function (state, payload) {
      state.userList.loading = false;
      state.userList.users = payload.users;
    },
    GET_USERS_FAILED: function (state, payload) {
      state.userList.loading = false;
      state.userList.errorMessage = payload.error;
    },
  },
  actions: {},
};
