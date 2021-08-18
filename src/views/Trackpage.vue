<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>追蹤表單</h1>
        <b-col md="4" class="search">
          <b-form-input placeholder="搜尋"></b-form-input>
        </b-col>

        <b-col md="9" class="main">
          <b-col
            class="inbox"
            id="my-table"
            small
            v-for="item in items.slice(
              (this.currentPage - 1) * this.perPage,
              this.currentPage * this.perPage
            )"
            :key="item.id"
          >
            <div class="track">
              <div class="innerdiv" :title="item.isSignback">
                {{ item.company_Name }}
              </div>
            </div>
            <div class="trackdata">
              <div class="innerdiv">{{ item.quotation_ID }}</div>
            </div>

            <div class="projectname">
              <div class="innerdiv" :title="item.project_Name">
                {{ item.project_Name }}
              </div>
            </div>

            <div class="remark">
              <div class="innerdiv" :title="item.remark">
                {{ item.isSignback }}
              </div>
            </div>
            <div class="back">
              <div class="mainicon">
                <font-awesome-icon
                  class="uploadicon"
                  :icon="['fas', 'cloud-upload-alt']"
                  style="color: black"
                  size="4x"
                />
              </div>
            </div>
            <div class="back">
              <div class="mainicon">
                <font-awesome-icon
                  class="uploadicon"
                  :icon="['fas', 'pen']"
                  style="color: black"
                  size="4x"
                />
              </div>
            </div>

            <div class="delete">
              <div class="mainicon">
                <font-awesome-icon
                  class="trashicon"
                  :icon="['fas', 'trash']"
                  style="color: black"
                  size="4x"
                />
              </div>
            </div>
          </b-col>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="center"
            class="nextpage"
          ></b-pagination>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Login",
  components: {
    Sidebar,
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,

      items: [
        //  { quotation_ID:'123',project_Name:'465465',remark:'45646'}
      ],
      product: [],
      file: null,
    };
  },

  mounted() {
    //  const that=this
    this.$axios
      .get("https://8dddbfe2067c.ngrok.io/api/quotations")
      .then((response) => {
        console.log(response);
        this.items = response.data.data;

        console.log("apistart");
        console.log(this.items);
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style >
.remark {
  display: inline-block;
  width: 416px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}

.track{
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10% 0% 0% 10%;
}
.trackdata{
    display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.projectname {
  display: inline-block;
  width: 350px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
</style>
