import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
// 把VueRouter安装为vue的插件
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 定义首页的路由规则
  { path: '/', comments: Home },
  // 定义我的路由规则
  { path: '/user', comments: User }
]

// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router
