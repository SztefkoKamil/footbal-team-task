<template>
  <div id="app" :class="{ 'modal-opened': modalOpen }">
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
    // emitters: store.js, Notification.vue
    eventBus.$on('hideModal', () => {
      this.modalOpen = false;
      this.modalContent = Loading;
    });
    // emitters: store.js
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
  padding: 50px 0;

  &.modal-opened {
    height: 100vh;
    overflow: hidden;
  }

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
