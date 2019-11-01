<template>
  <div>
    <div class="payHeader">
      <i
        @click="sjyfh"
        style="font-size:0.4rem;float:left;margin-top:0.15rem;"
        class="el-icon-arrow-left"
      ></i>
      <span>确认付款</span>
    </div>
    <div>
      <li
        style="display:flex;align-items: center;font-size:0.2rem;height:1rem;border-bottom:1px solid #ccc;padding:0.2rem 0.3rem;"
      >
        <van-icon name="gold-coin-o" style="size:0.4rem;" />
        <div style="display:flex;flex-direction: column;padding-left:0.3rem;">
          <span>
            商品总额
            <span style="color:red;">￥{{ZpriceP}}</span>
          </span>
          <br />
          <span>订单号:{{ dingdanx.orderNumber }}</span>
        </div>
      </li>
      <li
        style="display:flex;align-items: center;font-size:0.2rem;height:1rem;border-bottom:1px solid #ccc;padding:0.2rem 0.3rem;"
      >
        <i class="el-icon-map-location" style="font-size:0.4rem;"></i>
        <div style="display:flex;flex-direction: column;padding-left:0.3rem;">
          <span>{{ShowDiz.linkMan}}{{ShowDiz.mobile}}</span>
          <br />
          <span>{{ShowDiz.address}}</span>
        </div>
      </li>
    </div>

    <div class="PayFoot">
        微信支付￥{{ ZpriceP }}
    </div>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "payHome",
  data() {
    return {
      ZpriceP: "",
      dingdanx: {},
      ShowDiz: {}
    };
  },
  methods: {
    sjyfh() {
      this.$router.go(-1);
    }
  },
  created() {
    this.ZpriceP = JSON.parse(localStorage.getItem("Zprice"));
    // console.log(this.ZpriceP)
    this.dingdanx = JSON.parse(localStorage.getItem("dingdan"));
    let token = JSON.parse(localStorage.getItem("token"));
    _product.Paydz(token).then(res => {
      //   console.log(res.data.data)
      this.ShowDiz = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.payHeader {
  text-align: center;
  line-height: 0.7rem;
  box-sizing: border-box;
  font-size: 0.26rem;
  height: 0.7rem;
  border-bottom: 1px solid #ccc;
}
.PayFoot{
    background: #b7282e;
    text-align: center;
    height: 0.8rem;
    box-sizing: border-box;
    line-height: 0.8rem;
    position: fixed;
    bottom: 0;
    color: #fff;
    width: 100%;
    font-size: 0.28rem;
}
</style>