import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/base.less'
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
