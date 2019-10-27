<template>
  <div>
    <div
      class="qmkj_kk"
      style="position: fixed;top: 0;width:100%;height:1rem;box-sizing:border-box;"
    >
      <span>
        <router-link to="/home/fenlei">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>全民砍价</span>
      <span></span>
    </div>
    <div v-show="spxqSh" style="margin:70% 0;text-align:center">
      <h1>还没有商品呢</h1>
    </div>
    <div v-for="(item,i) in SpXq" :key="i">
      <img :src="item.pic" alt="">
      {{item.name}}
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
      SpXq:[]
    };
  },
  created() {
    let  id  = this.$route.query.id;
    console.log(id);
    _product.propTj().then(res => {
      // console.log(res.data.data);
      this.SpXq = res.data.data.filter(item => {
        return item.categoryId == id
      })
      // console.log(this.SpXq)
    });
  }
};
</script>

<style lang="scss" scoped>
.qmkj_kk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
</style>