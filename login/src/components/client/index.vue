<template>
  <div>
    <header>
    <nav>
      <div class="menu-item" @click="charge">充电</div>
      <div class="menu-item" @click="getcurrentorder">当前订单</div>
      <div class="menu-item" @click="gethistoryorder">历史订单</div>
      <div class="menu-item" @click="getinformation">个人信息</div>
    </nav>
    </header>
    <div v-if="type == 'home'">
      <homepage></homepage>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import homepage from './homepage.vue'
export default {
  name:"index",
  components:{
    homepage
  },
  data(){
    return{
      "type":"home"
    }
  },
  methods:{
    charge(){
      if(this.type != "charge"){
        this.type = "charge"
        this.$router.push({
          path:'/client/index/order',
          query:{
            "type":"charge"
          }
        })
      }
    },
    getcurrentorder(){
      if(this.type != "current"){
        this.type = "current"
        this.$router.push({
          path:'/client/index/order',
          query:{
            "type":"current"
          }
        })
      }
      
    },
    gethistoryorder(){
      if(this.type != "history"){
        this.type = "history"
        this.$router.push({
          path:'/client/index/order',
          query:{
            "type":"history"
          }
        })
      }
      
    },
    getinformation(){
      if(this.type != "information"){
        this.type = "information"
        this.$router.push({
          path:'/client/index/information',
        })
      }
      
    }
  }
}
</script>

<style>
header {
    background: dimgrey;
    width: auto;
    height: 80px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item{
  color: #8a1010;
  padding: 15px 100px;
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  transition: 0.4s;
  font-size: larger;
  font-weight: bold;
}
nav .menu-item:hover {
  background-color: darkgray;
  border-bottom: solid 6px;
  border-bottom-color: brown;
  height: 80px;
}
</style>