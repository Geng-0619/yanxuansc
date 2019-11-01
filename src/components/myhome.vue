<template>
  <div class="home_box">
    <div class="myh_dl">
      <div>
        <img
          style="width:1.5rem;height:1.5rem;"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          alt
        />
      </div>
      <div style="padding: 0 .2rem;">
        <router-link to="login">
          <div style="color:#fff;" v-show="!tokenShow">点击登陆</div>
        </router-link>
        <div style="color:#fff;" v-show="tokenShow">{{ this.Username }}</div>
        <div class="myh_jf">积分:0</div>
      </div>
    </div>
    <p class="myh_lb">🔈新上线更稳定的付费快递查询接口</p>
    <p style="width:100%;height:0.2rem;background:#f5f5f5;margin:0;"></p>
    <p class="myh_di">
      <span class="fontM">
        <i class="el-icon-tickets" style="font-size: 0.4rem;"></i>我的订单
      </span>
      <span>
        <i class="el-icon-arrow-right"></i>
      </span>
    </p>
    <div class="myh_d_b">
      <div>
        <span>
          <i class="el-icon-s-finance" style="font-size: 0.6rem;"></i>
        </span>
        <span class="fontM">待付款</span>
      </div>
      <div>
        <span>
          <i class="el-icon-takeaway-box" style="font-size: 0.6rem;"></i>
        </span>
        <span class="fontM">待发货</span>
      </div>
      <div>
        <span>
          <i class="el-icon-truck" style="font-size: 0.6rem;"></i>
        </span>
        <span class="fontM">待收货</span>
      </div>
      <div>
        <span>
          <i class="el-icon-chat-line-square" style="font-size: 0.6rem;"></i>
        </span>
        <span class="fontM">待评价</span>
      </div>
    </div>
    <p style="width:100%;height:0.2rem;background:#f5f5f5;margin:0;"></p>
    <div class="myh_fl">
      <div>
        <span>
          <i class="el-icon-s-ticket" style="font-size: 0.6rem;"></i>
          <!-- <van-icon name="gold-coin-o" style="font-size: 0.6rem;" /> -->
        </span>
        <span class="Mh_n">我的余额</span>
        <span>0</span>
      </div>
      <div>
        <span>
          <i class="el-icon-s-ticket" style="font-size: 0.6rem;"></i>
        </span>
        <span class="Mh_n">我的砍价</span>
      </div>
      <div>
        <span style="font-size: 0.6rem;">
          <i class="el-icon-s-ticket" ></i>
        </span>
        <span class="Mh_n">我的礼卷</span>
      </div>
      <div>
        <span>
          <i class="el-icon-star-off" style="font-size: 0.6rem;"></i>
        </span>
        <span class="Mh_n">我的收藏</span>
      </div>
      <div>
        <span>
          <i class="el-icon-map-location" style="font-size: 0.6rem;"></i>
        </span>
        <span class="Mh_n">我的地址</span>
      </div>
      <div>
        <span>
          <i class="el-icon-service" style="font-size: 0.6rem;"></i>
        </span>
        <span class="Mh_n">联系客服</span>
      </div>
    </div>
     <p style="width:100%;height:1.2rem;background:#f5f5f5;margin:0;"></p>
  </div>
</template>

<script>
import "../css/myhome.scss";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  naem: "myhome",
  data() {
    return {
      Username: "",
      tokenShow: false
    };
  },
  created() {
    let tokenU = JSON.parse(localStorage.getItem("token"));
    // console.log(tokenU)
    if (tokenU == null) {
      this.tokenShow = false;
    } else {
      _product.Myhome(tokenU).then(res => {
        if (res.data.code == 0) {
          this.tokenShow = true;
          this.Username = res.data.data.base.mobile;
          // console.log(this.Username);
        }
      });
    }
  },
  computed: {
    userToken() {
      return this.$store.state.itemToken;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>