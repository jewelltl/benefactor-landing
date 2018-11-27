// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.root = `${[process.env.API_HOST, process.env.API_NAMESPACE].join('/')}`
Vue.http.options.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

console.log(`${[process.env.API_HOST, process.env.API_NAMESPACE].join('/')}`)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
