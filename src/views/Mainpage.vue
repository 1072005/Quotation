<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>建立過的表單</h1>
        <b-col md="4" class="search">
          <b-form-input
            v-model="search"
            placeholder="搜尋"
            v-on:keyup.enter="SendSearch()"
          ></b-form-input>
        </b-col>

        <b-col offset-md="3" class="selete">
          <b-form-select
            v-model="selected"
            :options="options"
            @input="postisback(selected)"
          ></b-form-select>
        </b-col>
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
            <div class="dateleft">
              <div class="innerdiv" :title="item.quotation_ID">{{ item.quotation_ID }}</div>
            </div>
            <div class="name">
              <div class="innerdiv" :title="item.company_Name">{{ item.company_Name }}</div>
            </div>
            <div class="produce">
              <div class="innerdiv"  :title="item.project_Name">{{ item.project_Name }}</div>
            </div>
            <div class="downlord" @click="downloadpdf(index)">
              <div class="mainicon">
                <font-awesome-icon
                  class="downloadicon"
                  :icon="['fas', 'download']"
                  style="color: black"
                  size="4x"
                />
              </div>
            </div>
            <div class="back" @click="$router.push('upload')">
              <div class="mainicon">
                <font-awesome-icon
                  class="uploadicon"
                  :icon="['fas', 'cloud-upload-alt']"
                  style="color: black"
                  size="4x"
                  v-if="item.isSignback!=true"
                />
                <font-awesome-icon
                  class="uploadicon"
                  :icon="['fas', 'check-circle']"
                  style="color: blue"
                  size="4x"
                  v-else
                />
              </div>
            </div>
            <div class="view">
              <div class="mainicon">
                <font-awesome-icon
                  class="eyesicon"
                  :icon="['far', 'eye']"
                  style="color: black"
                  size="4x"
                />
              </div>
            </div>
            <div class="edit" @click="$router.push('Form')">
              <div class="mainicon">
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
      isSignback: '',
      selected: 1,
      options: [
        { value: "1", text: "顯示全部" },
        { value: "2", text: "以上傳回簽檔" },
        { value: "3", text: "未上傳回簽檔" },
      ],
      search: "",
      perPage: 6,
      currentPage: 1,

      items: [],
      product: [],
      file: null,
    };
  },
  methods: {
    get_data: function () {
      this.$axios
        .get("https://d42ab6f4f646.ngrok.io/api/quotations")
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
    SendSearch() {
      let Search = this.search;
      const that = this;
      console.log(Search);
      if (Search == "") {
        this.get_data();
      } else {
        this.$axios
          .get(
            "https://d42ab6f4f646.ngrok.io/api/quotation?user_id=1&token=SMoQMA3y9mXkJ2qr8Loc&Signback=1&Search=" +
              Search
          )
          .then(function (response) {
            console.log(response);
            that.items = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    downloadpdf(index) {
      //  const that=this
      this.$axios
        .get(
          "https://d42ab6f4f646.ngrok.io/api/file/" +
            this.items[index].quotation_ID
        )
        .then(function (response) {
          window.location.href = response.config.url;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    postisback(selected) {
      const that = this;
      console.log(selected);
      if (selected == 1) {
        this.get_data();
      } else {
        this.$axios
          .get(
            "https://d42ab6f4f646.ngrok.io/api/quotations?user_id=1&token=SMoQMA3y9mXkJ2qr8Loc&Signback=" +
              selected
          )
          .then(function (response) {
            that.items = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    deletedata(index){
       this.$axios
        .delete(
          "https://d42ab6f4f646.ngrok.io/api/quotation/" +
            this.items[index].quotation_ID
        )
        .then(function (response) {
          window.location.reload();
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.get_data();
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
  margin-top: 25px;
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
  width: 282px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.innerdiv {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.inbox {
  margin-top: 20px;
  width: 120%;
}
.produce {
  display: inline-block;
  width: 420px;
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
.mainicon {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  margin-top: 15px;
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
