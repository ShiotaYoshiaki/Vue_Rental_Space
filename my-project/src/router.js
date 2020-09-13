import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import search from './views/search.vue';
import favorites from './views/favorites.vue';
import account from './views/account.vue';
Vue.use(Router);

export default new Router({
  routes:[
  {path: '/',component: Home},
  {path: '/search',component: search},
  {path: '/favorites',component: favorites},
  {path: '/account',component: account}
  ]
})