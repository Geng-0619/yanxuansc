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
        <span style="display:inline-block;font-size:0.28rem;color:#B2B2B2;">原价{{yuanjia}}</span>
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
      <div v-show="!Goodshow" style="margin-bottom:1rem;">
        <li
          v-for="(item,i) in Pingj"
          :key="i"
          style="padding:0.2rem 0.5rem 0.2rem 0.2rem;box-sizing:border-box;font-size:0.26rem;width:100%;height:3rem;border-bottom:1px solid #ccc;display:flex;"
        >
          <div style="margin-top:0.5rem;">
            <img
              style="width:1.5rem;"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              alt
            />
          </div>
          <div style="display:flex;flex-direction: column;justify-content: space-between;">
            <p>
              匿名用户
              <span
                style="display:inline-block;padding:0.05rem 0.02rem;color:#fff;border-radius: 2px;background:red;"
              >{{ item.goods.goodReputationStr }}</span>
            </p>
            <p>{{ item.goods.goodReputationRemark }}</p>
            <p
              style="color:#DBDBDB;"
            >{{ item.goods.dateReputation }} 选择规格:{{ item.goods.goodsName }}</p>
          </div>
        </li>
      </div>
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
          <span style="float:left;">{{ this.ztxq.basicInfo.name }}</span>
          <br />
          <span ref="yuanj" style="float:left;">{{ this.ztxq.basicInfo.minPrice }}</span>
        </div>
        <div style="width:20%;">
          <span @click="QxcartTjxq">X</span>
        </div>
      </div>
      <div class="cartTjxq_c">
        <p>{{ this.ztxq.properties[0].name }}</p>
        <li
          v-for="(item,index) in ztxq.properties[0].childsCurGoods"
          :key="index"
          @click="priceZx(item,index)"
          :class="{Goodsred:KeyIndex==index}"
        >{{ item.name }}</li>

        <div v-if="ztxq.properties.length >1">
          <p>{{ this.ztxq.properties[1].name }}</p>
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
import { Dialog } from 'vant';
export default {
  name: "fenlei",
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
      SizeId1: "",
      ColId1: "",
      nameGs: "",
      KeyIndex: -1,
      KeyIndex1: -1,
      ColorGoods: "",
      Pingj: [],
      yuanjia: 0
    };
  },
  created() {
    // console.log(this.$route.query)
    let { id } = this.$route.query;
    this.GoodsId = id;
    // console.log(this.GoodsId)
    _product.detail(id).then(res => {
      this.ztxq = res.data.data;
      this.yuanjia = this.ztxq.basicInfo.originalPrice;
    });

    _product.Pingjia(id).then(res => {
      // console.log(res)
      if (res.data.code == 0) {
        this.Pingj = res.data.data;
        //  console.log(this.Pingj)
      }
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
      let arr = {
        GoodsId: this.GoodsId,
        ColId: this.ColId,
        SizeId: this.SizeId
      };
      if (this.ztxq.properties.length == 1) {
        _product.pinjiejiage(arr).then(res => {
          // console.log(res)
          // console.log(res.data.data.price)
          // this.yuanjia = res.data.data.price
          // console.log(this.$refs.yuanj.innerHTML)
          if (res.data.code == 0) {
            this.$refs.yuanj.innerHTML = res.data.data.price;
          }
        });
      }
    },
    colorZx(v, i) {
      this.KeyIndex1 = i;
      this.ColorGoods = v.name;
      this.ColId1 = this.ztxq.properties[1].id;
      this.SizeId1 = v.id;
      // console.log(v)
      let arr1 = {
        GoodsId: this.GoodsId,
        ColId: this.ColId,
        SizeId: this.SizeId,
        ColId1: v.propertyId,
        SizeId1: v.id
      };
      _product.pinjiejiage1(arr1).then(res => {
        // console.log(res);
        // this.$refs.yuanj.innerHTML = res.data.data.price
      });
    },
    AddCartI() {
      let arr = JSON.parse(localStorage.getItem("Cart"));
      if (arr == null) {
        let box = [];
        localStorage.setItem("Cart", JSON.stringify(box));
      } else {
        this.$store.state.CartItem = JSON.parse(localStorage.getItem("Cart"));
      }

      if (this.ztxq.properties.length == 1) {
        let arr = {
          GoodsId: this.GoodsId,
          ColId: this.ColId,
          SizeId: this.SizeId
        };
        _product.pinjiejiage(arr).then(res => {
          // console.log(res)
          if (res.data.code == 0) {
            this.$refs.yuanj.innerHTML = res.data.data.price;
          }
          if (res.data.code == 405) {
            Dialog.alert({
              title: "提示",
              message: "请选择商品规格"
            }).then(() => {
              // on close
            });
            // alert("请选择尺寸");
            return false;
          }
          let pric = res.data.data;
          let obj = {
            images: this.ztxq.basicInfo.pic,
            nameGoods: this.ztxq.properties[0].name + this.nameGs,
            titleGoods: this.ztxq.basicInfo.name,
            priceGoods: pric.price,
            numGoods: this.num,
            Goodscheck: false,
            goodsId: pric.goodsId,
            propertyChildIds: pric.propertyChildIds
          };
          this.$store.commit("AddCartI", obj);
          this.Tjcart = false;
        });
      } else {
        let arr1 = {
          GoodsId: this.GoodsId,
          ColId: this.ColId,
          SizeId: this.SizeId,
          ColId1: this.ColId1,
          SizeId1: this.SizeId1
        };
        _product.pinjiejiage1(arr1).then(res => {
          // console.log(res);
          if (res.data.code != 0) {
            Dialog.alert({
              title: "提示",
              message: "请选择商品规格"
            }).then(() => {
              // on close
            });
            return false;
          }
          let pric = res.data.data;
          let obj = {
            images: this.ztxq.basicInfo.pic,
            nameGoods: this.ztxq.properties[0].name + this.nameGs,
            titleGoods: this.ztxq.basicInfo.name,
            priceGoods: pric.price,
            numGoods: this.num,
            Goodscheck: false,
            goodsId: pric.goodsId,
            propertyChildIds: pric.propertyChildIds
          };
          this.$store.commit("AddCartI", obj);
          this.Tjcart = false;
        });
      }

      //     axios
      //       .post(
      //         `https://api.it120.cc/small4/shop/goods/price?goodsId=${this.GoodsId}&propertyChildIds=${this.ColId},${this.SizeId}`
      //       )
      //       .then(res => {
      //         // console.log(res);
      //         if (res.data.code == 405) {
      //           alert("请选择尺寸");
      //           return false;
      //         }
      //         let pric = res.data.data;
      //         // console.log(res.data.data);
      //         // this.$store.state.PriceGoods = res.data.data.price
      //         let arr = JSON.parse(localStorage.getItem("Cart"));
      //         if (arr == null) {
      //           let box = [];
      //           localStorage.setItem("Cart", JSON.stringify(box));
      //         } else {
      //           this.$store.state.CartItem = JSON.parse(
      //             localStorage.getItem("Cart")
      //           );
      //         }
      //         if (this.ztxq.properties.length > 1) {
      //           let obj = {
      //             images: this.ztxq.basicInfo.pic,
      //             nameGoods:
      //               this.ztxq.properties[0].name + this.nameGs + this.ColorGoods,
      //             titleGoods: this.ztxq.basicInfo.name,
      //             priceGoods: pric.price,
      //             numGoods: this.num,
      //             Goodscheck: false,
      //             goodsId: pric.goodsId,
      //             propertyChildIds: pric.propertyChildIds
      //           };
      //           if (this.ColorGoods == "") {
      //             alert("请选择颜色");
      //             return false;
      //           } else {
      //             this.$store.commit("AddCartI", obj);
      //             this.Tjcart = false;
      //           }
      //         } else {
      //           let obj = {
      //             images: this.ztxq.basicInfo.pic,
      //             nameGoods: this.ztxq.properties[0].name + this.nameGs,
      //             titleGoods: this.ztxq.basicInfo.name,
      //             priceGoods: pric.price,
      //             numGoods: this.num,
      //             Goodscheck: false,
      //             goodsId: pric.goodsId,
      //             propertyChildIds: pric.propertyChildIds
      //           };
      //           this.$store.commit("AddCartI", obj);
      //           this.Tjcart = false;
      //         }
      //       });
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