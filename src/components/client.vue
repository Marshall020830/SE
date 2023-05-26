<template>
  <router-view></router-view>
</template>

<script>
import clientlogin from './clientlogin.vue'
import register from './register.vue'
export default {
    name:'client',
    comments:{
        clientlogin,
        register
    },
    created(){
        console.log("client被创建了")
    }
}
</script>

<style>

</style>