<template>
  <div>
    <p style="padding:0.4rem 0 0 0.6rem;">账号登录</p>
    <p style="font-size:0.24rem;color:#909090;padding:0.4rem 0 0.4rem 0.6rem;">严选商城</p>
    <input type="text" :class="{login_red:loginShow}" placeholder="手机号码" maxlength="11" v-model="phone_d" @blur="pd_phone" />
    <br />
    <input type="password" placeholder="密码" v-model="phone_l" />
    <br />
    <button @click="login_dl" class="btn_login">登陆</button>
    <router-link to="/"><p style="text-align:center;font-size:0.2rem;color:#989898;">忘记密码</p></router-link>
    <router-link to="reslogin">
      <p style="text-align:center;font-size:0.26rem;color:#549FF9;margin-top:0.3rem;">还没有注册，立即注册</p>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      phone_d: "",
      phone_l: "",
      loginShow:false
    };
  },
  methods: {
    login_dl() {
      // https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey
      axios
        .post(
          `https://api.it120.cc/small4/user/m/login?mobile=${this.phone_d}&pwd=${this.phone_l}&deviceId=007&deviceName=monkey`
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.$router.push({
              path: "/myhome"
            });
          }
        });
    },
    pd_phone() {
      if (!/^1[3456789]\d{9}$/.test(this.phone_d)) {
        // alert("手机号码有误，请重填");
        this.loginShow = true
        return false;
      }else{
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login_red{
  background: #FFE9E4;
  border: 1px solid #E12C1E;
}
input {
  width: 75%;
  height: 30px;
  border: 1px solid #ccc;
  padding: 7px 0px;
  border-radius: 3px;
  padding-left: 15px;
  outline: none;
  margin: 6px 35px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.btn_login {
  // background: linear-gradient(to right, #F1EAD8 0%, #FEFBF2 100%);
  width: 55%;
  height: 0.7rem;
  border: none;
  border-radius: 5px;
  margin: 0.6rem 1.6rem;
  background: linear-gradient(to right, #67a2f7 0%, #b389f6 100%);
}
</style>