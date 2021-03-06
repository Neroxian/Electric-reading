import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
      meta: { title: 'Home', icon : 'mdi mdi-home-outline' }
    },
    {
      path: '/history',
      name: 'history',
      component: loadView('History'),
      meta: { title: 'History', icon : 'mdi mdi-dot-outline' }
    },
    {
      path: '/readings',
      name: 'readings',
      component: loadView('Readings'),
      meta: { title: 'Readings', icon : 'mdi mdi-home-outline' }
    },
    // {
    {
      path: '/grapha',
      name: 'grapha',
      component: loadView('Grapha'),
      meta: { title: 'Grapha', icon : 'mdi mdi-home-outline' }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: loadView('About'),
    //   meta: { title: 'About', icon : 'mdi mdi-information-variant' }
    // },
  ]
})
