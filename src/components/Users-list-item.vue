<template>
  <li
    class="list-group-item border-0 d-flex py-3"
    :class="{ 'bg-light': index % 2 }"
  >
    <img class="rounded-circle" width="32" :src="userData.avatar" alt="" />
    <p class="flex-grow-1 d-flex align-items-center my-0 mx-3 mx-md-5">
      {{ userData.first_name }} {{ userData.last_name }}
    </p>
    <button class="btn" @click="goToEditView">
      <svg
        class="bi bi-pencil-square"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    userData: { type: Object, default: () => null },
    index: { type: Number, default: () => 0 }
  },
  methods: {
    goToEditView() {
      this.$router.push({ name: 'Edit', query: { id: this.userData.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  svg {
    font-size: 1.5rem;
  }
}
</style>
