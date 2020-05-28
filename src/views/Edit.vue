<template>
  <div class="view container">
    <div class="row">
      <ViewTitle>Edit trainee</ViewTitle>
    </div>
    <UserForm :userData="userData" />
    <BackToListBtn />
  </div>
</template>

<script>
import { getters } from '../store/store';
import ViewTitle from '@/components/View-title';
import UserForm from '@/components/User-form';
import BackToListBtn from '@/components/Back-to-list-btn';

export default {
  name: 'User',
  components: { ViewTitle, UserForm, BackToListBtn },
  data() {
    return {
      userData: {
        first_name: '',
        last_name: '',
        avatar: ''
      }
    };
  },
  computed: {
    ...getters
  },
  created() {
    this.setUserData();
  },
  methods: {
    setUserData() {
      const { id } = this.$route.query;
      const user = this.usersList.data.find(i => i.id === id);
      this.userData = user;
    }
  }
};
</script>
