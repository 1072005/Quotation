<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="9" offset-md="3" class="rightside">
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
              <b-form-select v-model="selected" :options="item.products"></b-form-select>
              

              <!-- <b-dropdown
                id="dropdown-offset"
                offset="5"
                
              >
              <div v-for="(count ,index) in item.products.length" :key="count.id">
                <b-dropdown-item >{{ item.products[index].product_Name }}</b-dropdown-item>
              </div>
              </b-dropdown> -->

            </div>
            <div class="downlord">123</div>
            <div class="back">1234</div>
            <div class="view">123</div>
            <div class="edit">1523</div>
            <div class="delete">123</div>
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

      ],
 
    };
  },


  mounted() {
    //  const that=this
    this.$axios
      .get("https://4b647e72ace5.ngrok.io/api/quotations")
      .then( response => {
          this.items = response.data.data;
          
          console.log("apistart");
          
          

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
  width: 15%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10% 0% 0% 10%;
}
.name {
  display: inline-block;
  width: 15%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.inbox {
  margin-top: 20px;
}
.produce {
  display: inline-block;
  width: 20%;
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
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.back {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.view {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.edit {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.delete {
  display: inline-block;
  width: 10%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
  border-radius: 0% 10% 10% 0%;
}
.nextpage {
  margin-top: 30px;
}
.produce select{
  border: none;
}
</style>
