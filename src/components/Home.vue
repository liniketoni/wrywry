<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer/Footer.vue";
import Header from "./Header/Header.vue";
import Main from "./Main/Main.vue";
import store_1 from "../store/state";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
    Main,
  },
  created() {
    this.$api.user.getUserList().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
</style>