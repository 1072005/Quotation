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
            <div class="dateleft">
              <div class="innerdiv" >{{ item.quotation_ID }}</div>
            </div>

            <div class="produce">
              <div class="innerdiv" :title="item.produce_Name">
                {{ item.produce_Name }}
              </div>
            </div>
            <div class="ispay">
              <div class="innerdiv" :title="item.ispay">{{ item.ispay }}</div>
            </div>
            <div class="remark">
              <div class="innerdiv"  :title="item.remark">
                {{ item.remark }}
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
        {
          quotation_ID: 20201001,
          produce_Name: "專案名稱",
          ispay: "付款狀態",
          remark: "備註",
        },
        {
          quotation_ID: 20201002,
          produce_Name: "專案名稱",
          ispay: "付款狀態",
          remark: "備註",
        },
        {
          quotation_ID: 20201003,
          produce_Name: "專案名稱",
          ispay: "付款狀態",
          remark: "備註",
        },
      ],
      product: [],
      file: null,
    };
  },

  mounted() {
    //  const that=this
    this.$axios
      .get("https://c95d5df9aa5a.ngrok.io/api/quotations")
      .then((response) => {
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
.ispay {
  display: inline-block;
  width: 213px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
</style>
