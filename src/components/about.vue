<template>
  <div class="abou_box">
    <!-- <div class="abou_cont"> -->
    <!-- <transition name="fade">
      
    </transition>-->

    <!-- </div> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
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
</style>