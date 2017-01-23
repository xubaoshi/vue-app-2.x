import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log('store')
const store = new Vuex.Store({
    state: {
        users: [
            { id: 1, date: "2017-01-22", name: "vue 2.0" },
            { id: 2, date: "2017-01-22", name: "vue 2.0 learn" }
        ]
    }
})

export default store
