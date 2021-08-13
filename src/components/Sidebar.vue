<template>
  <b-container fluid>
    <b-col class="sidebar">
      <b-col md-3><h1>報價單系統</h1></b-col>
      <b-col md-3><p>{{account_id}}</p></b-col>
      <b-col md-3><b-button @click="newpage">建立新表單</b-button></b-col>
      <b-col md-3><b-button>建立過的表單</b-button></b-col>
      <b-col md-3><b-button>修改客戶頁面</b-button></b-col>
      <b-col md-3><b-button>追蹤頁面</b-button></b-col>
      <b-col md-3><b-button>登出</b-button></b-col>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: "sidebar",
  data: function () {
    return {
      account_id: "",
    };
  },
  methods: {
    newpage() {
      this.$router.push({ path: "/newpage" });
    },
  },
  mounted() {
      const that=this;
    this.$axios
      .get("https://4b647e72ace5.ngrok.io/api/signin")
      .then(function (response) {
        console.log(response);
        that.account_id=response.data.account;
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  top: 50px;
  left: 50px;
}
.sidebar p {
  margin-top: 10px;
  text-align: center;
}
.sidebar .btn {
  width: 110%;
  margin-top: 10px;
  color: black;
  font-size: 1.3rem;
}
.btn-secondary {
  background-color: #cee6f1;
  border-color: #cee6f1;
}
</style>
