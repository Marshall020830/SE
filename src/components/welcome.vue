<template>
    <div class="welcomeback">
        <div class="welcomebox">
        <p class="neirong">Welcome</p>
        <p class="neirong">Group 1</p>
        <button @click="manager_login">管理员登录</button>
        <button @click="client_login">用户登录</button>
        <router-view></router-view>
  </div>
    </div>
  
</template>

<script>
export default {
    name:'welcome',
    methods:{
        manager_login(){
            this.$store.dispatch('goto_admin')
            this.$router.push('/admin/login')
        },
        client_login(){
            this.$store.dispatch('goto_client')
            this.$router.push('/client/login')
        }
    }
}
</script>

<style>
        .welcomeback{
            width:100%;
            height: 100%;
            /* 设置边距，可以设置四个方向，分别是 上 右 下 左  */
            margin: 0; 
            /* 填充  也是可以设置四个方向，同上 */
            padding: 0;
            position: fixed;
            /* 设置字体风格 */
            font-family: sans-serif;
            /* 设置背景颜色 */
            background: lightblue;
            background-size: 100% 100%;
        }
		.welcomebox {
            width: 300px;
            padding: 40px;
            /* 绝对定位，通过这个可以使元素放在页面的任何一个位置上 */
            position: absolute;
            /* 以下三行代码实现了块元素在百分比下居中 可以参考： https://www.cnblogs.com/knuzy/p/9993181.html */
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            background-color: rgb(56, 196, 243);
            /* 规定标签中元素属性为 text 的居中 */
            text-align: center;
        }
		.neirong{
			font-size: 70px;
		}
		button{
			width: 50%;
			padding: 20px;
			border-radius: 25px;
			background-color: lightsteelblue;
		}
	</style>
</style>