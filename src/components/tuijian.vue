<template>
  <div style="width:100%;height:11rem;padding-bottom:1.2rem;">
    <p class="home_comt_tuijian">
      人气推荐
      <span class="crit"><i class="el-icon-arrow-right"></i></span>
    </p>
    <div class="prop_tuijian" v-for="(item,index) in propTj" :key="index">
      <router-link :to="{path: '/tjxq',query:{id:item.id}}">
        <img :src="item.pic" alt />
      </router-link>
      <span style="color:#D00000;font-size:0.28rem;">
        <b>￥{{item.minPrice}}</b>
      </span>
      <span
        style="color:#333333;font-size:0.28rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position: absolute;bottom: 1.0rem;left:0.28rem;display:block;width:85%;"
      >{{item.name}}</span>
      <span
        style="color:#BDBDBD;font-size:0.2rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position: absolute;bottom: 0.6rem;left:0.28rem;display:block;width:85%;"
      >{{item.characteristic}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tuijian",
  props: ["propTj"]
};
</script>

<style lang="scss" scoped>
</style>