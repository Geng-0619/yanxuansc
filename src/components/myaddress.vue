<template>
  <div class="my">
    <div class="my-header">
      <span @click="shsyj">
        <van-icon name="arrow-left" />
      </span>
      <span>我的地址</span>
    </div>
    <div style="padding:1.5rem 0 0 0;">
      <div v-for="(item,i) in dizhilb" :key="i" >
          <div class="SubGoods_shdz" style="display:flex;justify-content: space-between;align-items: center;font-size:0.2rem;height:1rem;border-bottom:1px solid #ccc;padding:0.2rem 0.3rem;">
            <div style="display:flex;flex-direction: column;">
              <span>{{item.linkMan}}{{item.mobile}}</span>
              <br>
              <span>{{item.address}}</span>
            </div>
            <i class="el-icon-edit-outline" @click="xjdz" style="font-size:0.4rem;"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/myaddress.css";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "myaddress",
  data() {
    return {
      dizhilb: []
    };
  },
  methods: {
    shsyj() {
      this.$router.go(-1);
    },
    xjdz(){
        this.$router.push({
            path:'/shouhuo'
        })
    }
  },
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    // console.log(token);
    _product.Dizlb(token).then(res => {
      this.dizhilb = res.data.data;
    //   console.log(this.dizhilb);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>