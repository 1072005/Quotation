<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>客戶資料</h1>
        <b-col md="4" class="search">
          <b-form-input placeholder="搜尋"></b-form-input>
        </b-col>

        <b-col md="9" class="main">
          <b-col
            class="inbox"
            id="my-table"
            small
            v-for="(item,index) in items.slice(
              (this.currentPage - 1) * this.perPage,
              this.currentPage * this.perPage
            )"
            :key="item.id"
          >
            <div class="customername">
              <div class="innerdiv" :title="item.customer_Name">{{ item.customer_Name }}</div>
            </div>
            <div class="customerproduce">
              <div class="innerdiv" :title="item.company_Name">
              {{ item.company_Name }}
              </div>
            </div>

            <div class="edit">
              <div class="mainicon" >
              <font-awesome-icon
                class="penicon"
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
      items: [
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        {customer_Name:'asdasdadadasd',company_Name:'dsaadsada'},
        
        
      ],
    };
  },
  mounted() {
    //  const that=this
    this.$axios
      .get("https://d42ab6f4f646.ngrok.io/api/customer1")
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
  methods:{
        deletedata(index){
          console.log(this.items[index].customer_ID)
       this.$axios
        .delete(
          "https://d42ab6f4f646.ngrok.io/api/customer/" +
            this.items[index].customer_ID
        )
        .then(function (response) {
          window.location.reload();
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
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
  width: 344px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10px 0% 0% 10px;
}
.customerproduce {
  display: inline-block;
  width: 837px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
</style>
