<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">List</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/edit">Edit</router-link>
    </div>
    <transition name="view-switch" mode="out-in">
      <router-view />
    </transition>
    <div v-if="modalOpen" class="modal">
      <component
        :infoType="infoType"
        :data="infoData"
        :is="modalContent"
      ></component>
    </div>
  </div>
</template>

<script>
import { actions } from './store/store';
import Loading from './components/Loading';
import Notification from './components/Notification';
import eventBus from './eventBus';

export default {
  components: { Loading, Notification },
  data() {
    return {
      modalOpen: true,
      modalContent: Loading,
      infoType: '',
      infoData: null
    };
  },
  methods: {
    ...actions,
    checkInfoType(infoType = {}) {
      this.modalOpen = false;
      if (
        infoType === 'userAdded' ||
        infoType === 'userEdited' ||
        infoType === 'userDeleted'
      ) {
        this.infoType = infoType;
        this.modalContent = Notification;
      } else if (infoType.id) {
        this.infoType = 'delete';
        this.infoData = infoType;
        this.modalContent = Notification;
      } else if (infoType.message) {
        this.infoType = 'error';
        this.infoData = infoType;
        this.modalContent = Notification;
      } else {
        this.modalContent = Loading;
      }
      this.modalOpen = true;
    }
  },
  created() {
    this.fetchUsersList();
    // emiters: store.js
    eventBus.$on('hideModal', back => {
      this.modalOpen = false;
      this.modalContent = Loading;
      if (back === 'back') this.$router.push({ path: '/' });
    });
    // emiters: store.js
    eventBus.$on('showModal', infoType => this.checkInfoType(infoType));
  }
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0, 0%, 30%, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view-switch-enter-active {
  animation: show-view 0.1s 1 ease-in-out;
}
@keyframes show-view {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.view-switch-leave-active {
  animation: hide-view 0.1s 1 ease-in-out;
}
@keyframes hide-view {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
