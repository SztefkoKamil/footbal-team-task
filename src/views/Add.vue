<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-md-left text-secondary">Add trainee</h1>
      </div>
    </div>
    <UserForm />
    <BackToListBtn />
  </div>
</template>

<script>
import UserForm from '@/components/User-form';
import BackToListBtn from '@/components/Back-to-list-btn';

export default {
  name: 'Add',
  components: { UserForm, BackToListBtn }
};
</script>
