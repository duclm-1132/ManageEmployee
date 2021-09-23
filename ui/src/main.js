import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

// set default config
Vue.$cookies.config('1d')

// set global cookie
Vue.$cookies.set('theme','default');
Vue.$cookies.set('hover-time','1s');

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  // EventBus,
}).$mount('#app')
