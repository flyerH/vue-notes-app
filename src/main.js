// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,  // 将store注入到所有组件
  // components: { App },  注：1.0采用这种方式渲染，2.0需要加上template: '<App/>';或者直接写下面那行
  render: h => h(App)
});
