<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" alt="logo"> -->
    <router-view></router-view>
  </div>
</template>

<script>
    // import login from './components/login.vue'
    import welcome from './components/welcome.vue'
    import admin from './components/admin.vue'
    import client from './components/client.vue'
    // import manage from './components/manage.vue'
    export default {
        name:'App',
        template:`<App></App>`,
        components:{
            welcome,
            admin,
            client
        }
    }
</script>

<style>
 #app {
    /* width:max-content; */
    /* height: max-content; */
    /* 设置边距，可以设置四个方向，分别是 上 右 下 左  */
    /* margin: 0;  */
    /* 填充  也是可以设置四个方向，同上 */
    /* padding: 0; */
    margin-top:0%;
    /* 设置字体风格 */
    font-family: sans-serif;
    /* 设置背景颜色 */
    /* background: lightsteelblue; */
 }

</style>