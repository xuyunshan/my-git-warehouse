import Vue from 'vue';
import VueRouter from 'vue-router';
import page1 from '../views/page1';
import page2 from '../views/page2';
import page3 from '../views/page3';
import page4 from '../views/page4';
import page5 from '../views/page5';

Vue.use(VueRouter);

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2,
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3,
  },
  {
    path: '/page4',
    name: 'page4',
    component: page4,
  },
  {
    path: '/page5',
    name: 'page5',
    component: page5,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
