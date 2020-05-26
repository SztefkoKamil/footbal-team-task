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
              <button class="btn btn-outline-success">
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
              >
                {{ page }}
              </button>
            </li>
            <li v-if="usersList.page < usersList.total_pages" class="page-item">
              <button class="btn btn-outline-success">
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

export default {
  components: { UsersListItem },
  data() {
    return {
      usersList: {
        page: 1,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: [
          {
            id: 7,
            email: 'michael.lawson@reqres.in',
            first_name: 'Michael',
            last_name: 'Lawson',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
          },
          {
            id: 8,
            email: 'lindsay.ferguson@reqres.in',
            first_name: 'Lindsay',
            last_name: 'Ferguson',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'
          },
          {
            id: 9,
            email: 'tobias.funke@reqres.in',
            first_name: 'Tobias',
            last_name: 'Funke',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg'
          },
          {
            id: 10,
            email: 'byron.fields@reqres.in',
            first_name: 'Byron',
            last_name: 'Fields',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
          },
          {
            id: 11,
            email: 'george.edwards@reqres.in',
            first_name: 'George',
            last_name: 'Edwards',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'
          },
          {
            id: 12,
            email: 'rachel.howell@reqres.in',
            first_name: 'Rachel',
            last_name: 'Howell',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'
          }
        ]
      }
    };
  }
};
</script>
