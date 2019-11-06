<template>
  <div class="home_box">
    <div
      style="width:100%;text-align:center;height:0.7rem;border-bottom:1px solid #f5f5f5;position: fixed;top:0;background:#ffffff;"
    >
      <!-- 编辑 -->
      <span style="float:left;" @click="ShowDel" v-show="!ShowDelGoods&&CartItemV != ''">编辑</span>
      <span style="float:left;" @click="ShowDel" v-show="ShowDelGoods&&CartItemV != ''">完成</span>
      <span>购物车</span>
      <span></span>
    </div>
    <div
      style="position: absolute; top: 4.5rem; left: 2rem; background: #000; opacity: 0.5; width: 50%; height: 20%; text-align:center; font-size: 0.5rem;box-sizing:border-box;padding-top:.5rem;"
      v-show="issLoading"
    >
      <van-loading size="50px" color="#F9B600" vertical><span style="color:#F9B600;">商品加载中...</span></van-loading>
    </div>

    <!-- 判断购物车是否有商品 -->
    <div
      v-show="CartItemV == ''"
      style="color:#ccc;padding:1.5rem;display:flex;flex-direction: column;align-items: center;background:#f5f5f5;"
    >
      <i class="el-icon-shopping-cart-2" style="font-size:2rem;"></i>
      <span>去添加点什么吧</span>
    </div>
    <!-- 判断购物车是否有商品11111 -->
    <div class="GoodsCartItem" style="overflow: hidden;" v-show="CartItemV != ''">
      <!-- 遍历展示商品 -->

      <div
        ref="ccc"
        class="sssd"
        v-for="(item,index) in CartItemV"
        :key="index"
        @touchstart="zhleft1($event)"
        @touchmove="zhleft($event,index)"
        style="display: flex;transition: all 500ms;"
      >
        <!-- 商品前-复选框 -->
        <input type="checkbox" v-model="item.Goodscheck" @click="goodsCheck(index)" />
        <div style="padding-left:0.5rem;">
          <img :src="item.images" alt />
        </div>
        <div style="padding:0 0.3rem;box-sizing:border-box;width:9000%;">
          <!-- 标题 -->
          <p>{{ item.titleGoods }}</p>
          <!-- 内容 -->
          <p>{{ item.nameGoods }}</p>
          <p style="display:flex;justify-content: space-between;align-items: center;">
            <!-- 价格 -->
            <span>{{ item.priceGoods }}</span>
            <span>
              <!-- 按钮减 -->
              <input
                type="button"
                value="-"
                style="width:0.42rem;height:0.42rem;border:1px solid #ccc;background:#fff;"
                @click="jian(index)"
              />
              <!-- 单个商品数量 -->
              <input
                type="text"
                style="width:0.42rem;height:0.32rem;border:none;text-align:center;background:#fff;"
                v-model="item.numGoods"
              />
              <!-- 商品加 -->
              <input
                type="button"
                value="+"
                style="width:0.42rem;height:0.42rem;border:1px solid #ccc;background:#fff;"
                @click="jia(index)"
              />
            </span>
          </p>
        </div>
        <div class="remove_cart" @click="removedel(index)">删除</div>
      </div>
    </div>

    <div
      v-show="CartItemV != 0"
      style="height:0.7rem;background:#ffffff;width:100%;font-size:0.2rem;position: fixed;bottom:1rem;display:flex;justify-content: space-between;"
    >
      <span style="line-height: 0.7rem;">
        <input type="checkbox" v-model="AllcheckGoods" @click="Allcheck" />全选
      </span>
      <div>
        <span>合计：￥{{ Allprice1 }}</span>
        <!-- <router-link to="/SubGoods"> -->
        <button class="GoodsXd" v-show="!ShowDelGoods" @click="AddgoodsJsonStr">下单</button>
        <!-- </router-link> -->
        <button class="GoodsXd" v-show="ShowDelGoods" @click="removeGoods">删除</button>
      </div>
    </div>
    <cnxh></cnxh>
  </div>
</template>

<script>
import cnxh from "./cainixihuan";
import { Dialog } from "vant";
import { Loading } from "vant";
export default {
  name: "vartC",
  components: {
    cnxh
  },
  data() {
    return {
      AllcheckGoods: false,
      ShowDelGoods: false,
      AddgoodsJsonStr1: [],
      CartItemV1: [],
      startC: "",
      endC: "",
      ss: "",
      issLoading: false
    };
  },
  mounted() {
    this.$store.state.CartItem = JSON.parse(localStorage.getItem("Cart"));
    // console.log(this.CartItemV);
  },
  computed: {
    CartItemV() {
      return this.$store.state.CartItem;
    },
    Allprice1() {
      return this.$store.state.Allprice;
    }
  },
  // updated() {
  //     this.zhleft()
  // },
  methods: {
    removedel(n) {
      this.CartItemV.splice(n, 1);
      localStorage.setItem("Cart", JSON.stringify(this.CartItemV));
      this.$refs.ccc[n].style.left = "0rem";
    },
    zhleft1(e) {
      // console.log(e.changedTouches[0].clientX)
      this.startC = e.changedTouches[0].clientX;
    },
    zhleft(e, i) {
      this.ss = i;
      // console.log(e.changedTouches[0].clientX)
      this.endC = e.changedTouches[0].clientX;
      // console.log(this.startC)
      // console.log(this.endC)
      if (this.startC - this.endC > 0) {
        this.$refs.ccc.map(item => {
          item.style.left = "0rem";
        });
        this.$refs.ccc[i].style.left = "-3rem";
        // console.log(this.$refs.ccc[i].style)
      }
      if (this.startC - this.endC < 0) {
        this.$refs.ccc[i].style.left = "0rem";
      }
    },
    Allcheck() {
      this.AllcheckGoods = !this.AllcheckGoods;
      this.$store.commit("Allcheck", this.AllcheckGoods);
    },
    ShowDel() {
      this.ShowDelGoods = !this.ShowDelGoods;
    },
    removeGoods() {
      for (
        var i = 0, flag = true, len = this.CartItemV.length;
        i < len;
        flag ? i++ : i
      ) {
        if (this.CartItemV[i] && this.CartItemV[i].Goodscheck == true) {
          this.CartItemV.splice(i, 1);
          flag = false;
        } else {
          flag = true;
        }
      }
      this.AllcheckGoods = false;
      this.$store.commit("removeGoods");
      localStorage.setItem("Cart", JSON.stringify(this.CartItemV));
    },
    goodsCheck(n) {
      this.CartItemV[n].Goodscheck = !this.CartItemV[n].Goodscheck;

      this.$store.commit("goodsCheck", n);
      if (this.CartItemV[n].Goodscheck == false) {
        this.AllcheckGoods = false;
      }

      var fl = false;
      for (var i = 0, len = this.CartItemV.length; i < len; i++) {
        if (this.CartItemV[i] && this.CartItemV[i].Goodscheck == true) {
          fl = true;
        } else {
          fl = false;
          return this.CartItemV;
        }
      }
      if (fl == true) {
        this.AllcheckGoods = true;
      } else {
        this.AllcheckGoods = false;
      }
    },
    jian(n) {
      this.$store.commit("jian", n);
    },
    jia(n) {
      this.$store.commit("jia", n);
    },
    AddgoodsJsonStr() {
      this.issLoading = true;
      // console.log(this.CartItemV)
      let token = JSON.parse(localStorage.getItem("token"));
      if (token == null) {
        this.$router.push({
          path: "/login",
          query: { redi: 1 }
        });
      } else {
        let j = this.CartItemV.every(item => {
          return item.Goodscheck == false;
        });
        // console.log(j);
        if (j == false) {
          this.issLoading = true;
          let time = setTimeout(() => {
            let GoodscheckI = this.CartItemV.filter(item => {
              return item.Goodscheck == true;
            });
            GoodscheckI.map(item => {
              // console.log(item)
              this.AddgoodsJsonStr1.push({
                goodsId: item.goodsId,
                number: item.numGoods,
                propertyChildIds: item.propertyChildIds
              });
            });
            this.$router.push("/SubGoods");
            localStorage.setItem(
              "AddgoodsJsonS",
              JSON.stringify(this.AddgoodsJsonStr1)
            );
            this.issLoading = false;
          }, 2000);
        } else {
          this.issLoading = false;
          Dialog.alert({
            title: "错误",
            message: "请选择商品！"
          }).then(() => {
            // on close
            // alert(2);
          });
          return false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.GoodsCartItem {
  padding: 1rem 0;
  box-sizing: border-box;
  font-size: 0.2rem;
}
.sssd {
  position: relative;
  left: 0rem;
}
.GoodsCartItem img {
  width: 1rem !important;
}
.GoodsXd {
  width: 2.5rem;
  height: 100%;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 0.7rem;
  box-sizing: border-box;
  border: none;
}
.remove_cart {
  width: 3rem;
  height: 1rem;
  background: red;
  text-align: center;
  line-height: 1rem;
  box-sizing: border-box;
  color: #fff;
  position: absolute;
  right: -3rem;
}
</style>