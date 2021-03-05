import Vue from 'vue'
import vuetify from './plugins/vuetify'
import router from './routes/index'
import App from './App.vue'
import i18n from './plugins/vue-i18'
import store from './store'
import './plugins/axios'

import Auth from './layouts/Auth.vue'
import Main from './layouts/Main.vue'

Vue.config.productionTip = false
Vue.component('auth-layout', Auth)
Vue.component('main-layout', Main)
new Vue({
  vuetify,
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')