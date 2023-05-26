<template>
  <div>
      <div>{{ station.id }}   {{ station.name }}</div>
      <el-table :data="charge_array" style="width:100%" :cell-style="{ textAlign: 'center' }">
      <el-table-column prop="id" label="ID" width="150">
        <template slot-scope="scope">
          <div @click="jump(scope.row.id)">
            {{ scope.row.id }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="mode" label="模式" width="150"> </el-table-column>
      <el-table-column prop="price" label="单价" width="150"> </el-table-column>
      <!-- 加按钮进行开关 -->
      <el-table-column prop="state" label="状态" width="150"> 
        <template slot-scope="scope">
          <el-button @click="changestate(scope.$index)">
            {{ scope.row.state ? "开启(点击关机)" : "关机(点击开机)" }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="capacity" label="总电量容量" width="150"> </el-table-column>
      <el-table-column prop="remain" label="剩余电量" width="150"> </el-table-column>
      <el-table-column prop="times" label="开机后充电次数" width="150"> </el-table-column>
      <el-table-column prop="" label="车辆信息" width="150"> 
        <template slot-scope="scope">
          <el-button @click="jumpcharge(scope.row.id)">
            查看车辆信息
          </el-button>
        </template>
      </el-table-column>
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
            station:[],
            charge_array:[]
          }
        },
        mounted(){
          this.autogetdata();
          this.timer = setInterval(this.autogetdata,30000)
        },
        methods:{
          autogetdata(){
            var token = localStorage.getItem('token')
            var send_data={
              "token":token,
              "query_info": {
                "msg": ""
              }
            }
            console.log("我被执行了")
            this.axios({
              method:'GET',
              url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage`,
              // headers:{
              //   'Content-type': 'application/json; charset=UTF-8'
              // },
              data:JSON.stringify(send_data)
            })
            .then((response)=>{
              console.log("@autogetdata")
              console.log(response)
              if(response.data.code != '-1'){
                this.station = response.data.data.station
                this.charge_array = response.data.data.station.charge_array
                console.log(this.charge_array)
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
          jump(id){
            console.log("点击"+id)
            this.$router.push({
              path:'/admin/manage/report',
              query:{
                "stationid":id,
              }
            })
          },
          changestate(index){
            var send_data = {
              "token":localStorage.getItem("token"),
              "switch_array":[this.charge_array[index].id]
            }
            this.axios({
            method:'POST',
            url:`https://mock.apifox.cn/m1/2726825-0-default/admin/manage`,
            headers:{
              'Content-type': 'application/json; charset=UTF-8'
            },
            data:JSON.stringify(send_data)
          })
          .then((response)=>{
            console.log("@changestate"+response)
            if(response.data.code != '-1'){
              // console.log(response)
              // this.$router.push('/admin/manage')
              this.charge_array[index].state = !this.charge_array[index].state
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
          jumpcharge(id){
            this.router.push({
              path:'/admin/manage/charge',
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