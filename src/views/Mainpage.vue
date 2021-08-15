<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>建立過的表單</h1>
        <b-col md="4" class="search">
          <b-form-input placeholder="搜尋"></b-form-input>
        </b-col>

        <b-col offset-md="3" class="selete">
          <b-form-select v-model="selected" :options="options"></b-form-select>
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
            <div class="dateleft">{{ item.quotation_ID }}</div>
            <div class="name">{{ item.company_Name }}</div>
            <div class="produce">
              <b-form-select
                v-model="selected"
                :options="product_Name"
              ></b-form-select>

              <!-- <b-dropdown
                id="dropdown-offset"
                offset="5"
                
              >
              <div v-for="(count ,index) in item.products.length" :key="count.id">
                <b-dropdown-item >{{ item.products[index].product_Name }}</b-dropdown-item>
              </div>
              </b-dropdown> -->
            </div>
            <div class="downlord">
              <font-awesome-icon
                class="downloadicon"
                :icon="['fas', 'download']"
                style="color: black"
                size="4x"
              />
            </div>
            <div class="back">
              <input id="fileUpload" type="file" hidden /><font-awesome-icon
                class="uploadicon"
                :icon="['fas', 'cloud-upload-alt']"
                style="color: black"
                size="4x"
                @click="chooseFiles()"
              />
            </div>
            <div class="view">
              <font-awesome-icon
                class="eyesicon"
                :icon="['far', 'eye']"
                style="color: black"
                size="4x"
              />
            </div>
            <div class="edit">
              <font-awesome-icon
                class="penicon"
                :icon="['fas', 'pen']"
                style="color: black"
                size="4x"
              />
            </div>
            <div class="delete">
              <font-awesome-icon
                class="trashicon"
                :icon="['fas', 'trash']"
                style="color: black"
                size="4x"
              />
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
      selected: null,
      options: [
        { value: null, text: "顯示全部" },
        { value: "a", text: "以上傳回簽檔" },
        { value: "b", text: "未上傳回簽檔" },
      ],

      perPage: 6,
      currentPage: 1,

      items: [
        {
          quotation_ID: 20201026,
          company_Name: "Fred",
          product_Name: "Flintstone",
        },
        { quotation_ID: 2, company_Name: "Wilma", product_Name: "Flintstone" },
        { quotation_ID: 3, company_Name: "Barney", product_Name: "Rubble" },
        { quotation_ID: 3, company_Name: "Barney", product_Name: "Rubble" },
        { quotation_ID: 3, company_Name: "Barney", product_Name: "Rubble" },
        { quotation_ID: 3, company_Name: "Barney", product_Name: "Rubble" },
        { quotation_ID: 3, company_Name: "Barney", product_Name: "Rubble" },
      ],
      product: [],
      file: null,
    };
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
      //axios post
    },
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
.rightside {
  height: 100vh;
  background-color: white !important;
}
.rightside h1 {
  margin-top: 3%;
  margin-left: 20px;
  font-weight: bold;
}
.search {
  display: inline-block;
  margin-left: 20px;
}
.selete {
  display: inline;
}
.main {
  margin-top: 40px;
  margin-left: 20px;
}
.dateleft {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10% 0% 0% 10%;
}
.name {
  display: inline-block;
  width: 20%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.inbox {
  margin-top: 20px;
  width: 120%;
}
.produce {
  display: inline-block;
  width: 30%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.produce .btn-secondary {
  border: none !important;
  color: black !important;
  background-color: white !important;
}
.downlord {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.back {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.view {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.edit {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.delete {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
  border-radius: 0% 10% 10% 0%;
}
.nextpage {
  margin-top: 30px;
  margin-left: 32%;
}
.produce select {
  border: none;
}
.downloadicon {
  cursor: pointer;
  padding-top: 25px;
}
.uploadicon {
  cursor: pointer;
  padding-top: 25px;
}
.eyesicon {
  cursor: pointer;
  padding-top: 25px;
}
.penicon {
  cursor: pointer;
  padding-top: 25px;
}
.trashicon {
  cursor: pointer;
  padding-top: 25px;
}
</style>
