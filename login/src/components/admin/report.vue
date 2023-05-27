<template>
  <div>
    <button @click="goback">返回登录界面</button>
    <ul>
      <li>{{ chargeinfo.charge_id }}</li>
      <li>{{ chargeinfo.time }}</li>
      <li>{{ chargeinfo.total_charge_times }}</li>
      <li>{{ chargeinfo.total_charge_duration }}</li>
      <li>{{ chargeinfo.total_capacity }}</li>
      <li>{{ chargeinfo.total_charge_fee }}</li>
      <li>{{ chargeinfo.total_charge_service }}</li>
      <li>{{ chargeinfo.total_fee }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'report',
    data(){
        return {
            "charge_id":"",
            "chargeinfo":{},
            "info":""
        }
    },
    methods:{
        getParams(){
            this.charge_id = this.$route.query.stationid
            console.log("report获取"+this.charge_id)
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
    mounted(){
        // console.log("创建了")
        this.getParams()
        var token = localStorage.getItem("token")
        var send_data = {
          "token": token,
          "charge_id":this.charge_id
        }
        this.axios({
            method:'GET',
            url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage/report`,
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
              this.chargeinfo = response.data.data
            }
            else{
              this.info = response.data.msg
            }
          })
          .catch((error) => {
            alert('report出错了')
          })
    },
    beforeRouteLeave(to,from,next){
      next()
    },
    beforeRouteEnter(to,from,next){
      next(vm => {
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
            url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage/report`,
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
              vm.chargeinfo = response.data.data
            }
            else{
              vm.info = response.data.msg
            }
          })
          .catch((error) => {
            alert('report出错了')
          })
      })
    }
}
</script>

<style>

</style>