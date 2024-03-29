// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueTouch from 'vue-touch'
Vue.config.productionTip = false
import './rem'
import ElementUI from 'element-ui';
import Vant from 'vant';
import { AddressEdit } from 'vant';
import { Icon } from 'vant';
import { Dialog } from 'vant';
import { Toast } from 'vant';

import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAwesomeSwiper)　
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(AddressEdit);
Vue.use(Dialog);
Vue.use(Icon);
import '../node_modules/swiper/css/swiper.min.css'
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})
