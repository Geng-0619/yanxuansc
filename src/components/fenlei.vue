<template>
  <div class="home_box">
    <div class="fl_top">
      <input type="text" class="fl_inp" placeholder="搜索商品" />
    </div>
    <div class="fl_cont">
      <div class="fl_cont_o">
        <span @click="ss" :class="{reda:FlAll}">全部分类</span>
        <span v-for="(item,index) in Fenl" :key="index" :class="{reda:Flindex==index&&!FlAll}">
          <b @click="ssq(item,index)">{{item}}</b>
          <br />
        </span>
      </div>
      <div class="fl_cont_t" v-show="flge">
        <span class="fl_cont_r" v-for="(item,i) in Fel" :key="i">
          <router-link :to="{path:'/shangpinxq',query:{id:item.id}}">
            <img :src="item.icon" alt />
          </router-link>
          {{ item.name }}
        </span>
      </div>
      <div class="fl_cont_t" v-show="!flge">
        <span class="fl_cont_r" v-for="(item,i) in arr1" :key="i">
          <router-link :to="{path:'/shangpinxq',query:{id:item.id}}">
            <img :src="item.icon" alt />
          </router-link>
          {{ item.name }}
        </span>
      </div>
    </div>
    <!-- <div style="height:100px;"></div> -->
  </div>
</template>

<script>
import "../css/fenlei.scss";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "fl",
  data() {
    return {
      Fel: [],
      Fenl: [],
      ms: "",
      qb: [],
      arr1: [],
      flge: true,
      Flindex:-1,
      FlAll:false
    };
  },
  methods: {
    ssq(n, i) {
      this.Flindex = i;
      this.FlAll = false;
      this.flge = false;
      //   this.ms = n;
      let index = this.qb.findIndex(item => {
        return item.name == n;
      });
      //   console.log(index);
      this.arr1 = this.qb.filter((v, i) => {
        return v.pid == this.qb[index].id;
      });
      // console.log(this.arr1);
    },
    ss(el) {
      this.FlAll = true;
      this.ms = el.target.innerHTML;
      // console.log(el.target.innerHTML)
      if ((this.ms = el.target.innerHTML)) {
        this.arr1 = this.Fel;
      }
    }
  },
  created() {
    _product.fenlei().then(res => {
      // console.log(res.data.data);
      this.qb = res.data.data;
      res.data.data.map(item => {
        if (item.pid == 0) {
          this.Fenl.push(item.name);
        }
      });
      //   console.log(this.Fenl)
      this.Fel = res.data.data.filter(item => {
        return item.pid != 0;
      });
      // console.log(this.Fenl)
    });
  }
};
</script>

<style lang="scss" scoped>
</style>