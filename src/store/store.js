import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import eventBus from '../eventBus';

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
    Vue.axios
      .get(`/users?page=${page}`)
      .then(res => {
        if (res.status === 200) {
          eventBus.$emit('hideModal'); // listenesr: App.vue
          mutations.setUsersList(res.data);
        } else throw new Error('Fetching trainees failed!');
      })
      .catch(err => console.log(err));
  },
  addUser(newUser) {
    eventBus.$emit('showModal'); // listeners: App.vue
    const body = {
      name: newUser.first_name,
      job: newUser.last_name
    };

    Vue.axios
      .post('/users', body)
      .then(res => {
        if (res.status === 201) {
          eventBus.$emit('showModal', 'userAdded'); // listeners: App.vue
        } else throw new Error('Adding trainee failed!');
      })
      .catch(err => console.log(err));
  },
  editUser(newData, id) {
    eventBus.$emit('showModal'); // listeners: App.vue
    const body = {
      name: newData.first_name,
      job: newData.last_name
    };

    Vue.axios
      .put(`/users/${id}`, body)
      .then(res => {
        if (res.status === 200) {
          eventBus.$emit('showModal', 'userEdited'); // listeners: App.vue
        } else throw new Error('Updating trainee failed!');
      })
      .catch(err => console.log(err));
  },
  deleteUser(id) {
    Vue.axios
      .delete(`/users/${id}`)
      .then(res => {
        if (res.status === 204) {
          eventBus.$emit('showModal', 'userDeleted'); // listeners: App.vue
        } else throw new Error('Deleting trainees failed!');
      })
      .catch(err => console.log(err));
  }
};

export { getters, mutations, actions };
