import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { faEye } from '@fortawesome/free-regular-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {faSignal} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
library.add(faEye,faDownload,faFileAlt,faPen,faCloudUploadAlt,faTrash,faSignOutAlt,faFile,faSignal)
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
