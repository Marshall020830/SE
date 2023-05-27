<template>
    <div>
      <button @click="goback">返回登录界面</button>
      <h1>{{charge_id}}号充电桩等候区车辆信息</h1>
      <el-table :data="carinfo" style="width:100%" :cell-style="{ textAlign: 'center' }">
      <el-table-column prop="user_id" label="用户" width="180"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="power_capicity" label="电池总容量" width="180"></el-table-column>
      <el-table-column prop="power_current" label="当前电量" width="180"></el-table-column>
      <el-table-column prop="state" label="当前状态" width="180"></el-table-column>
    </el-table>
    </div>
  </template>
  
  <script>
  export default {
      name:'charge',
      data(){
          return {
              "charge_id":"",
              "carinfo":[],
              "info":""
          }
      },
      methods:{
          getParams(){
              this.charge_id = this.$route.query.stationid
              console.log(this.charge_id)
          },
          goback(){
            this.$router.replace("/admin/manage")
          }
      },
      watch:{
          $route(){
              this.getParams()
          }
      },
      // mounted(){
      //     console.log("mounted")
      //     this.getParams()
      //     var token = localStorage.getItem("token")
      //     var send_data = {
      //       "token": token,
      //       "id":this.charge_id
      //     }
      //     this.axios({
      //         method:'GET',
      //         url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage/charge`,
      //         // headers:{
      //         //   'Content-type': 'application/json; charset=UTF-8'
      //         // },
      //         data:JSON.stringify(send_data)
      //       })
      //       .then((response)=>{
      //         console.log(response)
      //         if(response.data.code != "-1"){
      //         //   this.$router.push('/admin/manage')
      //         //   localStorage.setItem('token',response.data.data.token)
      //           this.carinfo = response.data.data.charge_info.car_blocks
      //         }
      //         else{
      //           this.info = response.data.msg
      //         }
      //       })
      //       .catch((error) => {
      //         alert('出错了')
      //       })
      // },
      beforeRouteLeave(to,from,next){
        next()
      },
      beforeRouteEnter(to,from,next){
        next(vm => {
          console.log("route enter")
          vm.charge_id = vm.$route.query.stationid
          // debugger;
          // 
          var token = localStorage.getItem("token")
          var send_data = {
            "token": token,
            "charge_id":vm.charge_id
          }
          vm.axios({
              method:'GET',
              url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage/charge`,
              // headers:{
              //   'Content-type': 'application/json; charset=UTF-8'
              // },
              data:JSON.stringify(send_data)
            })
            .then((response)=>{
              console.log(response)
              if(response.data.code != "0"){
              //   this.$router.push('/admin/manage')
              //   localStorage.setItem('token',response.data.data.token)
                vm.carinfo = response.data.data.charge_info.car_blocks
              }
              else{
                vm.info = response.data.msg
              }
            })
            .catch((error) => {
              alert('charge出错了')
            })
        })
      }
  }
  </script>
  
  <style>
  
  </style>