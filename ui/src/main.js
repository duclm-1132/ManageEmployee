import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import EventBus from './evenbus/even-bus'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  // EventBus,
}).$mount('#app')
