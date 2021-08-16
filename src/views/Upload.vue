<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <b-col md-3 class="data"> 123</b-col>
        <b-col offset-md="4" class="company"> 123</b-col>
        <b-col offset-md="3" md-3 class="project"> 123</b-col>
        <b-col class="selet">
          <b-form-file
            v-model="file"
            class="mt-3"
            plain
            @change="fileChange"
          ></b-form-file>
        </b-col>
        <b-col class="selet">
          <b-button variant="primary" class="gobtn" size="lg" @click="postdata"
            >上傳</b-button
          >
          <b-button
            variant="outline-info"
            class="backbtn"
            size="lg"
            @click="$router.push('Mainpage')"
            >回首頁</b-button
          >
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script >
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "profile",
  components: {
    Sidebar,
  },
  data() {
    return {
      file: null,
      items: [{ quotation_ID: "456", company_Name: "", project_Name: "" }],
      formData: new FormData(),
    };
  },
  methods: {
    fileChange(e) {
      this.formData.append("file", e.target.files[0]); //放進上傳的檔案
    },
    postdata() {
      this.$axios
        .post("https://c95d5df9aa5a.ngrok.io/api/signin")
        .then(function (response) {
          console.log(response);
          if (response.data.status_Code == 2000) {
            alert(this.file + "上傳成功");
            this.$router.push({ path: "Mainpage" });
          } else {
            alert(response.message);
            this.$router.push({ path: "upload" });
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
.data {
  display: inline-block;
  margin-top: 10%;
  margin-left: 5%;
}
.company {
  display: inline-block;
}
.project {
  display: inline-block;
}
.selet {
  margin-top: 10%;
  margin-left: 5%;
}
.gobtn {
}
.backbtn {
  margin-left: 5%;
  color: black;
}
</style>
