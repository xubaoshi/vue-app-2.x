import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

console.log('router')
import Home from '../views/Home.vue'

export default new Router({
    mode: 'history',
    routes: [
        { path: '/home', component: Home },
        { path: '/', redirect: '/home' }
    ]
})