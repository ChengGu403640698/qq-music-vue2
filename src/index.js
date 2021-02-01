import Vue from 'vue'
import store from '../store/store'
import router from '../router/router'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http = axios;

new Vue({
    el:'#app',
    router,
    store,
    component:App,
    render:h=>h(App),
})