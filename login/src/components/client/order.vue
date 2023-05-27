<template>
    <div v-if="type=='charge'">
        <div v-if="hascurrent">
            当前有订单，不可充电
        </div>
        <div class="box" v-else>
            用户id<input type="text" id="user_id" placeholder="用户id" v-model="user_id">
            用户id<input type="text" id="user_id" placeholder="车辆id" v-model="user_id">
            用户id<input type="text" id="user_id" placeholder="充电模式" v-model="user_id">
            用户id<input type="text" id="user_id" placeholder="充电度数" v-model="user_id">
        </div>
    </div>
    <div v-else-if="type=='current'">
        <div v-if="hascurrent">
            展示当前订单
        </div>
        <div v-else>
            当前无订单
        </div>
    </div>
    <div v-else-if="type=='history'">
        <h1>查看历史订单</h1>
    </div>

</template>

<script>
export default {
    name:"order",
    data(){
        return{
            "type":"",
            "hascurrent":false,
            "history":[],
            "currentorder":{},
            "user_id":""
        }
    },
    methods:{
        gettype(){
            this.type = this.$route.query.type
            console.log(this.type)
        },
        getcurrent(){
            var token = localStorage.getItem("token")
            var send_data = {
                "token":token
            }
            this.axios({
                method:"GET",
                url:`https://mock.apifox.cn/m1/2726825-0-default/client/index/order`,
                data:JSON.stringify(send_data)
            })
            .then((response)=>{
                console.log(response)
                if(true){
                    // console.log("请求的返回值")
                    // console.log(response.data.data.order_array)
                    this.currentorder = response.data.data.order_array.filter(function(data){
                        return data.state != "FINISHED"
                    })
                    if(this.currentorder == null){
                        this.hascurrent = false
                    }
                    else{
                        this.hascurrent = true
                    }
                }
                else{
                    alert("response.msg")
                }
            })
            .catch((error)=>{
                alert("getcurrent出错了")
            })
        },
        gethistory(){
            var token = localStorage.getItem("token")
            var send_data = {
                "token":token
            }
            this.axios({
                method:"GET",
                url:`https://mock.apifox.cn/m1/2726825-0-default/client/index/order`,
                data:JSON.stringify(send_data)
            })
            .then((response)=>{
                console.log(response)
                if(true){
                    // console.log("请求的返回值")
                    // console.log(response.data.data.order_array)
                    this.history = response.data.data.order_array.filter(function(data){
                        return data.state == "FINISHED"
                    })
                }
                else{
                    alert("response.msg")
                }
            })
            .catch((error)=>{
                alert("gethistory出错了")
            })
        }
    },
    watch:{
        $route(){
            console.log("watch")
            this.gettype()
            // 查看当前是否有正在执行的订单
            if(this.type == "charge"){
                this.getcurrent()
                if(this.currentorder == null){
                    this.hascurrent = false
                }
                else{
                    this.hascurrent = true
                }
            }
            else if(this.type == "current"){
                this.getcurrent()
                if(this.getcurrent == null){
                    this.hascurrent = false
                }
                else{
                    this.hascurrent = true
                }
            }
            else if(this.type == "history"){
                this.gethistory()
            }
          }
    },
    mounted(){
        console.log("mounted")
        this.gettype()
        if(this.type == "charge"){
            this.getcurrent()
            if(this.currentorder == null){
                this.hascurrent = false
            }
            else{
                this.hascurrent = true
            }
        }
        else if(this.type == "current"){
            this.getcurrent()
            if(this.getcurrent == null){
                this.hascurrent = false
            }
            else{
                this.hascurrent = true
            }
        }
        else if(this.type == "history"){
            this.gethistory()
        }
    }
}
</script>

<style>
    .clientloginbox {
        width: 300px;
        padding: 40px;
        /* 绝对定位，通过这个可以使元素放在页面的任何一个位置上 */
        position: absolute;
        /* 以下三行代码实现了块元素在百分比下居中 可以参考： https://www.cnblogs.com/knuzy/p/9993181.html */
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        /* 设置登陆界面的背景颜色 */
        background-color: rgb(135, 166, 224);
        /* 规定标签中元素属性为 text 的居中 */
        text-align: center;
    }
</style>