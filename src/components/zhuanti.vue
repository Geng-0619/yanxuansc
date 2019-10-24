<template>
  <div style="padding:0 0.2rem;">
    <p class="home_comt_tuijian">
      <router-link to='/jingxuan'>精选专题</router-link>
      <i class="el-icon-arrow-right"></i>
    </p>
    <div class="home_zt">
      <p v-for="(item,index) in propZt" :key="index" style="width:85%;display:inline-block;padding:0 0.1rem;box-sizing:border-box;">
        <router-link :to="{ path: '/Ztxq', query:{id:item.id} }"><img :src="item.pic" alt style="width:100%;"/></router-link>
        <span
          style="font-size:14px;color:#333333;display:block;padding:0 0.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        >{{item.title}}</span>
        <span
          style="font-size:14px;color:#B2B2B2;display:block;padding:0 0.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        >{{item.descript}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhuanti",
  props: ["propZt"]
};
</script>

<style lang="scss" scoped>
.home_zt {
  // height: 6rem;
  overflow: auto;
  display: flex;
}
</style>