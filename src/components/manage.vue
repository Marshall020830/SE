<template>
  <div>
    <el-table :data="station" style="width:100%" :cell-style="{ textAlign: 'center' }">
      <el-table-column prop="id" label="ID" width="180">
        <template slot-scope="scope">
          <div @click="jump(scope.row.id)">
            {{ scope.row.id }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>
import report from "./report.vue"
    export default {
        name:'manage',
        comments:{
          report
        },
        data(){
          return{
            station:[]
            // station:[
            //   {
            //     "id":'001',
            //     "name":'hello',
            //     "charging":"BMW",
            //     "waiting":"BMW"
            //   },
            //   {
            //     "id":'002',
            //     "name":'1',
            //     "charging":"BMW",
            //     "waiting":"BMW"
            //   },
            //   {
            //     "id":'003',
            //     "name":'2',
            //     "charging":"BMW",
            //     "waiting":"BMW"
            //   },
            // ]
          }
        },
        mounted(){
          var token = localStorage.getItem('token')
          var send_data={
            "token":token,
            "query_info": {
              "msg": "string"
            }
          }
          this.axios({
            method:'GET',
            url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage`,
            // headers:{
            //   'Content-type': 'application/json; charset=UTF-8'
            // },
            data:JSON.stringify(send_data)
          })
          .then((response)=>{
            console.log(response)
            if(response.data.code != '-1'){
              // console.log(response)
              // this.$router.push('/admin/manage')
              localStorage.setItem('token',response.data.data.token)
              this.station = response.data.data.station_set_info.station_array
            }
            else{
              this.info = response.data.msg
            }
          })
          .catch((error) => {
            alert('出错了')
            // this.$router.push('/admin/manage')
          })
        },
        methods:{
          jump(id){
            console.log("点击"+id)
            this.$router.push({
              path:'/admin/manage/report',
              query:{
                "stationid":id
              }
            })
          }
        }
    }
</script>

<style>

</style>