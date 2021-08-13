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
          <b-col class="inbox" id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
            v-for="(item,index)  in items" :key="item.id"
            >
            <div class="dateleft" v-bind="items">{{items[index].id}}</div>
            <div class="name">{{items[index].first_name}}</div>
            <div class="produce">
              <b-dropdown id="dropdown-offset" offset="5" :text="items[index].last_name">
                <b-dropdown-item>Action A</b-dropdown-item>
                <b-dropdown-item>Action B</b-dropdown-item>
              </b-dropdown>
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
          ></b-pagination>
        </b-col>

        <div class="overflow-auto">

          <b-table
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
          ></b-table>
        </div>
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
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
    };
  },
   computed: {
      rows() {
        return this.items.length
      }
      
    }
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
</style>
