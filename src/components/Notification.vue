<template>
  <div class="card mx-3" style="max-width:400px;">
    <div class="card-body p-5">
      <h3>{{ describtion }}</h3>
    </div>
    <div class="card-footer p-4">
      <button
        v-if="infoType === 'userAdded' || infoType === 'userEdited'"
        class="btn btn-secondary mr-4"
        @click="backToList"
      >
        Back to users list
      </button>
      <button
        v-else-if="infoType === 'delete'"
        class="btn btn-secondary mr-4"
        @click="hideModal"
      >
        Cancel
      </button>
      <button
        v-if="infoType === 'delete'"
        class="btn btn-danger"
        @click="confirmDelete"
      >
        Delete
      </button>
      <button v-else class="btn btn-success" @click="hideModal">
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus';

export default {
  props: {
    infoType: { type: String },
    data: { default: () => null }
  },
  data() {
    return {
      describtion: ''
    };
  },
  created() {
    this.checkInfoType();
  },
  beforeUpdate() {
    this.checkInfoType();
  },
  methods: {
    checkInfoType() {
      if (this.infoType === 'userAdded') {
        this.describtion = 'Trainee added succesfully!';
      } else if (this.infoType === 'userEdited') {
        this.describtion = 'Trainee updated succesfully!';
      } else if (this.infoType === 'userDeleted') {
        this.describtion = 'Trainee deleted succesfully!';
      } else if (this.infoType === 'error') {
        this.describtion = `${this.data.message}\nSorry, some error occur, please try again in 5 minutes.`;
      } else if (this.infoType === 'delete') {
        this.describtion = `Are you sure to delete trainee ${this.data.first_name} ${this.data.last_name}?`;
      }
    },
    hideModal() {
      if (this.infoType === 'userDeleted') this.$router.push({ name: 'List' });
      eventBus.$emit('hideModal'); // listeners: App.vue
    },
    backToList() {
      eventBus.$emit('hideModal'); // listeners: App.vue
      this.$router.push({ name: 'List' });
    },
    confirmDelete() {
      eventBus.$emit('deleteAccepted', this.infoType.id); // listeners: User-form.vue
    }
  }
};
</script>
