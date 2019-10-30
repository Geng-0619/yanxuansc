<template>
  <div>
    <p style="text-align:center;padding:0.5rem 0;">猜你喜欢</p>
    <div class="cnxh_zt">
      <div v-for="(item,index) in cnxh" :key="index" style="width:48%;">
        <img :src="item.pic" alt width="100%;" />
        <p style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.name}}</p>
        <p>
          <span style="color:red;">￥{{ item.minPrice }}</span>
          <span style="color:#C3C3C3;float:right;">已售{{ item.numberSells }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  data() {
    return {
      cnxh: []
    };
  },
  created() {
    _product.propTj().then(res => {
      let c = res.data.data.filter(item => {
        return item.pingtuan == true;
      });
      this.cnxh = c.slice(0, 4);
      // console.log(this.cnxh);
    });
  }
};
</script>

<style lang="scss" scoped>
.cnxh_zt {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.2rem 1.7rem 0;
  box-sizing: border-box;
  font-size: 14px;
}
</style>