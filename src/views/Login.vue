<template>
  <div>
    <el-form
      :rules="rules"
      ref="loginForm"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="user_id">
        <el-input
          type="text"
          v-model="loginForm.user_id"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          auto-complete="false"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          auto-complete="false"
          v-model="loginForm.code"
          placeholder="点击更换图片"
          style="width: 250px; margin-right: 5px"
        ></el-input>
        <img src="" @click="updataCaptcha" />
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
import store_1 from "../store/state"
export default {
  
  name: "Login",
  data() {
    return {
      checked: true,
      captchaUrl: "",
      rules: {
        user_id: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        // code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      loginForm: {
        user_id: "985355343",
        password: "123",
        // code: "",
      },
    };
  },
  created(){
  },
  methods: {
    updataCaptcha() {
      // this.captchaUrl = "/captcha?time=" + new Data();
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$api.user.SelectUser(this.loginForm).then((res) => {
            console.log(res);
            if (res.data.code == 0) {
              // alert(res.data.msg);
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
            } else {
              store_1.NOTLOGIN= res.data.code
              console.log(store_1.NOTLOGIN)
              this.$router.push({
                name: "Home",
                // params: { id: res.data.data.user_id },
              });
            }
          });
          // alert("登录成功!");
        } else {
          this.$message({
            showClose: true,
            message: "请输入所有字段",
            type: "error",
          });
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 0px auto 48px auto;
  text-align: center;
}
.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
</style>