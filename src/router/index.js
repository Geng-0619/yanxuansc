import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"
import fenlei from '@/components/fenlei'
import cart from '@/components/cart'
import myhome from '@/components/myhome'
import Qmkj from '@/components/qmkj'
import About from '@/components/about'
import Jingxuan from '@/components/jingxuan'
import Goodsxq from '@/components/goodsxq'
import Ztxq from '@/components/ztxq'
import Tjxq from '@/components/tjxq'
import Login from '@/components/login'
import Reslogin from '@/components/reslogin'
import Shangpinxq from '@/components/shangpinxq'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/home/fenlei',
          component: fenlei
        }, {
          path: '/cart',
          component: cart
        },
        {
          path: '/myhome',
          component: myhome
        },
        {
          path: '/jingxuan',
          component: Jingxuan
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/qmkj',
      component: Qmkj
    }, 
    {
      path: '/goodsxq/:id?',
      component: Goodsxq
    },
    {
      path: '/Ztxq/:id?',
      component: Ztxq
    },
    {
      path: '/tjxq/:id?',
      component: Tjxq
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reslogin',
      component: Reslogin
    },
    {
      path: '/shangpinxq',
      component: Shangpinxq
    },
    
  ]
})
