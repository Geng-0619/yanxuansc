<template>
  <div>
    <li v-for="(item,i) in arr" :key="i" style="border:1px solid #ccc;display:flex;justify-content: space-between;">
      <div style="display:flex;flex-direction: column;">
        <div v-for="(v,index) in arr[i]" :key="index" style="display:flex;font-size:0.26rem;">
          <img :src="v.pic" alt style="width:1.5rem; " />
          <p>
            {{ v.goodsName }}
            <br />
            <br />
            <br />
            {{ v.property }}
          </p>
        </div>
      </div>
      <div  v-for="(v1,k) in ding" v-if="v1.id == i" :key="k" style="font-size:0.26rem;display:flex;flex-direction: column;justify-content: space-around;">
        <span>{{v1.orderNumber}}</span>
        <span>{{v1.statusStr}}</span>
      </div>
    </li>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "Dingxq",
  data() {
    return {
      list: [],
      arr: [],
      ding: []
    };
  },
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    _product.Dgxq(token).then(res => {
      // console.log(res.data.data.goodsMap)
      this.arr = res.data.data.goodsMap;
      //   console.log(this.arr)
      let a = Object.keys(res.data.data.goodsMap);
      this.ding = res.data.data.orderList.filter(v => {
        return a.map(item => {
          return v.orderId == item;
        });
      });
      //   console.log(this.ding);
      // console.log(b)
    });
  }
};
</script>

<style lang="scss" scoped>

</style>