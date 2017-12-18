// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import { sync } from 'vuex-router-sync';
// eslint-disable-next-line
import styles from '@/assets/main.scss';

import App from './App';
import router from './router';
import store from './store';

sync(store, router);

Vue.config.productionTip = (process.env.NODE_ENV === 'production');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
