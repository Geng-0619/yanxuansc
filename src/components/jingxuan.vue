<template>
  <div>
    <div
      class="qmkj_kk"
      style="position: fixed;top: 0;width:100%;height:1rem;box-sizing:border-box;"
    >
      <span>
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>全民砍价</span>
      <span></span>
    </div>
    <div class="home_zt">
      <p
        v-for="(item,index) in jingxuan"
        :key="index"
        style="width:100%;display:inline-block;padding:0 0.1rem;box-sizing:border-box;text-align:center;"
      >
        <img :src="item.pic" alt style="width:100%;margin-top:30px;height:4rem;display:block;" />
        <span
          style="margin-top:-170px;font-size:18px;color:#fff;display:block;padding:0 0.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        >{{item.title}}</span>
        <span
          style="margin-top:20px;font-size:16px;color:#fff;display:block;padding:0 0.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        >{{item.descript}}</span>
        <span class="jing_zj">查看详情</span>
        <br>
        <br>
      </p>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "jingxuan",
  data() {
    return {
      jingxuan: []
    };
  },
  created() {
    _product.propZt().then(res => {
      this.jingxuan = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.qmkj_kk{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
     border-radius: 0%;
}
.jing_zj{
  margin-top:15px;
  color:#fff;
  display:block;
  border: 1px solid #fff;
}
</style>