<template>
  <div>
    <div>
      <div class="Shouhuo_header">
        <!-- <router-link to="/cart"> -->
        <i @click="fhsj" class="el-icon-arrow-left" style="float:left;margin-top:0.2rem;"></i>
        <!-- </router-link> -->
        <span style="font-size:0.2rem;">确认订单</span>
      </div>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import "../css/shouhuo.scss";
import axios from "axios";
// 导入 area.js
import address from "../shengshi";
export default {
  name: "shouhuo",
  data() {
    return {
      areaList: address,
      searchResult: []
    };
  },
  methods: {
    onSave(content) {
      //   Toast("save");
      //   console.log(content)
      let token = JSON.parse(localStorage.getItem("token"));
      let arr = JSON.parse(localStorage.getItem("DiZhi"));
      if (arr == null) {
        let box = [];
        localStorage.setItem("DiZhi", JSON.stringify(box));
      } else {
        this.$store.state.Shouhuo = JSON.parse(localStorage.getItem("DiZhi"));
      }
      axios
        .post(
          `https://api.it120.cc/small4/user/shipping-address/add?address=${content.addressDetail}&cityId=${content.areaCode}&code=${content.postalCode}&districtId=&idcard=&isDefault=${content.isDefault}&latitude=&linkMan=${content.name}&longitude=&mobile=${content.tel}&provinceId=0&status=&token=${token}`
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.$store.commit("Shouhuodz", res.data.data);
            this.$router.push({
              path: "/SubGoods"
            });
          }
        });
    },
    fhsj() {
      this.$router.go(-1);
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>