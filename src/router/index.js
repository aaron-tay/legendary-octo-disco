import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Hakoro from '@/components/Hakoro';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hakoro',
      name: 'hakoro',
      component: Hakoro,
    },
    {
      path: '/',
      name: 'activity',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
