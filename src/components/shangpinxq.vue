<template>
  <div style="display: flex;flex-direction: column;">
    <div class="qmkj_header">
      <span style="font-size:0.35rem;float:left;">
        <router-link to="/home/fenlei">
          <i class="el-icon-arrow-left" style="color:#000;"></i>
        </router-link>
      </span>
      <span>分类商品</span>
    </div>

    <div class="qmkj_cont">
      <div v-show="!spxqSh" style="margin:70% 0;text-align:center">
        <h1>还没有商品呢</h1>
      </div>

      <div class="cont_spxq" v-show="spxqSh">
        <div v-for="(item,i) in SpXq" :key="i" style="display:flex;flex-direction: column;width:48%;padding-left:0.1rem;">
          <router-link :to="{path: '/tjxq',query:{id:item.id}}"><img :src="item.pic" alt style="width:100%;height:3.6rem;"/></router-link>
          {{ item.name }}
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
    // console.log(id);
    _product.propTj().then(res => {
      // console.log(res.data.data);
      // if(res.data.data.length != 0){
      //   this.spxqSh = true
      // }
      this.SpXq = res.data.data.filter(item => {
        return item.categoryId == id;
      });
       if(this.SpXq.length != 0){
        this.spxqSh = true
      }
      // console.log(this.SpXq)
    });
  }
};
</script>

<style lang="scss" scoped>
.qmkj_header {
  width: 100%;
  height: 1rem;
  background: #fff;
  box-sizing: border-box;
  line-height: 1rem;
  text-align: center;
  font-size: 0.26rem;
  padding: 0 0.2rem;
  position: fixed;
  top: 0;
}
.qmkj_cont {
  flex: 1;
  overflow: auto;
  padding: 1.1rem 0;
}
.cont_spxq{
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 0.28rem;
}
</style>