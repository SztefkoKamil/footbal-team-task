import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'https://reqres.in/api';

const state = Vue.observable({
  usersList: {}
});

const getters = {
  usersList: () => state.usersList
};

const mutations = {
  setUsersList: newList => (state.usersList = newList)
};

const actions = {
  fetchUsersList(page = 1) {
    Vue.axios.get(`/users?page=${page}`).then(res => {
      // console.log(res);
      mutations.setUsersList(res.data);
    });
  }
};

export { getters, mutations, actions };
