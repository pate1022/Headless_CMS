import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import PhotoDetail from '@/views/PhotoDetail.vue';
import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/photo/:id',
    name: 'photo-detail',
    component: PhotoDetail,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
