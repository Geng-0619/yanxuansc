<template>
  <div id="app">
    <!-- <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
    </transition>-->

    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件！ -->
        </router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件！ -->
      </router-view>
    </transition>
    <div
      style="position: absolute; top: 3rem; left: 2rem; background: #000; opacity: 0.5; width: 50%; height: 20%; text-align:center; font-size: 0.5rem;box-sizing:border-box;padding-top:.5rem;"
      v-show="isLoading"
    >
      <van-loading size="50px" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from "vant";
export default {
  name: "App",

  data() {
    return {
      isLoading: true
    };
  },
  created() {
    axios.interceptors.response.use(response => {
      // 对响应数据做点什么
      this.isLoading = false; // 数据请求成功isloading改为false，loading隐藏掉
      return response;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}
.el-input__suffix {
  right: 10px !important;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
a {
  text-decoration: none;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0.6rem !important;
}
.content_goods {
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.content_goods img {
  width: 100% !important;
  height: 100% !important;
  margin-top: -0.02rem;
}
.content_goods li {
  clear: both;
  /* text-indent: 0.2rem; */
  padding: 0.3rem 0;
}

.fadeIn-enter {
  /* // 组件显示前的状态 */
  opacity: 0;
}
.fadeIn-enter-active {
  /* // 组件显示时的状态 */
  transition: all 0.3s linear;
}
.fadeIn-leave-active {
  /* // 组件消失时候的状态 */
  transition: all 0.3s linear;
  opacity: 0;
}
</style>
