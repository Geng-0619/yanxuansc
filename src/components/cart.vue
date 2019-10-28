<template>
  <div class="home_box">
    <div
      style="width:100%;height:0.7rem;border-bottom:1px solid #ccc;position: fixed;top:0;background:#ffffff;"
    >
      <span @click="ShowDel" v-show="!ShowDelGoods">编辑</span>
      <span @click="ShowDel" v-show="ShowDelGoods">完成</span>
      <span>购物车</span>
      <span></span>
    </div>
    <div class="GoodsCartItem">
      <div v-for="(item,index) in CartItemV" :key="index" style="display: flex;">
        <input type="checkbox" v-model="item.Goodscheck" @click="goodsCheck(index)" />
        <div>
          <img :src="item.images" alt />
        </div>
        <div style="padding:0 0.2rem;box-sizing:border-box;width:100%;">
          <p>{{ item.titleGoods }}</p>
          <p>{{ item.nameGoods }}</p>
          <p style="display:flex;justify-content: space-between;align-items: center;">
            <span>{{ item.priceGoods }}</span>
            <span>
              <button style="width:0.42rem;height:0.42rem;" @click="jian(index)">-</button>
              <span>
                <input type="text" style="width:0.6rem;" v-model="item.numGoods" />
              </span>
              <button style="width:0.42rem;height:0.42rem;" @click="jia(index)">+</button>
            </span>

            <!-- <el-input-number size="mini" v-model="item.numGoods" :min="1" label="描述文字"></el-input-number> -->
          </p>
        </div>
      </div>
    </div>
    <div
      style="height:0.7rem;width:100%;font-size:0.2rem;position: fixed;bottom:1rem;display:flex;justify-content: space-between;"
    >
      <span style="line-height: 0.7rem;">
        <input type="checkbox" v-model="AllcheckGoods" @click="Allcheck" />全选
      </span>
      <div>
        <span>合计：￥{{ Allprice1 }}</span>
        <router-link to="/SubGoods"><button class="GoodsXd" v-show="!ShowDelGoods">下单</button></router-link>
        <button class="GoodsXd" v-show="ShowDelGoods" @click="removeGoods">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vartC",
  data() {
    return {
      // CartItemV: [],
      AllcheckGoods: false,
      ShowDelGoods: false
    };
  },
  created() {
    // this.CartItemV = JSON.parse(localStorage.getItem("Cart"));
    // console.log(this.CartItemV);
    // if(this.CartItemV.length ==0){
    //   this.$store.state.CartItemV=JSON.parse(localStorage.getItem("Cart"))
    // }
  },
  computed: {
    CartItemV() {
      return this.$store.state.CartItem;
    },
    Allprice1() {
      return this.$store.state.Allprice;
    }
  },
  methods: {
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
      localStorage.setItem('Cart',JSON.stringify(this.CartItemV))
    },
    goodsCheck(n) {
      // this.CartItemV.map(item => {
      //   item.Goodscheck = !item.Goodscheck;
      // });
      this.CartItemV[n].Goodscheck = !this.CartItemV[n].Goodscheck;
      // let b = 0;
      // this.CartItemV.map(item => {
      //   if (item.Goodscheck == true) {
      //     b += item.numGoods * item.priceGoods;
      //   }
      // });
      // this.$store.state.Allprice = b;
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
</style>