<template>
  <div class="abou_box">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />-->
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
    <Footv></Footv>
  </div>
</template>

<script>
import "../css/home.scss";
import Footv from "./foot";
export default {
  name: "footaa",
  components: {
    Footv
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.fadeIn-enter {
  // 组件显示前的状态
  opacity: 0;
}
.fadeIn-enter-active {
  // 组件显示时的状态
  transition: all 0.3s linear;
}
.fadeIn-leave-active {
  // 组件消失时候的状态
  transition: all 0.3s linear;
  opacity: 0;
}
</style>