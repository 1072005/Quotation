import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
library.add(faEye,faEyeSlash)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);
Vue.prototype.$qs = qs;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
