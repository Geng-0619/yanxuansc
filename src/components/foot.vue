<template>
  <div class="home_footer">
    <router-link to="/home">
      <div>
        <span>
          <i class="el-icon-s-home footer_home"></i>
        </span>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/home/fenlei">
      <div>
        <span>
          <i class="el-icon-data-analysis footer_home"></i>
        </span>
        <span>分类</span>
      </div>
    </router-link>
    <router-link to="/cart">
      <div>
        <span>
          <i class="el-icon-shopping-cart-1 footer_home"></i>
        </span>
        <span>购物车</span>
      </div>
    </router-link>
    <router-link to="/myhome">
      <div>
        <span>
          <i class="el-icon-s-custom footer_home"></i>
        </span>
        <span>个人</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import "../css/home.scss";
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
</style>