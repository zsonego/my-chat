import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//初始化样式
import 'normalize.css/normalize.css';

//perfect-scrollbar滚动条
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './directive/scrollbar';

//elementUI
import './plugin/element';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
