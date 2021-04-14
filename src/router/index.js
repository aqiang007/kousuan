import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Config from '@/components/config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      label: '首页'
    },
    {
      path: '/Config',
      name: 'Config',
      component: Config,
      label: '配置管理'
    }
  ]
})
