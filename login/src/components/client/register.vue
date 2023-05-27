<template>
  <div class="registerback">
      <div class="box">
        <h1 class="title">用户注册</h1>
        <input type="text" id="account" placeholder="Username" v-model="account">
        <div class="passwordbox">
            <input :type="pwdtype1" id="password" placeholder="Password" :style="passwdstyle" v-model="password" @blur="setpwidth(200)" @focus="setpwidth(280)">
            <i class="eye" :style="{right:toright1+'%'}"  @click="changeeye(1)"></i>
        </div>
        <div class="passwordbox">
            <input :type="pwdtype2" id="confirmpassword" placeholder="ConfirmPassword" v-model="confirmpassword" :style="confirmpasswdstyle" @blur="setcpwidth(200)" @focus="setcpwidth(280)">
            <i class="eye" :style="{right:toright2+'%'}"  @click="changeeye(2)"></i>
        </div>
       
        <span style="color:red;">{{ info }}</span>
        <input type="button" id="register" @click="doregister" value="注册">
        <!-- 指定组件呈现位置 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return{
            // "eyesrc":"closeeye.png",
            "pwdtype1":"password",
            "pwdtype2":"password",
            "account":"",
            "password":"",
            "confirmpassword":"",
            "info":"",
            // "toright":20,
            passwdstyle:{
                width:'200px',
                "border-color":"#3498db"
            },
            confirmpasswdstyle:{
                width:'200px',
                "border-color":"#3498db"
            }
            
        }
    },
    computed:{
        toright1:{
            get(){
                if(this.passwdstyle.width == '200px'){
                    return 20
                }
                else{
                    return 10
                }
            }
        },
        toright2:{
            get(){
                if(this.confirmpasswdstyle.width == '200px'){
                    return 20
                }
                else{
                    return 10
                }
            }
        },
    },
    methods:{
        doregister(){
            var account = this.account
            var password = this.password
            var confirmpassword = this.confirmpassword
            if(confirmpassword != password){
                this.info = "两次密码不一致"
            }
            else{
                var senddata = {
                    "account":account,
                    "password":password
                }
                this.axios({
                    method:'POST',
                    url:`${this.baseURL}/client/register`,
                    headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:JSON.stringify(senddata)
                })
                .then((response)=>{
                    if(response.code == 200){
                        alert("注册成功，欢迎"+account)
                        this.$router.replace('/client/login')
                    }
                    else{
                        this.info = response.msg
                    }
                })
                .catch((error) => {
                    alert('出错了')
                    // this.$router.push('/client/manage')
                })
            }
        },
        changeeye(d){
            // this.eyesrc = this.pwdtype === "password" ? './openeye.png' : './closeeye.png'
            if(d == "1"){
                this.pwdtype1 = this.pwdtype1 === "password" ? 'text' : 'password'
            }else{
                this.pwdtype2 = this.pwdtype2 === "password" ? 'text' : 'password'
            }
           
        },
        setpwidth(w){
            this.passwdstyle.width = w+'px';
            if(w == 280){
                this.passwdstyle['border-color'] = "#2ecc71"
            }
            else{
                this.passwdstyle['border-color'] = "#3498db"
            }
        },
        setcpwidth(w){
            this.confirmpasswdstyle.width = w+'px';
            if(w == 280){
                this.confirmpasswdstyle['border-color'] = "#2ecc71"
            }
            else{
                this.confirmpasswdstyle['border-color'] = "#3498db"
            }
        }
    }
}
</script>

<style>
    .passwordbox{
        position: relative;
    }
    .eye{
        display: inline-block;
        height: 16px;
        width: 16px;
        background-image: url(./openeye.png);
        background-repeat: no-repeat;
        position: absolute;
        background-size: cover;
        top: 30%;
        /* right: 10%; */
        z-index: 2;
        transition: 0.25s;

    }

    .passwordbox input{
        border: 0;
        background: none;
        display: block;
        /* 第一个参数定上下 20px 第二个auto自动适配 */
        margin: 20px auto;
        /* 文本居中 */
        text-align: center;
        /* 设置边框大小和颜色 */
        border: 2px solid;
        /* 两个参数分别对应 高 和 宽 */
        padding: 14px 10px;
        /* 设置边框为宽 */
        width: 200px;
        /* 边框对应的属性分别有三个 https://www.w3school.comcn/cssref/pr_outline.asp */
        outline: none;
        color: white;
        /* 边框的半径 更圆润*/
        border-radius: 24px;
        /* 设置动画的过渡时间 */
        transition: 0.25s;
    }
    .registerback {
        width: 100%;
        height: 100%;
        position: fixed;
        /* 设置边距，可以设置四个方向，分别是 上 右 下 左  */
        margin: 0; 
        /* 填充  也是可以设置四个方向，同上 */
        padding: 0;
        /* 设置字体风格 */
        font-family: sans-serif;
        /* 设置背景颜色 */
        background: lightsteelblue;
    }
    .box {
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
   
    .box h1 {
            color: #349;
            /* 控制文本大小写 */
            text-transform: uppercase;
            font-size: 500;
        }
    .box input[type="text"] {
        border: 0;
        background: none;
        display: block;
        /* 第一个参数定上下 20px 第二个auto自动适配 */
        margin: 20px auto;
        /* 文本居中 */
        text-align: center;
        /* 设置边框大小和颜色 */
        border: 2px solid #3498db;
        /* 两个参数分别对应 高 和 宽 */
        padding: 14px 10px;
        /* 设置边框为宽 */
        width: 200px;
        /* 边框对应的属性分别有三个 https://www.w3school.comcn/cssref/pr_outline.asp */
        outline: none;
        color: white;
        /* 边框的半径 更圆润*/
        border-radius: 24px;
        /* 设置动画的过渡时间 */
        transition: 0.25s;
    }
    input[type="password"]::-ms-reveal{
        display:none
    }
    .box input[type="text"]:focus
    {
        width: 280px;
        border-color: #2ecc71;
    }

    .box input[type="button"] {
            border: 0;
            background: none;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #2ecc71;
            padding: 14px 40px;
            outline: none;
            color: black;
            border-radius: 24px;
            transition: 0.25s;
        }

        .box input[type="button"]:hover {
            background: #2ecc71;
        }
</style>