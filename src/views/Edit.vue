<template>
  <div class="add-view container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-md-left text-secondary">Edit trainee</h1>
      </div>
    </div>
    <UserForm :userData="userData" />
  </div>
</template>

<script>
import UserForm from '@/components/User-form';

export default {
  name: 'User',
  components: { UserForm },
  data() {
    return {
      userData: {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar:
          'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
      }
    };
  }
};
</script>
