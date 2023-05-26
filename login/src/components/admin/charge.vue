<template>
    <div>
      <h1>{{stationid}}</h1>
      <ul>
        <!-- <li>{{  }}</li> -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
      name:'charge',
      data(){
          return {
              "stationid":"",
              "carinfo":[]
          }
      },
      methods:{
          getParams(){
              this.stationid = this.$route.query.stationid
              console.log(this.stationid)
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
            "id":this.stationid
          }
          this.axios({
              method:'GET',
              url:`https://mock.apifox.cn/m1/2726825-0-default/admin/login`,
              // headers:{
              //   'Content-type': 'application/json; charset=UTF-8'
              // },
              data:JSON.stringify(send_data)
            })
            .then((response)=>{
              console.log(response)
              if(response.data.code != "-1"){
              //   this.$router.push('/admin/manage')
              //   localStorage.setItem('token',response.data.data.token)
                this.carinfo = response.data.data.order_array
              }
              else{
                this.info = response.data.msg
              }
            })
            .catch((error) => {
              alert('出错了')
            })
      },
  }
  </script>
  
  <style>
  
  </style>