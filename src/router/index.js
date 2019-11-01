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
import Sigin from '@/components/sigin'
import SubGoods from '@/components/SubGoods'
import Shouhuo from '@/components/shouhuo'
import payHome from '@/components/payHome'
import myaddress from '@/components/myaddress'
import Kanjiaxq from '@/components/Kanjiaxq'
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
          component: Home,
          mate: { keepAlive: true }
        },
        {
          path: '/home/fenlei',
          component: fenlei,
          mate: { keepAlive: true }
        }, {
          path: '/cart',
          component: cart,
          mate: { keepAlive: true }
        },
        {
          path: '/myhome',
          component: myhome,
          mate: { keepAlive: true }
        },
        {
          path: '/jingxuan',
          component: Jingxuan,
          mate: { keepAlive: true }
        }
      ]
    },
    {
      path: '/',
      redirect: '/home',
      mate: { keepAlive: true }
    },
    {
      path: '/qmkj',
      component: Qmkj,
      mate: { keepAlive: true }
    }, 
    {
      path: '/goodsxq/:id?',
      component: Goodsxq,
      mate: { keepAlive: true }
    },
    {
      path: '/Ztxq/:id?',
      component: Ztxq,
      mate: { keepAlive: true }
    },
    {
      path: '/tjxq/:id?',
      component: Tjxq,
      mate: { keepAlive: true }
    },
    {
      path: '/login',
      component: Login,
      mate: { keepAlive: true }
    },
    {
      path: '/reslogin',
      component: Reslogin,
      mate: { keepAlive: true }
    },
    {
      path: '/shangpinxq',
      component: Shangpinxq,
      mate: { keepAlive: true }
    },
    {
      path: '/myaddress',
      component: myaddress,
      mate: { keepAlive: true }
    },
    {
      path: '/sigin',
      component: Sigin
    },
    {
      path: '/payHome',
      component: payHome
    },
    {
      path: '/SubGoods',
      component: SubGoods,
      mate: { keepAlive: true }
    },
    {
      path: '/shouhuo',
      component: Shouhuo,
      mate: { keepAlive: true }
    },
    {
      path: '/Kanjiaxq',
      component: Kanjiaxq,
    }
  ]
})
