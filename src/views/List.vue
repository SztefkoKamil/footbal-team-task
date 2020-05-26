<template>
  <div class="view container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-md-left text-secondary">Trainees list</h1>
      </div>
    </div>
    <div class="row">
      <UsersList />
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/Users-list';

export default {
  name: 'List',
  components: { UsersList }
};
</script>
