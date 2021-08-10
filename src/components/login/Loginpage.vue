<template>
  <form>
    <p class="h2 text-center mb-4">報價單系統</p>
    <div class="grey-text">
      <p>帳號</p>
      <mdb-input
        icon="envelope"
        placeholder="請輸入帳號"
        type="email"
        v-model="Account"
      />
      <p>密碼</p>
      <mdb-input
        icon="lock"
        placeholder="請輸入密碼"
        :type="typ"
        v-model="Password"
      />
      <font-awesome-icon
        class="eyeicon"
        :icon="['far', 'eye']"
        style="color: black"
        @click="iconclick"
        @mouseleave="iconleave"
      />
      <p class="message" v-show="isShow">帳號或密碼錯誤</p>
      <div class="text-center inbtn">
        <b-button variant="primary" class="col-12" @click="postdata"
          >登入</b-button
        >
      </div>
      <p class="register">第一次使用?</p>
      <b-link href="#register">立即註冊</b-link>
    </div>
  </form>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Basic",
  components: {
    mdbInput,
  },
  data: function () {
    return {
      typ: "password",
      isShow: "",
      Account: "",
      Password: "",
    };
  },
  methods: {
    iconclick() {
        this.typ = "text";
    },
    iconleave() {
        this.typ = "password";
    },
    postdata() {
      let parms = {
        Account: this.Account,
        Password: this.Password,
      };

      const that = this;
      this.$axios
        .post("https://ca789119eb3c.ngrok.io/api/signin", parms)
        .then(function (response) {
          console.log(response);
          if (response.data.success == true) {
            that.$router.push({ path: "Mainpage" });
          } else {
            that.isShow = "false";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.grey-text {
  width: 20%;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
}
.grey-text p {
  padding-top: 30px;
  font-size: 1.3rem;
}
form {
  padding-top: 5%;
}
.inbtn {
  padding-top: 15px;
}
.register {
  display: inline-block;
  font-size: 1rem !important;
}
.register_1 {
  font-size: 1rem !important;
  display: inline-block;
  color: blue;
}
.eyeicon {
  position: absolute;
  right: 42%;
  top: 39%;
}
.eyeicon:hover {
  cursor: pointer;
}
.message {
  padding-top: 0px !important;
  color: red;
  font-size: 1rem !important;
}
</style>
