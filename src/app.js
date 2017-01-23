import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import { sync } from 'vuex-router-sync'

sync(store, router)


// todo filter

const app = new Vue({
    router,
    store,
    ...App
})

export { app, router, store }
