import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'profile',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'activity',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'hakoro',
      component: HelloWorld,
    },
  ],
});
