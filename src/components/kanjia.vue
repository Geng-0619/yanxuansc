<template>
  <div>
    <p class="home_comt_kanjia">
      <router-link to="qmkj">全民砍价</router-link>
      <span class="crit"><i class="el-icon-arrow-right"></i></span>
    </p>
      <li class="kanjia_cont" v-for="(item,index) in kanjia" :key="index">
        <router-link :to="{ path: '/goodsxq',query: { id:item.id } }"><img :src="item.pic" alt /></router-link>
        <div class="kanjia_cont_tit" style="box-sizing:border-box;">
          <p style="color:#333333;">{{item.name}}</p>
          <p style="color:#B2B2B2;font-size: 0.26rem;margin-top:0.4rem;">{{item.characteristic}}</p>
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
      </li>
  </div>
</template>

<script>
export default {
  name: "kanjia",
  props: ["kanjia"],
  created () {
    // console.log(this.kanjia)
  }
};
</script>

<style lang="scss" scoped>
</style>