<template>
  <div class="abou_box">
    <!-- <div class="abou_cont"> -->
    <!-- <transition name="fade">
      
    </transition> -->
    
    <!-- </div> -->
    <router-view />
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
    return {
      
    };
  },
 
};
</script>

<style lang="scss" scoped>

</style>