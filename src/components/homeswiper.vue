<template>
  <div>
    <div style="height:7.5rem;">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in arr" :key="index">
          <a href="https://www.baidu.com/">
            <img :src="item.picUrl" style="height:8rem" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="content-one">
      <ul class="content-one-ul">
        <router-link to="/sigin" tag="li">
          <img src="../assets/1.jpg" alt />
          <div>签到</div>
        </router-link>
        <li>
          <img src="../assets/2.jpg" alt />
          <div>礼券</div>
        </li>
        <li>
          <img src="../assets/3.jpg" alt />
          <div>砍价</div>
        </li>
        <li>
          <img src="../assets/4.jpg" alt />
          <div>专栏</div>
        </li>
      </ul>
    </div>
    <p style="width:100%;height:0.4rem;background:#ccc;margin:0;"></p>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["arr"],
  name: "swiprev",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
         loop: true,
        //   notNextTick: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.content-one {
  height: 2rem;
  border-radius: 20% 20% 0 0;
  border: 1px solid #ddd;
  background: white;
  // position: absolute;
  position: relative;
  bottom: 2rem;
  z-index: 999;
  bottom: 0rem;
  font-size: 14px;
  // bottom: 2.15rem;
  .content-one-ul {
    display: flex;
    width: 100%s;
    height: 100%;
    border-radius: 20% 20% 0 0;
    // border-bottom: 0.1rem solid #efefef;
    align-items: center;
    justify-content: space-evenly;
    li {
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
}
</style>