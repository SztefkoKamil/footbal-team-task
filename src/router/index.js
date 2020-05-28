import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, form, next) => {
  if (to.name === 'List') document.title = 'Trainees List - Trainees Manager';
  else if (to.name === 'Add') document.title = 'Add Trainee - Trainees Manager';
  else if (to.name === 'Edit')
    document.title = 'Edit Trainee - Trainees Manager';
  next();
});

export default router;
