import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

// example
const storeData = {
    state:{
        colapseClick: false
    },
    
}

const store = new Vuex.Store(storeData)

export default store()