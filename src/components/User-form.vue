<template>
  <form class="row" @submit="submitForm">
    <div class="col-12 col-md-4 my-3 order-md-2">
      <div class="card h-100 py-4 shadow-sm border-0">
        <div class="card-body">
          <img
            class="m-4"
            width="128"
            style="min-width:128px;"
            :src="
              avatar ||
                'https://theglutensummit.com/wp-content/uploads/2013/11/mystery-avatar2-200x200.png'
            "
            alt=""
          />

          <div class="form-group d-flex flex-column m-0">
            <label class="text-left" for="avatar-url">Avatar link</label>
            <input
              class="form-control"
              type="url"
              id="avatar-url"
              v-model="avatar"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-8 my-3">
      <div class="card h-100 py-4 shadow-sm border-0">
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="form-group row">
            <div class="col-12 col-lg-6 d-flex flex-column">
              <label class="text-left" for="firstname">Firstname</label>
              <input
                class="form-control"
                type="text"
                id="firstname"
                v-model="firstname"
              />
            </div>
            <div class="col-12 col-lg-6 d-flex flex-column mt-3 mt-lg-0">
              <label class="text-left" for="lastname">Lastname</label>
              <input
                class="form-control"
                type="text"
                id="lastname"
                v-model="lastname"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success align-self-start mt-5">
            {{ userData ? 'Update trainee' : 'Add trainee' }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { actions } from '../store/store';
import eventBus from '../eventBus';

export default {
  props: { userData: { type: Object, default: () => null } },
  data() {
    return {
      avatar: '',
      firstname: '',
      lastname: ''
    };
  },
  created() {
    this.checkFormType();
    eventBus.$on('showModal', infoType => {
      if (infoType === 'userAdded') this.clearForm();
    });
  },
  methods: {
    ...actions,
    checkFormType() {
      if (this.userData) {
        this.firstname = this.userData.first_name;
        this.lastname = this.userData.last_name;
        this.avatar = this.userData.avatar;
      }
    },
    submitForm(event) {
      event.preventDefault();

      const data = {
        first_name: this.firstname,
        last_name: this.lastname,
        avatar: this.avatar
      };

      if (this.userData) this.editUser(data, this.userData.id);
      else this.addUser(data);
    },
    clearForm() {
      this.firstname = '';
      this.lastname = '';
      this.avatar = '';
    }
  }
};
</script>
