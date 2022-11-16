import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Talk.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/Set.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
