//专门用于创建路由器
import VueRouter from 'vue-router'
//导入组件
import adminlogin from '../components/adminlogin.vue'
import clientlogin from '../components/clientlogin.vue'
import welcome from '../components/welcome.vue'
import manage from '../components/manage.vue'
import admin from '../components/admin.vue'
import client from '../components/client.vue'
import register from '../components/register.vue'
import report from '../components/report.vue'
//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path:'/admin',
            component:admin,
            children:[
                {
                    path:'login',
                    component:adminlogin
                },
                {
                    path:'manage',
                    component:manage,
                    children:[
                        {
                            path:'report',
                            component:report
                        }
                    ]
                },
            ]
        },
        {
            path:'/',
            component:welcome
        },
        {
            path:'/client',
            component:client,
            children:[
                {
                    path:'login',
                    component:clientlogin
                },
                {
                    path:'register',
                    component:register
                }
            ]
        },
        
    ]
})
export default router