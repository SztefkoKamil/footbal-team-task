<template>
  <div class="col-12">
    <div class="card border-0 shadow-sm my-3">
      <ul class="list-group card-body py-5 px-0 px-sm-3 px-md-4">
        <UsersListItem
          v-for="(user, i) in usersList.data"
          :key="user.id"
          :userData="user"
          :index="i"
        />
      </ul>
      <div
        class="card-footer d-flex justify-content-between align-items-center border-0"
      >
        <nav aria-label="Trainees list pages navigation">
          <ul class="pagination my-3">
            <li v-if="usersList.page > 1" class="page-item">
              <button class="btn btn-outline-success" @click="prevPage()">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li
              v-for="page in usersList.total_pages"
              :key="page"
              class="page-item"
            >
              <button
                class="btn"
                :class="{
                  'btn-success': page === usersList.page,
                  'btn-outline-success': page !== usersList.page
                }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </li>
            <li v-if="usersList.page < usersList.total_pages" class="page-item">
              <button class="btn btn-outline-success" @click="nextPage()">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
        <router-link class="btn btn-success" to="/add">Add trainee</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UsersListItem from '@/components/Users-list-item';
import { getters, actions } from '@/store/store';

export default {
  components: { UsersListItem },
  computed: {
    ...getters
  },
  methods: {
    ...actions,
    prevPage() {
      this.fetchUsersList(this.usersList.page - 1);
    },
    nextPage() {
      this.fetchUsersList(this.usersList.page + 1);
    },
    goToPage(newPage) {
      if (newPage !== this.usersList.page) this.fetchUsersList(newPage);
    }
  }
};
</script>
