<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </transition>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-input__suffix{
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
}
.content_goods li {
  clear: both;
  /* text-indent: 0.2rem; */
  padding: 0.3rem 0;
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
