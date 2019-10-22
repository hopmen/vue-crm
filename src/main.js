import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
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
  apiKey: 'AIzaSyAX3ObtyOcFLMRSiiWwE4CbGx98Kk7Y4j4',
  authDomain: 'vue-c-5fcef.firebaseapp.com',
  databaseURL: 'https://vue-c-5fcef.firebaseio.com',
  projectId: 'vue-c-5fcef',
  storageBucket: 'vue-c-5fcef.appspot.com',
  messagingSenderId: '828252250510',
  appId: '1:828252250510:web:3d439753698729e23344df',
  measurementId: 'G-L8YEK4ZQGQ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
