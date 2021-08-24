<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>客戶資料</h1>
        <b-col md="4" class="search">
          <b-form-input
            placeholder="搜尋"
            v-model="search"
            v-on:keyup.enter="SendSearch()"
          ></b-form-input>
        </b-col>
    <b-row class="upper">
          <b-col class="produces">客戶名稱</b-col>
          <b-col class="producesprice">公司名稱</b-col>
          <b-col class="producesedits">編輯</b-col>
          <b-col class="producesdeletes">刪除</b-col>
        </b-row>
        <hr />
        <b-col md="9" class="main">
          <b-col
            class="inbox"
            id="my-table"
            small
            v-for="(item, index) in items.slice(
              (this.currentPage - 1) * this.perPage,
              this.currentPage * this.perPage
            )"
            :key="item.id"
          >
            <div class="customername">
              <div class="innerdiv" :title="item.customer_Name">
                {{ item.customer_Name }}
              </div>
            </div>
            <div class="customerproduce">
              <div class="innerdiv" :title="item.company_Name">
                {{ item.company_Name }}
              </div>
            </div>

            <div class="edit">
              <div class="mainicon">
                <font-awesome-icon
                  class="penicon"
                  :icon="['fas', 'pen']"
                  style="color: black"
                  size="4x"
                  @click="editclient(item.customer_ID)"
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
                  @click="deletedata(index)"
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
      perPage: 6,
      currentPage: 1,
      search: "",
      items: [],
    };
  },
  mounted() {
    this.get_data();
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    get_data: function () {
      this.$api
        .Getcustomer()
        .then((response) => {
          this.items = response.data.data;
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
    editclient(CustomerID) {
      const that = this;
      const customer = {
        CustomerID: CustomerID,
      };

      localStorage.setItem("customerdata", JSON.stringify(customer));
      that.$router.push({ path: "editclient" });
    },
    deletedata(index) {
      let result = window.confirm("確定要刪除這筆資料嗎");
             const that = this;
      if (that.currentPage != 1) {
        index = 6 * that.currentPage - 6 + index;
      }
      if (result == true) {
        this.$api.Deletecustomer(this.items[index].customer_ID)
          .then(function (response) {
            if (response.data.status_Code == 2000) {
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    SendSearch() {
      const that = this;
      if (this.search == "") {
        this.get_data();
      } else {
        this.$api.Searchcustomer(that.search)
          .then(function (response) {
            that.items = response.data.data;
            console.log(response)
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
.rightside {
  height: 100vh;
  background-color: white !important;
}
.rightside h1 {
  margin-top: 25px;
  margin-left: 20px;
  font-weight: bold;
}
.search {
  display: inline-block;
  margin-left: 20px;
}
.customername {
  display: inline-block;
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10px 0% 0% 10px;
}
.customerproduce {
  display: inline-block;
  width: 885px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.produces{
  position: relative;
  left: 130px;
}
.producesprice{
  position: relative;
  left: 540px;
}
.producesedits{
  position: relative;
  margin-left: 870px;
}
.producesdeletes{
    position: relative;
  right: 70px;
}

</style>
