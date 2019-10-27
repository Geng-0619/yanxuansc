<template>
  <div class="home_box">
    <div
      style="width:100%;height:0.7rem;border-bottom:1px solid #ccc;position: fixed;top:0;background:#ffffff;"
    >
      <span>编辑</span>
      <span>购物车</span>
      <span></span>
    </div>
    <div class="GoodsCartItem">
      <div v-for="(item,index) in CartItemV" :key="index" style="display: flex;">
        <input type="checkbox" v-model="item.Goodscheck" />
        <div>
          <img :src="item.images" alt />
        </div>
        <div style="padding:0 0.2rem;box-sizing:border-box;">
          <p>{{ item.titleGoods }}</p>
          <p>{{ item.nameGoods }}</p>
          <p>
            <span>{{ item.priceGoods }}</span>
            <el-input-number size="mini" v-model="item.numGoods" :min="1" label="描述文字"></el-input-number>
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
        <span>合计：￥{{ this.Allprice() }}</span>
        <button class="GoodsXd">下单</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vartC",
  data() {
    return {
    //   CartItemV: [],
       AllcheckGoods: false
    };
  },
  created() {
    // this.CartItemV = JSON.parse(localStorage.getItem("Cart"));
    // console.log(this.CartItemV);
  },
  computed:{
      CartItemV(){
          return this.$store.state.CartItem
      }
  },
  methods: {
    Allcheck() {
      this.AllcheckGoods = !this.AllcheckGoods;
        this.$store.commit('Allcheck',this.AllcheckGoods)
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