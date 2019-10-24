<template>
  <div class="home_box">
    <div class="fl_top">
      <input type="text" class="fl_inp" placeholder="搜索商品" />
    </div>
    <div class="fl_cont">
      <div class="fl_cont_o">
        <span @click="ss">全部分类</span>
        <span v-for="(item,index) in Fenl" :key="index">
          <ss @click="ssq(item,index)">{{item}}</ss>
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
      flge: true
    };
  },
  methods: {
    ssq(n, i) {
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
      this.ms = el.target.innerHTML;
      // console.log(el.target.innerHTML)
      if ((this.ms = el.target.innerHTML)) {
        this.arr1 = this.Fel;
      }
    }
  },
  created() {
    _product.fenlei().then(res => {
      console.log(res.data.data);
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
.fl_cont_r {
  display: inline-block;
  width: 33%;
  text-align: center;
  font-size: 0.28rem;
  box-sizing: border-box;
  padding: 0.2rem;
  //   margin-bottom: 0.8rem;
  img {
    width: 100%;
  }
}
.fl_top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  line-height: 1rem;
}
.fl_cont {
  // display: flex;
  //   flex: 1;
  width: 100%;
  min-height: 101%;
  margin-top: 1rem;
}
.fl_inp {
  outline: none;
  padding-left: 0.5rem;
  border-radius: 15px;
  border: none;
  border: 1px solid #ddd;
}
.fl_cont_o {
  height: 100%;
  position: fixed;
  left: 0;
  border-right: 1px solid #ccc;
  span {
    font-size: 0.3rem;
    display: block;
    padding: 0.2rem 0.2rem;
    text-align: left;
  }
}
.fl_cont_t {
  float: right;
  width: 75%;
  padding: 0 0 1rem 0;
}
.home_box {
  height: 100%;
}
</style>