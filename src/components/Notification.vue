<template>
  <div class="card">
    <div class="card-body p-5">
      <h3>{{ describtion }}</h3>
    </div>
    <div class="card-footer p-4">
      <button
        v-if="infoType !== 'error'"
        class="btn btn-secondary mr-4"
        @click="backToList"
      >
        Back to users list
      </button>
      <button class="btn btn-success" @click="hideModal">Continue</button>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus';

export default {
  props: {
    infoType: { type: String },
    error: { type: Object, default: () => null }
  },
  data() {
    return {
      describtion: ''
    };
  },
  created() {
    this.checkInfoType();
  },
  methods: {
    checkInfoType() {
      if (this.infoType === 'userAdded') {
        this.describtion = 'Trainee added succesfully!';
      } else if (this.infoType === 'userEdited') {
        this.describtion = 'Trainee edited succesfully!';
      } else if (this.infoType === 'error') {
        this.describtion = this.error.message;
      }
    },
    hideModal() {
      eventBus.$emit('hideModal'); // listeners: App.vue
    },
    backToList() {
      eventBus.$emit('hideModal', 'back'); // listeners: App.vue
    }
  }
};
</script>
