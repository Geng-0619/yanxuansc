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
      <div style="width:1.08rem;height:100%;font-size:24px; border: 0.01rem solid gray;">
        <i class="el-icon-service"></i>
      </div>
      <router-link to="/cart">
        <div style="width:1.08rem;height:100%;font-size:24px; border: 0.01rem solid gray;">
          <i class="el-icon-shopping-cart-full">{{ NumStore }}</i>
        </div>
      </router-link>
      <div style="width:1.08rem;height:100%;font-size:24px; border: 0.01rem solid gray;">
        <i class="el-icon-star-off"></i>
      </div>
      <div style="width:2.12rem;height:100%; border: 0.01rem solid gray;">立即购买</div>
      <div
        @click="AddItem()"
        style="width:2.12rem;height:100%; border: 0.01rem solid gray;background:#B7282E;color:#fff;"
      >加入购物车</div>
    </div>

    <div class="cartTjxq" v-show="Tjcart">
      <div class="cartTjxq_h">
        <div style="width:20%;">
          <img :src="ztxq.basicInfo.pic" class="cartTjxq_hIng" alt />
        </div>
        <div style="width:60%;">
          <span style="float:left;">{{ ztxq.basicInfo.name }}</span>
          <br />
          <span style="float:left;">{{ ztxq.basicInfo.minPrice }}</span>
        </div>
        <div style="width:20%;">
          <span @click="QxcartTjxq">X</span>
        </div>
      </div>
      <div class="cartTjxq_c">
        <p>{{ ztxq.properties[0].name }}</p>
        <li
          v-for="(item,index) in ztxq.properties[0].childsCurGoods"
          :key="index"
          @click="priceZx(item,index)"
          :class="{Goodsred:KeyIndex==index}"
        >{{ item.name }}</li>

        <div v-if="ztxq.properties.length >1">
          <p>{{ ztxq.properties[1].name }}</p>
          <li
            v-for="(v,i) in ztxq.properties[1].childsCurGoods"
            :key="i"
            @click="colorZx(v,i)"
            :class="{Goodsred:KeyIndex1==i}"
          >{{ v.name }}</li>
        </div>

        <p style="border-bottom: 1px solid #ccc;height:0.1rem;margin-top:0.4rem;"></p>
        <div style="display: flex;justify-content: space-between; align-items: center;">
          <p>购买数量</p>
          <el-input-number v-model="num" :min="1" label="描述文字"></el-input-number>
        </div>
      </div>
      <div class="cartTjxq_f" @click="AddCartI()">加入购物车</div>
    </div>
  </div>
</template>

<script>
import "../css/tjxq.scss";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Product from "../services/product-service.js";
const _product = new Product();
import axios from "axios";
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
      },
      Tjcart: false,
      num: 1,
      GoodsId: "",
      SizeId: "",
      ColId: "",
      nameGs: "",
      KeyIndex: -1,
      KeyIndex1: -1,
      ColorGoods: ""
    };
  },
  created() {
    // console.log(this.$route.query)
    let { id } = this.$route.query;
    this.GoodsId = id;
    // console.log(this.GoodsId)
    _product.detail(id).then(res => {
      // console.log(res.data.data);
      this.ztxq = res.data.data;
      // console.log(this.ztxq.properties.length)
      // console.log(res.data.data);
      // axios.post(`https://api.it120.cc/small4/shop/goods/price?goodsId=`).then(res => {
      //   console.log(res)
      // })
    });
  },
  computed: {
    NumStore() {
      return this.$store.state.NumStore;
    }
  },
  methods: {
    AddItem() {
      this.Tjcart = true;
    },
    QxcartTjxq() {
      this.Tjcart = false;
    },
    priceZx(n, i) {
      this.SizeId = n.id;
      this.ColId = this.ztxq.properties[0].id;
      this.nameGs = n.name;
      this.KeyIndex = i;
      // console.log(this.ztxq.basicInfo.id)
      // console.log(n)
      // console.log(this.ztxq.properties[0].id)
      // axios.post(`https://api.it120.cc/small4/shop/goods/price?goodsId=${this.ztxq.basicInfo.id}&propertyChildIds=${n},${this.ztxq.properties[0].id}`).then(res => {
      //   console.log(res)
      // })
    },
    colorZx(v, i) {
      this.KeyIndex1 = i;
      this.ColorGoods = v.name;
    },
    AddCartI() {
      axios
        .post(
          `https://api.it120.cc/small4/shop/goods/price?goodsId=${this.GoodsId}&propertyChildIds=${this.SizeId},${this.ColId}`
        )
        .then(res => {
          // console.log(res.data.data)
          // this.$store.state.PriceGoods = res.data.data.price
          let arr = JSON.parse(localStorage.getItem("Cart"));
          if (arr == null) {
            let box = [];
            localStorage.setItem("Cart", JSON.stringify(box));
          } else {
            this.$store.state.CartItem = JSON.parse(
              localStorage.getItem("Cart")
            );
          }
          if (this.ztxq.properties.length > 1) {
            let obj = {
              images: this.ztxq.basicInfo.pic,
              nameGoods: this.ztxq.properties[0].name + this.nameGs + this.ColorGoods,
              titleGoods: this.ztxq.basicInfo.name,
              priceGoods: res.data.data.price,
              numGoods: this.num,
              Goodscheck: false,
              goodsId:res.data.data.goodsId,
              propertyChildIds:res.data.data.propertyChildIds
            };
            this.$store.commit("AddCartI", obj);
            this.Tjcart = false;
          } else {
            let obj = {
              images: this.ztxq.basicInfo.pic,
              nameGoods: this.ztxq.properties[0].name + this.nameGs,
              titleGoods: this.ztxq.basicInfo.name,
              priceGoods: res.data.data.price,
              numGoods: this.num,
              Goodscheck: false,
              goodsId:res.data.data.goodsId,
              propertyChildIds:res.data.data.propertyChildIds
            };
            this.$store.commit("AddCartI", obj);
            this.Tjcart = false;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.Goodsred {
  border: 1px solid red;
  color: red;
}
</style>