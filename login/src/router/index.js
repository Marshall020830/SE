//专门用于创建路由器
import VueRouter from 'vue-router'
//导入组件
import adminlogin from '../components/admin/adminlogin.vue'
import clientlogin from '../components/client/clientlogin.vue'
import welcome from '../components/welcome.vue'
import manage from '../components/admin/manage.vue'
import admin from '../components/admin/admin.vue'
import client from '../components/client/client.vue'
import register from '../components/client/register.vue'
import report from '../components/admin/report.vue'
import charge from '../components/admin/charge.vue'
import index from '../components/client/index.vue'
import information from '../components/client/information.vue'
import order from '../components/client/order.vue'
import car from '../components/client/car.vue'
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
                    path:'index/manage',
                    component:manage,
                },
                {
                    path:'index/report',
                    component:report
                },
                {
                    path:'index/charge',
                    component:charge
                }
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
                },
                {
                    path:'index',
                    component:index,
                    children:[
                        {
                            path:'information',
                            component:information
                        },
                        {
                            path:'order',
                            component:order
                        },
                        {
                            path:'car',
                            component:car
                        }
                    ]
                }
            ]
        },
        
    ]
})
export default router