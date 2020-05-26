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
  </div>
</template>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
