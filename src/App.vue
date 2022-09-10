<template>
  <!-- <div id="app">
    <el-button
      type="primary"
      style="width: 100%"
      @click="submitLogin"
    >login</el-button> -->
    <router-view/>
  <!-- </div> -->
</template>

<script>
// import api from "api";
import axios from "axios";
import requset from "./api/requsest";
export default {
  // data() {},
  // mounted() {},
  // created() {
  //   requset({
  //     method: "GET",
  //     url: "/user/index",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // },
  // methods: {
  //   submitLogin() {
  //     let data={
  //       user_name:'',
  //       user_id:'985355343',
  //       password:'123'
  //     }

  //     console.log(data)
      // axios({
      //   url:'http://localhost:8081/index'
      // }).then(res=>{
      //   console.log(res)
      // })
      // requset({
      //   method: "GET",
      //   url: "/index",
      // }).then((res) => {
      //   console.log(res);
      // });
//       this.$api.user.SelectUser(data).then((res) => {
//         console.log(res);
        
//     })
//     },
//   },
};
</script>


<style>
</style>
