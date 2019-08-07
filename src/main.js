import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyD4vvPbqKMvB73jlIW0AHAObZlanO2ToyI',
  authDomain: 'vue-crm-530b1.firebaseapp.com',
  databaseURL: 'https://vue-crm-530b1.firebaseio.com',
  projectId: 'vue-crm-530b1',
  storageBucket: '',
  messagingSenderId: '1010710557423',
  appId: '1:1010710557423:web:1ad6e7e4f81f5f2f'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
