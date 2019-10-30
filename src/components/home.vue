<template>
  <div class="home_box box_home">
    <div class="home_header" v-show="this.abab">
      <div></div>
    </div>
    <div class="home_content">
      <!-- 轮播图 -->
      <swiperhome :arr="arr"></swiperhome>
      <!-- ======================================================================================= -->

      <!-- ======================================================================================= -->
      <!-- 砍价 -->
      <kanjia :kanjia="kanjia"></kanjia>
      <!-- ======================================================================================= -->
      <p style="width:100%;height:0.4rem;background:#ccc;margin-top:0.2rem;"></p>
      <!-- ======================================================================================= -->
      <!-- 专题 -->
      <zhuanti :propZt="propZt"></zhuanti>
      <!-- ======================================================================================= -->
      <p style="width:100%;height:0.4rem;background:#ccc;margin-top:0.2rem;"></p>
      <!-- ======================================================================================= -->
      <!-- 推荐 -->
      <tuijian :propTj="propTj"></tuijian>
      <!-- ======================================================================================= -->
    </div>
    <!-- ======================================================================================= -->
    <!-- ======================================================================================= -->
  </div>
</template>

<script>
import "../css/home.scss";
import axios from "axios";
import swiperhome from "./homeswiper";
import kanjia from "./kanjia";
import tuijian from "./tuijian";
import zhuanti from "./zhuanti";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "homeVue",
  components: {
    swiperhome,
    kanjia,
    tuijian,
    zhuanti,
  },
  data() {
    return {
      arr: [],
      kanjia: [],
      kanjia1: [],
      propTj: [],
      propZt: [],
      abab: false,
      scroll: ""
    };
  },
  created() {
    _product.arr().then(res => {
      // console.log(res.data.data)
      this.arr = res.data.data;
    });
    _product.propZt().then(res => {
      let b = res.data.data;
      this.propZt = b.slice(0, 3);
      // console.log(this.propZt)
      // this.propZt = res.data.data;
    });
    _product.propTj().then(res => {
      // console.log(res.data.data)
      this.kanjia = res.data.data.filter(item => {
        return (
          item.kanjia == true &&
          item.recommendStatusStr == "推荐" &&
          item.stores == 100
        );
      });
      //  this.kanjia1 = res.data.data.filter(item => {
      //   return (
      //     item.pingtuan == true
      //   );
      // });
      // console.log(this.kanjia1)
      let a = res.data.data.filter(item => {
        return item.recommendStatusStr == "推荐";
      });
      this.propTj = a.slice(0, 4);
    });
  },
  mounted () {
    window.addEventListener('scroll',this.caca)
  },
  methods: {
     caca() {
      this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll >= 400) {
        this.abab = true;
      } else {
        this.abab = false;
      }
      // console.log(this.scroll);
    }
  }
};
</script>

<style lang="scss" scoped>
.home_header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 1rem;
  border: 1px solid #ccc;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  div {
    width: 0.4rem;
    height: 0.4rem;
    background: purple;
  }
}
.box_home {
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // height: 100%;
  // font-size: 0.4rem;
}
.home_content {
  flex: 1;
  overflow: auto;
}
</style>