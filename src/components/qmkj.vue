<template>
  <div>
    <div
      class="qmkj_kk"
      style="position: fixed;top: 0;width:100%;height:1rem;box-sizing:border-box;"
    >
      <span style="float:left;font-size:0.35rem;">
          <i class="el-icon-arrow-left" @click="syj"></i>
      </span>
      <span>全民砍价</span>
    </div>
    <br />
    <br />
      <router-link class="kanjia_cont" v-for="(item,index) in Qmkj_kj" :key="index" :to="{ path: '/goodsxq',query: { id:item.id } }">
        <img :src="item.pic" alt />
        <div class="kanjia_cont_tit">
          <p style="color:#333333;">{{item.name}}</p>
          <p
            style="color:#B2B2B2; font-size: 12px;margin-top:0.4rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
          >{{item.characteristic}}</p>
          <p class="kanjia_cont_price">
            <span class="kanjia_cont_price_sj">
              <span style="color:#D00000;">￥{{item.minPrice}}.00</span>
              <span style="color:#333333;">底价</span>
            </span>
            <span class="kanjia_cont_price_sj">
              <span style="color:#BDBDBD;">￥{{item.originalPrice}}.00</span>
              <span style="color:#BDBDBD;">原价</span>
            </span>
            <span class="kanjia_cont_price_sj">
              <span style="color:#BDBDBD;">{{item.stores}}件</span>
              <span style="color:#BDBDBD;">限量</span>
            </span>
          </p>
        </div>
      </router-link>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "qmkj",
  data() {
    return {
      Qmkj_kj: []
    };
  },
  created() {
    _product.propTj().then(res => {
      // console.log(res)
      this.Qmkj_kj = res.data.data.filter(item => {
        return item.kanjia == true;
      });
      // console.log(this.Qmkj_kj)
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
.qmkj_kk {
  background: #fff;
  border-radius: 0%;
  line-height: 1rem;
  padding:  0 0.2rem;
  border: none;
  font-size: 0.26rem;
}
</style>