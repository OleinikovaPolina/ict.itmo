import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import moment from './plugins/moment'
import router from './router'
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  moment,
  render: (h) => h(App),
}).$mount('#app')
