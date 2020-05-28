<template>
  <div class="view container">
    <div class="row">
      <ViewTitle>Trainees List</ViewTitle>
    </div>
    <div class="row">
      <UsersList />
    </div>
  </div>
</template>

<script>
import ViewTitle from '@/components/View-title';
import UsersList from '@/components/Users-list';

export default {
  name: 'List',
  components: { ViewTitle, UsersList }
};
</script>
