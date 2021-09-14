import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TheSignUp from './components/layouts/TheSignUp.vue'
import TheSignIn from './components/layouts/TheSignIn.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path:"/sign-up",component: TheSignUp},
  {path:"/",component: TheSignIn}
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
