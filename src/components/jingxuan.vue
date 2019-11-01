<template>
  <div>
    <div
      class="qmkj_kk"
      style="position: fixed;top: 0;width:100%;height:1rem;box-sizing:border-box;"
    >
      <span style="float:left;font-size:0.35rem;">
          <i class="el-icon-arrow-left" @click="syj"></i>
      </span>
      <span>严选专题</span>
    </div>
    <div style="height:0.5rem;"></div>
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
        <router-link :to="{ path: '/Ztxq', query:{id:item.id} }"><span class="jing_zj">查看详情</span></router-link>
        <br>
        <br>
      </p>
    </div>
   <div style="height:1.5rem;"></div>
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
  },
  methods: {
    syj(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.qmkj_kk{
    background: #fff;
    border-radius: 0%;
    text-align: center;
    line-height: 1rem;
    padding: 0 0.2rem;
    border: none;
    font-size: 0.26rem;
}
.jing_zj{
  margin-top:15px;
  color:#fff;
  display:block;
  border: 1px solid #fff;
}
</style>