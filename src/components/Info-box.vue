<template>
  <div class="info-box">
    <button
      type="button"
      class="btn text-secondary"
      @click="isOpen = !isOpen"
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
    >
      <svg
        class="bi bi-info-circle"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"
        />
        <circle cx="8" cy="4.5" r="1" />
      </svg>
    </button>
    <transition name="show-info">
      <div v-if="isOpen" class="card">
        <p class="m-0">Recommended avatar size is 128x128</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss">
.info-box {
  position: absolute;
  top: 10px;
  right: 15px;

  button {
    font-size: 24px;
    line-height: 1;
    padding: 5px;
  }

  .card {
    position: absolute;
    top: 40px;
    right: 40px;
    padding: 15px;
    transform-origin: top right;
  }

  .show-info-enter-active {
    animation: show-info 0.1s 1 ease-out;
  }
  @keyframes show-info {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .show-info-leave-active {
    animation: hide-info 0.1s 1 ease-out;
  }
  @keyframes hide-info {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
}
</style>
