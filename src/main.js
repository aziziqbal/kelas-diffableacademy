import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueYoutube from 'vue-youtube'
import store from './store/index.js'

Vue.use(VueYoutube)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
