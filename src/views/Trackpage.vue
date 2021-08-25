<template>
  <b-container fluid class="bv-example-row">
    <Sidebar></Sidebar>
    <b-row>
      <b-col md="10" offset-md="2" class="rightside">
        <h1>追蹤表單</h1>
        <b-col md="4" class="search">
          <b-form-input
            placeholder="搜尋"
            v-model="search"
            v-on:keyup.enter="SendSearch()"
          ></b-form-input>
        </b-col>
        <b-col offset-md="3" class="selete">
          <b-form-select
            v-model="trackselected"
            :options="trackoptions"
            @input="postisback()"
          ></b-form-select>
        </b-col>
        <b-col offset-md="1" class="selete">
          <b-form-select
            v-model="payselected"
            :options="payoptions"
            @input="postisback()"
          ></b-form-select>
        </b-col>
        <b-row class="upper">
          <b-col class="tracks">進度</b-col>
          <b-col class="quotationsID">報價單編號</b-col>
          <b-col class="trackprojects">專案名稱</b-col>
          <b-col class="trackremarks">備註</b-col>
          <b-col class="trackedits">付款狀態</b-col>
          <b-col class="trackdeletes">編輯</b-col>
        </b-row>
        <hr />
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
            <div class="track" v-bind:class="{ voidcolor: check(item.status) }">
              <div class="innerdiv" :title="item.isSignback">
                {{ item.status }}
              </div>
            </div>
            <div
              class="trackdata"
              v-bind:class="{ voidcolor: check(item.status) }"
            >
              <div class="innerdiv">{{ item.quotation_ID }}</div>
            </div>

            <div
              class="projectname"
              v-bind:class="{ voidcolor: check(item.status) }"
            >
              <div class="innerdiv" :title="item.project_Name">
                {{ item.project_Name }}
              </div>
            </div>

            <div
              class="remark"
              v-bind:class="{ voidcolor: check(item.status) }"
            >
              <div class="innerdiv" :title="item.remark">
                {{ item.project_Remark }}
              </div>
            </div>
            <!-- <div class="remark"> 發票欄位
              <div class="innerdiv" :title="item.remark">
                {{ item.bill}}
              </div>
            </div> -->
            <div class="back" v-bind:class="{ voidcolor: check(item.status) }">
              <div class="mainicon">
                <font-awesome-icon
                  class="moneyicon"
                  :icon="['fas', 'dollar-sign']"
                  style="color: black"
                  size="4x"
                  v-if="item.payment_Status != true"
                />

                <font-awesome-icon
                  class="moneyicon"
                  :icon="['fas', 'check-circle']"
                  style="color: blue"
                  size="4x"
                  v-else
                />
              </div>
            </div>
            <div
              class="delete"
              v-bind:class="{ voidcolor: check(item.status) }"
            >
              <div class="mainicon">
                <font-awesome-icon
                  class="uploadicon"
                  :icon="['fas', 'pen']"
                  style="color: black"
                  size="4x"
                  @click="storedata(item.quotation_ID, item.project_Name)"
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
      trackselected: 1,
      payselected: 1,
      payment_Status: "",
      search: "",
      isActive: "",
      noactive: "false",
      trackoptions: [
        { value: "1", text: "顯示全部" },
        { value: "2", text: "待追蹤" },
        { value: "3", text: "進行中" },
        { value: "4", text: "完成" },
        { value: "5", text: "作廢" },
        { value: "6", text: "其他" },
      ],
      payoptions: [
        { value: "1", text: "顯示全部" },
        { value: "2", text: "未付款" },
        { value: "3", text: "已付款" },
      ],
      items: [],
      file: null,
    };
  },
  methods: {
    get_data: function () {
      this.$api
        .Gettrack()
        .then((response) => {
          this.items = response.data.data;
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].project_Remark == "") {
              this.items[i].project_Remark = "備註";
            }
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
    postisback() {
      const that = this;
      if (this.trackselected == 1 && this.payselected == 1) {
        this.get_data();
      } else {
        this.$api
          .Getselect(this.trackselected, this.payselected)
          .then(function (response) {
            that.items = response.data.data;
            for (var i = 0; i < that.items.length; i++) {
              if (that.items[i].project_Remark == "") {
                that.items[i].project_Remark = "備註";
              }
            }
            console.log(response);
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
        this.$api
          .Getsearch(this.trackselected, this.payselected, this.search)
          .then(function (response) {
            console.log(response);
            that.items = response.data.data;
            for (var i = 0; i < that.items.length; i++) {
              if (that.items[i].project_Remark == "") {
                that.items[i].project_Remark = "備註";
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    storedata(quotation_id, project_name) {
      const info = {
        id: quotation_id,
        project: project_name,
      };
      localStorage.setItem("trackdata", JSON.stringify(info));
      this.$router.push("edittrackpage");
    },
    check(status) {
      if (status == "作廢") {
        return true;
      } else {
        return false;
      }
    },
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
.remark {
  display: inline-block;
  width: 600px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}

.track {
  display: inline-block;
  width: 8%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-radius: 10% 0% 0% 10%;
}
.trackdata {
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
  width: 320px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: solid 1px black;
  border-left: none;
}
.voidcolor {
  background-color: #bebebe;
}
.moneyicon {
  padding-top: 25px;
}
.tracks {
  position: relative;
  left: 55px;
}
.quotationsID {
  position: relative;
  left: -95px;
}
.trackprojects {
  position: relative;
  left: -105px;
}
.trackremarks {
  position: relative;
  left: 130px;
}
.trackedits {
  position: relative;
  left: 220px;
}
.trackdeletes {
  position: relative;
  margin-left: 100px;
}
</style>
