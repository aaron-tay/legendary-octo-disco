import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Hakoro from '@/components/Hakoro';
import Activity from '@/components/Activity';

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
      path: '/activity',
      name: 'activity',
      component: Activity,
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
