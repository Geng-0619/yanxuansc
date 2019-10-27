<template>
  <div>
    <div style="padding:0.4rem 0 0 0.6rem;color:#B3B3B3;">新用户注册</div>
    <div style="font-size:0.2rem;color:#C0C0C0;padding:0.4rem 0.6rem;">(注册只需要一步)</div>
    <input type="text" v-model="phone" placeholder="手机号" />
    <br />
    <input type="text" v-model="pass" placeholder="密码" />
    <br />
    <input type="text" v-model="pass1" placeholder="确认密码" />
    <br />
    <input type="text" v-model="user" placeholder="用户名" />
    <br />
    <input
      type="text"
      v-model="tyzm"
      placeholder="图形验证码"
      style="width:35%;margin:0 0 0 35px;float:left;margin-top:10px;"
    />
    <img
      :src="urlData"
      alt
      @click="qiehuan"
      style="width:3rem;float:left;height:0.9rem;margin-top:10px;"
    />
    <p style="clear: both;"></p>
    <br />
    <div>
      <!-- <button class="type1" style="margin:0 20px 0px 35px;" @click="showVuePopup(true)">vue transition</button> -->
      <div class="vue-popup">
        <div class="mask" v-show="show2" @click="showVuePopup(false)"></div>
        <!-- <transition name="slide"> -->
          <!-- <div class="popup-content" v-show="show2"> -->
            <!-- <div style="border-right:1px solid #ccc;overflow: auto;">
              <option
                @click="shi(item.id)"
                value="item.name"     
                v-for="item in shengfen"
              >{{item.name}}</option>
            </div>
            <div style="overflow: auto;">
              <option value="item.name" v-for="item in shil">
                {{item.name}}
              </option>
            </div> -->

            <!-- <el-form-item label="活动区域" :label-width="formLabelWidth"> -->
            <el-select v-model="shengl" @change="shi()" placeholder="请选择省份">
              <el-option v-for="(item,key) in shengfen" :key="key" :value="item.name"></el-option>
            </el-select>

            <el-select v-model="shil1" placeholder="请选择城市">
              <el-option v-for="(item,key) in shil" :key="key" :value="item.name"></el-option>
            </el-select> 
          <!-- </el-form-item> -->

          <!-- <el-form-item label :label-width="formLabelWidth">
            

            <el-select v-model="form.city" placeholder="请选择区县">
              <el-option v-for="(item,key) in s" :key="key" :value="item.area_name"></el-option>
            </el-select> -->
          <!-- </el-form-item> -->
          <!-- </div> -->
        <!-- </transition>  -->
      </div>
    </div>
    <br />
    <input
      style="height:30px;width:40%;margin:0px 0 0 35px;float:left;"
      type="text"
      v-model="yzm"
      placeholder="验证码"
    />
    <input
      style="height:45px;width:35%;margin:0px 0 0 0;float:left;border-left:1px solid #ccc;"
      type="button"
      value="点击获取验证码"
      @click="hqyzm"
      name
      id
    />
    <br />
    <button @click="zc" class="btn_login">立即注册</button>
    <br />
    <router-link to="/login">
      <p style="text-align:center;font-size:0.26rem;color:#549FF9;">已有证号？立即登录</p>
    </router-link>
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
      phone: "", //手机号
      pass: "",//密码
      pass1: "",//密码
      user: "",//用户名
      tyzm: "",//图形验证码
      yzm: "", //手机验证码
      ss: "",
      hqyzm1: "",
      urlData: "",
      time: "", // 时间戳
      shengfen: "",  //省
      show: false,
      show2: false,
      shil:[] ,// 市,
      shengl:"",
      shil1:"",
    };
  },
  methods: {
    zc() {
      if (this.pass == this.pass1) {
        // 手机号验证码成功后   注册验证
        axios
          .post(
            `https://api.it120.cc/small4/verification/sms/check?mobile=${this.phone}&code=${this.yzm}`
          )
          .then(res => {
            if (res.data.code == 0) {
              axios
                .post(
                  `https://api.it120.cc/small4/user/m/register?mobile=${this.phone}&pwd=${this.pass}&code=${this.yzm}&nick=${this.user}&province=${this.shengl}&city=${this.shil1}`
                )
                .then(res => {
                  console.log(res);
                  if (res.data.code != 0) {
                    this.$router.push({
                      path: "/login"
                    });
                  }
                });
            } else {
              // console.log(555555)
            }
          });
      } else {
        console.log("密码不对");
        return;
      }
    },
    hqyzm() {
      let mobile = this.phone;
      let txyzm = this.tyzm;
      // axios.post(`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`).then(res=>{
      //   console.log(res)
      // })
      // console.log(txyzm)

      //  图形验证码手机号   手机发短信
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
      this.time = new Date().getTime();
      axios
        .get(
          `https://api.it120.cc/small4/verification/pic/get?key=${this.time}`,
          {
            responseType: "arraybuffer"
          }
        )
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
    },
    showCssPopup(flag) {
      this.show = flag;
    },
    showVuePopup(flag) {
      this.show2 = flag;
    },
    shi(){
      // console.log(n)
      // console.log(this.shengfen)
      // console.log(this.shengl)
      let index = this.shengfen.filter(item => {
        return item.name == this.shengl
      })
      let n = index[0].id
      // console.log(n)
      this.shil=[]
      axios.get(`https://api.it120.cc/common/region/child?pid=${n}`).then(res => {
        // console.log(res.data.data)
        this.shil = res.data.data;
      // console.log(this.shil)
      })
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
    this.time = new Date().getTime();
    axios
      .get(
        `https://api.it120.cc/small4/verification/pic/get?key=${this.time}`,
        {
          responseType: "arraybuffer"
        }
      )
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
    axios.post("https://api.it120.cc/common/region/province").then(res => {
      //  console.log(res.data)
      this.shengfen = res.data.data;
      // console.log(this.shengfen.data[0].pid);
    });
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
.btn_login {
  // background: linear-gradient(to right, #F1EAD8 0%, #FEFBF2 100%);
  width: 55%;
  height: 0.7rem;
  border: none;
  border-radius: 5px;
  margin: 1rem 1.6rem;
  // padding: 20px 0;
  background: linear-gradient(to right, #67a2f7 0%, #b389f6 100%);
}
.xn-container {
  height: 100%;
}
button {
  display: block;
  width: 300px;
  height: 44px;
  margin: 20px auto;
  border-radius: 4px;
  background-color: #3884ff;
  color: #fff;
}
.css-popup {
  .popup-content {
    position: absolute;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    box-sizing: border-box;
    &.show {
      height: 400px;
    }
  }
}
.vue-popup {
  .popup-content {
    position: absolute;
    height: 400px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    display: flex;
    div {
      width: 50%;
    }
  }
}
.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in;
}

.slide-enter-active {
  animation-name: slideInUp;
  animation-duration: 0.2s;
  animation-fill-mode: both;
}
.slide-leave-active {
  animation-name: slideOutDown;
  animation-duration: 0.2s;
  animation-fill-mode: both;
}
@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}
@keyframes slideOutDown {
  0% {
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
}
.delay-leave-active {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
</style>