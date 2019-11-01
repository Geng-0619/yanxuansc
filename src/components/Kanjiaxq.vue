<template>
  <div>
    <div class="kanjiaxq_box">
      <div>
        <span class="kong" @click="shyj">
          <span class="shi">
            <i class="el-icon-arrow-left"></i>
          </span>
        </span>
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt />
        <p>{{ name }}</p>
        <p>我发现一件好货，来帮我砍到最低价吧</p>
        <div class="kj_spxq">
          <img :src="pic" alt style="width:1.6rem;height:1.6rem;" />
          <div style="display: flex;flex-direction: column;justify-content: space-around;">
            <p style="padding-left:0.1rem;color:#000000;">{{ title }}</p>
            <p style="box-sizing:border-box;">
              <span style="color:#B09972;font-size:0.24rem;">
                底价
                <b>￥{{ kanjia.data.minPrice }}</b>
              </span>

              <s style="color:#8E8F90;font-size:0.24rem;margin-left:.3rem;">
                原价￥
                {{ kanjia.data.curPrice }}
              </s>
            </p>
          </div>
        </div>
        <p v-show="cutPrice != ''" style="margin-top:0.3rem;">
          当前价
          <span style="display:inline-block;font-size:0.4rem;">{{ Jsp }}</span>元,已砍
          <span style="display:inline-block;font-size:0.4rem;">{{ this.cutPrice }}</span>元
        </p>

        <p v-show="cutPrice == ''" style="margin-top:0.3rem;">
          当前价
          <span style="display:inline-block;font-size:0.4rem;">{{ Jsp }}</span>元,已砍
          <span style="display:inline-block;font-size:0.4rem;">0.00</span>元
        </p>

        <div v-show="cutPrice == ''">
          <button
            @click="kanjia_my"
            style="font-size:0.26rem;background:#989389;border:none;padding:0.2rem 0.6rem;color:#fff; border-radius: 5px;margin-top:0.4rem;"
          >自己先砍一刀</button>
          <button
            style="font-size:0.26rem;border:1px solid #B3A079;background:#CFBF9E;color:#C8AA7E;padding:0.2rem 0.2rem; border-radius: 5px;"
          >邀请好友砍价</button>
        </div>

        <div v-show="cutPrice != ''">
          <button
            style="font-size:0.26rem;background:#989389;border:none;padding:0.2rem 0.6rem;color:#fff; border-radius: 5px;margin-top:0.4rem;"
          >以当前价购买</button>
          <button
            style="font-size:0.26rem;border:1px solid #B3A079;background:#CFBF9E;color:#C8AA7E;padding:0.2rem 0.2rem; border-radius: 5px;"
          >邀请好友砍价</button>
        </div>
      </div>
    </div>
    <div style="padding:0 0.2rem;">
      <p></p>
      <div class="kj_address">
        <div style="width:20%;">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt style="width:70%;padding:0.25rem 0.2rem;"/>
        </div>
        <div style="width:50%;display:flex;justify-content: space-around;flex-direction: column;">
                <p>{{ name }}</p>
                <p>{{ kanjia.data.dateUpdate }}</p>
        </div>
        <div style="width:30%;line-height: 1.5rem;">
            砍掉{{ this.cutPrice }} 元
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/kanjiaxq.scss";
import Product from "../services/product-service.js";
const _product = new Product();
export default {
  name: "kanjiaxq",
  data() {
    return {
      kanjia: {},
      name: "",
      pic: "",
      title: "",
      cutPrice: "",
      Kshow: false
    };
  },
  methods: {
    kanjia_my() {
      let token = JSON.parse(localStorage.getItem("token"));
      let obj = {
        token: token,
        kjid: this.kanjia.data.kjId,
        joinerUser: this.kanjia.data.uid
      };
      _product.Kjxq(obj).then(res => {
        // console.log(res.data.data)
        // this.cutPrice = res.data.data.cutPrice;
        let list = JSON.parse(localStorage.getItem("KjPrice"));
        list.push(res.data.data.cutPrice);
        this.cutPrice = list;
        localStorage.setItem("KjPrice", JSON.stringify(this.cutPrice));
      });
      this.Kshow = true;
    },
    shyj(){
        this.$router.go(-1)
    }
  },
  computed: {
    Jsp() {
      return parseInt(this.kanjia.data.curPrice - this.cutPrice);
    }
  },
  created() {
    this.kanjia = JSON.parse(localStorage.getItem("Kjxq"));
    // console.log(this.kanjia)
    let d = JSON.parse(localStorage.getItem("DiZhi"));
    // console.log(d)
    this.name = d[0].address;
    // console.log(this.name)
    let g = JSON.parse(localStorage.getItem("Goodsxq"));
    this.pic = g.basicInfo.pic;
    this.title = g.basicInfo.name;
    // console.log(this.pic)

    let arr = JSON.parse(localStorage.getItem("KjPrice"));
    if (arr == null) {
      let box = [];
      localStorage.setItem("KjPrice", JSON.stringify(box));
    } else {
      this.cutPrice = JSON.parse(localStorage.getItem("KjPrice"));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>