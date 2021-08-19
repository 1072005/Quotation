<template>
  <div id="bg">
    <b-container fluid class="bv-example-row">
      <p class="h1 mb-4" style="font-weight: bold">追蹤資料修改</p>
      <b-row class="outname">
        <b-col cols="2">20210501</b-col>
        <b-col cols="2">專案名稱</b-col>
      </b-row>
      <b-form-group>
        <b-row class="editinner">
          <b-col class="edittrack">
            <label for="input-total">客戶名稱</label>
            <b-form-select
              v-model="customerselected"
              :options="status"
            ></b-form-select>
          </b-col>
          <b-col class="edittrack">
            <label for="input-total">公司名稱</label>
            <b-form-select
              v-model="companyselected"
              :options="pay"
            ></b-form-select>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col ><div class="bill">發票上傳</div>
            <b-form-file
              v-model="file"
              class="mt-3"
              plain
              @change="fileChange"
            ></b-form-file
          ></b-col>
        </b-row>
        <b-row>
          <b-col class="editremark">
            <label for="input-client-company-phone">備註</label>
            <b-form-textarea
              id="textarea-rows"
              placeholder="備註"
              v-model="text"
              rows="8"
            ></b-form-textarea>
          </b-col>
        </b-row>

      </b-form-group>

      <br />
      <br />
      <br />
      <br />

      <b-row>
        <b-col lg="2">
          <b-button variant="primary" id="save-download">完成</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary" id="console" @click="$router.push('trackpage')">取消</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditClientPage",
  data() {
    return {
      customerselected: "1",
      companyselected: "1",
      items: [],
      status: [
        { value: "1", text: "全部" },
        { value: "2", text: "待追蹤" },
        { value: "3", text: "進行中" },
        { value: "4", text: "完成" },
        { value: "5", text: "其他" },
      ],
      pay: [
        { value: "1", text: "顯示全部" },
        { value: "2", text: "未付款" },
        { value: "3", text: "已付款" },
      ],
    };
  },

  methods: {},
};
</script>


<style scoped lang="scss">
#bg {
  margin: 5%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 5%;
}
.edittrack select {
  width: 100%;
  height: 50px;
  border: solid 1px black;
  border-radius: 5px;
  font-size: 1.3rem;
}
.outname {
  font-size: 1.5rem;
  font-weight: bold;
}
.editinner {
  margin-top: 20px;
}
.bill{
    display: inline-block;
    font-weight: bold;
    margin-right: 50px;
    font-size: 1.8rem;
}
.editremark{
    margin-top: 20px;
}
</style>
