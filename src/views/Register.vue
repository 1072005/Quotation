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
        @keyup.native="btKeyUp"
      />
      <p>密碼</p>
      <mdb-input
        icon="lock"
        placeholder="請輸入密碼"
        :type="typ"
        v-model="Password"
        @keyup.native="btKeyUp"
      />
      <font-awesome-icon
        class="eyeicon"
        :icon="['far', 'eye']"
        style="color: black"
        @click="iconclick"
        @mouseleave="iconleave"
      />
      <p>公司統一編號</p>
      <mdb-input
        icon="lock"
        placeholder="請輸入公司統一編號"
        type="text"
        v-model="company_id"
        @keyup.native="btKeyUp"
      />
      <div class="radio">
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          我已閱讀並同意
          <a href="https://google.com/" target="_blank">條款</a>
        </b-form-checkbox>
      </div>
      <p class="message" v-show="isShow">{{ message }}</p>
      <div class="text-center inbtn">
        <b-button variant="primary" class="col-12" @click="postdata"
          >註冊</b-button
        >
      </div>
      <p class="register">已經有帳號?</p>
      <b-link href="/">登入</b-link>
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
      inShow: "",
      Account: "",
      Password: "",
      company_id: "",
      message: "",
      status: "not_accepted",
    };
  },
  methods: {
    iconclick() {
      this.typ = "text";
    },
    iconleave() {
      this.typ = "password";
    },
    btKeyUp(e) {
      e.target.value = e.target.value.replace(
        /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
        ""
      );
    },
    postdata() {
      let parms = {
        Account: this.Account,
        Password: this.Password,
        company_id: this.company_id,
      };

      const that = this;
      if (this.status == "not_accepted") {
        alert('請閱讀完條款後勾選以閱讀並同意')
      } 
      else {
        this.$axios
          .post("http://e3f7-220-135-155-67.ngrok.io/api/users/signup", parms)
          .then(function (response) {
            console.log(response);
            if (response.data.status_Code == 2000) {
              alert("註冊成功");
              that.$router.push({ path: "/" });
            } else {
              that.isShow = "false";
              that.message = response.data.message;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.grey-text {
  width: 20%;
  height: 550px;
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
.radio {
  font-size: 1rem;
}
</style>

