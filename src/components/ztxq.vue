<template>
  <div class="ztxq_box">
    <div class="ztxq_div_1">
      <span>
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>专题详情</span>
      <span></span>
    </div>
    <div class="ztxq_div_2">
      <br />
      <br />
      <br />
      <p style="text-align:center">{{ Ztxq.title }}</p>
      <p style="width:1.5rem;height:0.04rem;background:#BB9161;margin:0.2rem auto;"></p>
      <img :src="Ztxq.pic" alt width="100%;" />
      <div class="content_goods" v-html="Ztxq.content"></div>
      <cnxh></cnxh>
    </div>
  </div>
</template>

<script>
import cnxh from "./cainixihuan";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "ztxq",
  components: {
    cnxh
  },
  data() {
    return {
      Ztxq: {}
    };
  },
  created() {
    // console.log(this.$route.query)
    let id = this.$route.query.id;
    // console.log(id)
    _product.Ztxq(id).then(res => {
      this.Ztxq = res.data.data;
      console.log(this.Ztxq);
    });
  }
};
</script>

<style lang="scss" scoped>
.ztxq_box {
  display: flex;
  flex-direction: column;
}
.ztxq_div_1 {
  width: 100%;
  height: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}
.ztxq_div_2 {
  margin-top: 1rem;
  flex: 1;
  overflow: auto;
}
</style>