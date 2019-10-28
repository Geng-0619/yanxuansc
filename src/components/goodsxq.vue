<template>
  <div>
    <!--  -->
    <div>
      <div class="qmkj_kk" style="position: fixed;top: 0;height:1rem;box-sizing:border-box;">
        <span class="xq_goods">
          <router-link to="/home">
            <i class="el-icon-arrow-left"></i>
          </router-link>
        </span>
      </div>
      <!--  -->
      <div style="height:7.5rem;">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in GoodsName.pics" :key="index">
            <img :src="item.pic" style="height:8rem" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>-->
        </swiper>
      </div>
      <!--  -->
      <p style="margin-top:0.6rem;padding:0.2rem 0.2rem;font-size:0.32rem;">{{ titleGoods }}</p>
      <p style="font-size:0.28rem;padding:0 0.2rem;color:#B2B2B2;">{{ characteristic }}</p>
      <p style="padding:0 0.2rem;">
        <span style="display:inline-block;font-size:0.28rem;color:red;">底价</span>
        <span style="color:red;">￥{{ this.GoodsName.basicInfo.minPrice }}</span>
        <span
          style="display:inline-block;font-size:0.28rem;color:#B2B2B2;"
        >原价{{ this.GoodsName.basicInfo.originalPrice}}</span>
        <span
          style="float:right;font-size:0.28rem;color:#B2B2B2;padding-top:0.1rem;"
        >库存{{ this.GoodsName.basicInfo.stores}}</span>
      </p>
      <!--  -->
      <p style="width:100%;height:0.4rem;background:#ccc;margin:0;"></p>
      <!--  -->
      <div class="Goods_nav">
        <div :class="{red:Goodshow}" @click="Goodshow=true">商品介绍</div>
        <div :class="{red:!Goodshow}" @click="Goodshow=false">商品评价</div>
      </div>
      <!--  -->
      <div v-show="Goodshow" v-html="this.GoodsName.content" class="content_goods"></div>
      <!--  -->
      <div v-show="!Goodshow"></div>
    </div>
    <!--  -->
    <div class="footerGoods">
        立即发起砍价，最低可砍到1元
    </div>
    <!--  -->
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "xqgoods",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      GoodsName: {},
      titleGoods: "",
      characteristic: "",
      Goodshow: true
    };
  },
  created() {
    let { id } = this.$route.query;
    _product.detail(id).then(res => {
      console.log(res.data.data);
      this.GoodsName = res.data.data;
      this.titleGoods = this.GoodsName.basicInfo.name;
      this.characteristic = this.GoodsName.basicInfo.characteristic;
    });
  }
};
</script>

<style lang="scss" scoped>
.qmkj_kk {
  //   background: #fff;
  z-index: 999;
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 1rem;
  text-align: center;
}
.xq_goods {
  display: inline-block;
  background: #fff;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: 0.1rem;
  text-align: center;
  line-height: 0.7rem;
}
.Goods_nav {
  width: 100%;
  box-sizing: border-box;
  height: 1rem;
  display: flex;
  div {
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    line-height: 1rem;
  }
}
.red {
  border-bottom: 3px solid red;
}
.content_goods {
  font-size: 14px;
}
.footerGoods{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #B7282E;
    height: 1rem;
    font-size: 14px;
    color: #fff;
    box-sizing: border-box;
    line-height: 1rem;
    text-align: center;
    display: block;
}

</style>