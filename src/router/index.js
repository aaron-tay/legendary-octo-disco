import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Hakoro from '@/components/Hakoro';
import Activity from '@/components/Activity';
import Build from '@/components/Build';

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
      path: '/build',
      name: 'build',
      component: Build,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});
