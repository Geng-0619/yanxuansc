<template>
  <div>
    <h3>证号登录</h3>
    <p>严选商城</p>
    <input type="text" placeholder="手机号码" />
    <br />
    <input type="text" placeholder="密码" />
    <br />
    <button>登陆</button>
    <p>忘记密码</p>
    <router-link to="reslogin"><p>还没有注册，立即注册</p></router-link>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="scss" scoped>
input {
    width: 75%;
    height: 30px;
  border: 1px solid #ccc;
  padding: 7px 0px;
  border-radius: 3px;
  padding-left: 15px;
  outline: none;
  margin:  2.5px 35px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>