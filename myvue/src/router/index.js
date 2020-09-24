import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../views/page1'
import page2 from '../views/page2'
import page3 from '../views/page3'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/page1',
      name:'page1',
      component:page1,
    },
    {
      path:'/page2',
      name:'page2',
      component:page2,
    },
    {
      path:'/page3',
      name:'page3',
      component:page3,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
