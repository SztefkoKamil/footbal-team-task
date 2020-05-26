<template>
  <div class="view container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-md-left text-secondary">Edit trainee</h1>
      </div>
    </div>
    <UserForm :userData="userData" />
    <BackToListBtn />
  </div>
</template>

<script>
import UserForm from '@/components/User-form';
import BackToListBtn from '@/components/Back-to-list-btn';

export default {
  name: 'User',
  components: { UserForm, BackToListBtn },
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
