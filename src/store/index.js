//用于创建Vuex中得store
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//用于响应组件中得动作
const actions = {
    goto_admin(context){
        context.commit('gotoadmin')
    },
    goto_client(context){
        context.commit('gotoclient')
    }
}
//执行
const mutations = {
    gotoadmin(state){
        state.isclient=false
    },
    gotoclient(state){
        state.isclient=true
    },
}
//存储
const state = {
    isclient:true
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})
