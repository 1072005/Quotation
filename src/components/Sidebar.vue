<template>
  <b-container fluid>
    <b-col class="sidebar">
      <b-col md-3><h1>報價單系統</h1></b-col>
      <b-col md-3
        ><p>{{ account_id }}</p></b-col
      >
      <b-col md-3
        ><b-button @click="newpage">
          <font-awesome-icon
            class="sideicon"
            :icon="['fas', 'file']"
            size="1x"
          />建立新表單</b-button
        ></b-col
      >
      <b-col md-3
        ><b-button @click="$router.push('Mainpage')">
          <font-awesome-icon
            class="sideicon"
            :icon="['fas', 'file-alt']"
            size="1x"
          />建立過的表單</b-button
        ></b-col
      >
      <b-col md-3>
        <b-button @click="$router.push('customerprofile')"
          ><font-awesome-icon
            class="sideicon"
            :icon="['fas', 'pen']"
            size="1x"
          />修改客戶頁面</b-button
        ></b-col
      >
      <b-col md-3>
        <b-button @click="$router.push('reviseproduce')"
          ><font-awesome-icon
            class="sideicon"
            :icon="['fas', 'pen']"
            size="1x"
          />修改產品頁面</b-button
        ></b-col
      >
      <b-col md-3
        ><b-button @click="$router.push('trackpage')"
          ><font-awesome-icon
            class="sideicon"
            :icon="['fas', 'signal']"
            size="1x"
          />追蹤頁面</b-button
        ></b-col
      >
      <b-col md-3
        ><b-button
          ><font-awesome-icon
            class="sideicon"
            :icon="['fas', 'sign-out-alt']"
            size="1x"
          />登出</b-button
        ></b-col
      >
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
    const that = this;
    this.$axios
      .get("https://c95d5df9aa5a.ngrok.io/api/signin")
      .then(function (response) {
        console.log(response);
        that.account_id = response.data.account;
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
  font-weight: bold;
}
.sidebar h1 {
  font-weight: bold;
}
.sidebar .btn {
  margin-left: -15px;
  width: 110%;
  margin-top: 25px;
  color: black;
  font-size: 1.7rem;
  font-weight: bold;
  text-align: left;
}
.btn-secondary {
  background-color: #cee6f1;
  border-color: #cee6f1;
}
.sideicon {
  margin-right: 5px;
}
</style>
