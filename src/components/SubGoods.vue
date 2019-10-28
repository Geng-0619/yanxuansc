<template>
  <div style="display: flex;flex-direction: column;width:100%;height:100%;">
    <div class="SubGoods_header">
      <router-link to="/cart">
        <i class="el-icon-arrow-left" style="float:left;margin-top:0.2rem;"></i>
      </router-link>
      <span style="font-size:0.2rem;">确认订单</span>
    </div>
    <div class="SubGoods_cont">
      <div v-show="shoudz">
        <router-link to="/shouhuo">
          <div class="SubGoods_shdz">
            <button
              style="width:0.5rem;height:0.5rem;background:#3283F9;line-height: 0.5rem;border:none;text-align:center;"
            >+</button>
            <span style="font-size: 0.26rem;">新建收获地址</span>
            <i class="el-icon-arrow-right" style="float:right;line-height: 1rem;color:#C2C2C2;"></i>
          </div>
        </router-link>
      </div>
      <div v-show="!shoudz">
        <router-link to="/">
          <div class="SubGoods_shdz" style="font-size:0.2rem;height:1rem;">
            <div style="display:flex;flex-direction: column;">
              <span>{{ShowDiz.linkMan}}{{ShowDiz.mobile}}</span>
              <span>{{ShowDiz.address}}</span>
            </div>
            <i class="el-icon-arrow-right" style="float:right;color:#C2C2C2;"></i>
          </div>
        </router-link>
      </div>
      <p style="width:100%;height:0.3rem;background:#F5F5F5;margin:0;"></p>
      <p
        style="width:100%;line-height: 0.8rem;height:0.8rem;margin:0;font-size:0.26rem;border-bottom:2px solid #cccccc;padding:0 0.3rem;box-sizing:border-box;"
      >商品列表</p>
      <div v-for="(item,index) in SubCartI" :key="index" class="cont_Sub_item">
        <img :src="item.images" style="height:2rem;" alt />
        <div class="cont_Sub_item_b">
          <span>{{item.titleGoods}}</span>

          <span>{{item.nameGoods}}</span>
        </div>
        <div class="cont_Sub_item_b">
          <span>{{item.priceGoods}}</span>

          <span>{{item.numGoods}}</span>
        </div>
      </div>
      <p style="width:100%;height:0.3rem;background:#F5F5F5;margin:0;"></p>

      <li style="padding:0 0.2rem;border-bottom:1px solid #ccc;margin-right:0.2rem;height:1rem;font-size:0.26rem;display:flex;justify-content: space-between;box-sizing: border-box;align-items: center;">
        <span>配送方式</span>
        <span>快递</span>
      </li>

        <input type="text" placeholder="备注">

        <li style="font-size:0.26rem;display:flex;justify-content: space-between;box-sizing: border-box;align-items: center;padding:0 0.2rem;">
          <span>商品金额</span>
          <span>
            {{Zprice}}
          </span>
        </li>

    </div>
    <div class="SubGoods_footer">
      <span style="float:right;">
        <span style="margin-right:0.2rem;">合计：￥{{Zprice}}</span>
        <button style="height: 1rem;wdith:3rem;background:red;border:none;color:#ffffff;padding:0 0.6rem;">
          提交订单
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
import axios from "axios";
export default {
  name: "SubGoods",
  data() {
    return {
      shoudz: false,
      ShowDiz: {},
      SubCartI: [],
      Zprice:0
    };
  },
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token == null) {
      this.shoudz = true;
    } else {
      this.shoudz = false;
    }
    axios
      .post(
        `https://api.it120.cc/small4/user/shipping-address/default?token=${token}`
      )
      .then(res => {
        // console.log(res.data.data);
        if (res.data.code == 0) {
          this.ShowDiz = res.data.data;
          // console.log( this.ShowDiz)
        }
      });
    let aa = JSON.parse(localStorage.getItem("Cart"));
    this.SubCartI = aa.filter(item => {
      return item.Goodscheck == true;
    });
    aa.map(item => {
      this.Zprice += item.numGoods * item.priceGoods
    })
    // console.log(this.Zprice)
    // console.log(this.SubCartI)
  }
};
</script>

<style lang="scss" scoped>
.SubGoods_header {
  width: 100%;
  height: 1rem;
  background: #fff;
  text-align: center;
  // line-height: 1rem;
  box-sizing: border-box;
  padding: 0 0.3rem;
  
}
.SubGoods_footer {
  width: 100%;
  height: 1rem;
  background: #ccc;
  box-sizing: border-box;
  font-size:0.26rem;
}
.SubGoods_cont {
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
}
.SubGoods_shdz {
  width: 100%;
  height: 1rem;
  // line-height: 1rem;
  box-sizing: border-box;
  border-bottom: 1px dotted #f88081;
  padding: 0 0.3rem;
}
.cont_Sub_item {
  display: flex;
  font-size: 0.26rem;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
}
.cont_Sub_item_b {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 0;
  box-sizing: border-box;
}
</style>