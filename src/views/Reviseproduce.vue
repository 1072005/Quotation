<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>產品資料</h1>
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
            <div class="Specification">{{ item.produce }}</div>
            <div class="producemoney">
              {{ item.money }}

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
        {
          produce: '產品規格',
          money: "產品單價",
          
        },
        { produce: '產品規格', money: "產品單價",  },
        { produce: '產品規格', money: "產品單價",  },
        { produce: '產品規格', money: "產品單價",  },


      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
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
  margin-top: 3%;
  margin-left: 20px;
  font-weight: bold;
}
.search {
  display: inline-block;
  margin-left: 20px;
}
.Specification {
  display: inline-block;
  width: 54%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10px 0% 0% 10px;
}
.producemoney {
  display: inline-block;
  width: 30%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
</style>
