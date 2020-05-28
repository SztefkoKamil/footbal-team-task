<template>
  <div class="container">
    <div class="row">
      <ViewTitle>Add trainee</ViewTitle>
    </div>
    <UserForm />
    <BackToListBtn />
  </div>
</template>

<script>
import ViewTitle from '@/components/View-title';
import UserForm from '@/components/User-form';
import BackToListBtn from '@/components/Back-to-list-btn';

export default {
  name: 'Add',
  components: { ViewTitle, UserForm, BackToListBtn }
};
</script>
