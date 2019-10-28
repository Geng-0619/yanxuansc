<template>
  <div style="display: flex;flex-direction: column;">
    <div class="qmkj_header">
      <span>
        <router-link to="/home/fenlei">
          <i class="el-icon-arrow-left" style="float:left;margin-top:0.2rem;"></i>
        </router-link>
      </span>
      <span>分类商品</span>
      <span></span>
    </div>

    <div class="qmkj_cont">
      <div v-show="spxqSh" style="margin:70% 0;text-align:center">
        <h1>还没有商品呢</h1>
      </div>

      <div  class="cont_spxq">
        <div v-for="(item,i) in SpXq" :key="i" style="display:flex;margin-top:0.8rem;flex-direction: column;width:48%;padding-left:0.1rem;">
          <img :src="item.pic" alt style="width:100%;" />
          {{item.name}}
          <br>
          <span>
            <b style="color:red;">￥{{item.minPrice}}</b>
          <span style="float:right;font-size:0.2rem;color:#B4B4B4;">已售{{ item.numberOrders }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "shangpinxq",
  data() {
    return {
      spxqSh: false,
      SpXq: []
    };
  },
  created() {
    let id = this.$route.query.id;
    console.log(id);
    _product.propTj().then(res => {
      // console.log(res.data.data);
      this.SpXq = res.data.data.filter(item => {
        return item.categoryId == id;
      });
      console.log(this.SpXq)
    });
  }
};
</script>

<style lang="scss" scoped>
.qmkj_header {
  width: 100%;
  height: 1rem;
  background: #ccc;
  box-sizing: border-box;
  line-height: 1rem;
  text-align: center;
}
.qmkj_cont {
  flex: 1;
  overflow: auto;
}
.cont_spxq{
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 0.28rem;
}
</style>