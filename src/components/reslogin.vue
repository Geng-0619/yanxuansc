<template>
  <div>
    <div>新用户注册</div>
    <div></div>
    <input type="text" v-model="phone" placeholder="手机号" />
    <br />
    <input type="text" v-model="pass" placeholder="密码" />
    <br />
    <input type="text" v-model="pass1" placeholder="确认密码" />
    <br />
    <input type="text" v-model="user" placeholder="用户名" />
    <br />
    <input type="text" v-model="tyzm" placeholder="图形验证码" style="width:35%;margin:0 0 0 35px;" />
    <img :src="urlData" alt @click="qiehuan" style="width:3rem;" />
    <br />
    <input type="text" v-model="yzm" placeholder="验证码" />
    <button @click="hqyzm">点击获取验证码</button>
    <br />
    <button @click="zc">立即注册</button>
    <br />
    <p>已有证号？立即登录</p>
  </div>
</template>

<script>
import Product from "../services/product-service.js";
const _product = new Product();
import axios from "axios";
export default {
  name: "Reslogin",
  data() {
    return {
      phone: "",
      pass: "",
      pass1: "",
      user: "",
      tyzm: "",
      yzm: "",
      ss: "",
      hqyzm1: "",
      urlData: "",
      time:''
    };
  },
  methods: {
    zc() {
        if(this.pass == this.pass1){
           axios.post(`https://api.it120.cc/small4/verification/sms/check?mobile=${this.phone}&code=${this.yzm}`).then(res=>{
              if(res.data.code == 0){
                  axios.post(`https://api.it120.cc/small4/user/m/register?mobile=${this.phone}&pwd=${this.pass}&code=${this.yzm}&nick=${this.user}`).then(res=>{
                    console.log(res)
                  })
              }else{
                console.log(555555)
              }
          })
        }else{
          console.log('密码不对')
          return;
        }
    },
    hqyzm() {
      let mobile = this.phone;
      let txyzm = this.tyzm
      // axios.post(`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`).then(res=>{
      //   console.log(res)
      // })
      // console.log(txyzm)
      axios
        .post(
          `https://api.it120.cc/small4/verification/sms/get?mobile=${mobile}&key=${this.time}&picCode=${txyzm}`
        )
        .then(res => {
          console.log(res);
        });
      //     _product.dxyz(mobile).then(res => {
      //   console.log(res.data.data)
      // });
    },
    qiehuan() {
      this.time = new Date().getTime()
      axios
        .get(`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`, {
          responseType: "arraybuffer"
        })
        .then(response => {
          // console.log(111111111);
          // console.log(
          this.urlData =
            "data:image/png;base64," +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
          // );
          // console.log(this.urlData)
        });
    }
  },
  created() {
    // axios({
    //   method: "post",
    //   url: "https://api.it120.cc/small4/verification/pic/get",
    //   responseType: "blob"
    // }).then(res => {
    //   this.urlData = window.URL.createObjectURL(res.data);
    //   console.log(this.urlData);
    // });
        this.time = new Date().getTime()
    axios
      .get(`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`, {
        responseType: "arraybuffer"
      })
      .then(response => {
        // console.log(111111111);
        // console.log(
        this.urlData =
          "data:image/png;base64," +
          btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
        // );
        // console.log(this.urlData)
      });
    // axios.post("https://api.it120.cc/small4/verification/pic/get").then(response => {
    //   return (
    //     "data:image/png;base64," +
    //     btoa(
    //       new Uint8Array(response.data).reduce(
    //         (data, byte) => data + String.fromCharCode(byte),
    //         ""
    //       )
    //     )
    //   );
    // });
  }
};
</script>

<style lang="scss" scoped>
input {
  background: #f5f5f5;
  border: none;
  width: 75%;
  height: 30px;
  border: 1px solid #f5f5f5;
  padding: 7px 0px;
  border-radius: 3px;
  padding-left: 15px;
  outline: none;
  margin: 2.5px 35px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input::-webkit-input-placeholder {
  font-size: 16px;
}
</style>