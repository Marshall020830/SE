<template>
    <router-view></router-view>
</template>

<script>
import adminlogin from './adminlogin.vue'
import manage from './manage.vue'
export default {
    name:'admin',
    comments:{
        adminlogin,
        manage
    },
    created(){
        console.log("admin被创建了")
    }
}
</script>

<style>

</style>