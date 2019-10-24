<template>
  <div>
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
          <swiper-slide v-for="(item,index) in ztxq.pics" :key="index">
            <img :src="item.pic" style="height:8rem" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>-->
        </swiper>
      </div>
      <!--  -->
      <p
        style="margin-top:0.6rem;padding:0.2rem 0.2rem;font-size:0.32rem;"
      >{{ this.ztxq.basicInfo.name }}</p>
      <p
        style="font-size:0.28rem;padding:0 0.2rem;color:#B2B2B2;"
      >{{ this.ztxq.basicInfo.characteristic }}</p>
      <p style="padding:0 0.2rem;">
        <span style="display:inline-block;font-size:0.28rem;color:red;">底价</span>
        <span style="color:red;">￥{{ this.ztxq.basicInfo.minPrice }}</span>
        <span
          style="display:inline-block;font-size:0.28rem;color:#B2B2B2;"
        >原价{{ this.ztxq.basicInfo.originalPrice}}</span>
        <span
          style="float:right;font-size:0.28rem;color:#B2B2B2;padding-top:0.1rem;"
        >库存{{ this.ztxq.basicInfo.stores}}</span>
      </p>
      <!--  -->
      <p style="width:100%;height:0.4rem;background:#ccc;margin:0;"></p>
      <!--  -->
      <div class="Goods_nav">
        <div :class="{red:Goodshow}" @click="Goodshow=true">商品介绍</div>
        <div :class="{red:!Goodshow}" @click="Goodshow=false">商品评价</div>
      </div>
      <div v-show="Goodshow" v-html="this.ztxq.content" class="content_goods"></div>
      <!--  -->
      <div v-show="!Goodshow"></div>
    </div>
    <!--  -->
     <div class="footerGoods">
        <div style="width:1.08rem;height:100%;font-size:24px;"><i class="el-icon-service"></i></div>
        <div style="width:1.08rem;height:100%;font-size:24px;"><i class="el-icon-shopping-cart-full"></i></div>
        <div style="width:1.08rem;height:100%;font-size:24px;"><i class="el-icon-star-off"></i></div>
        <div style="width:2.12rem;height:100%;">立即购买</div>
        <div style="width:2.12rem;height:100%;">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  data() {
    return {
      ztxq: {},
      Goodshow: true,
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
      }
    };
  },
  created() {
    // console.log(this.$route.query)
    let { id } = this.$route.query;
    _product.detail(id).then(res => {
      //   console.log(res.data.data);
      this.ztxq = res.data.data;
      //   console.log(this.ztxq);
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
.footerGoods {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ccc;
  height: 1rem;
  font-size: 14px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  line-height: 1rem;
  display: flex;
}
</style>