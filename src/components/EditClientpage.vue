<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
    <p class="h2 mb-4">編輯客戶資料</p>

    <b-form-group>
      <b-row>
        <b-col>
          <label for="input-total">客戶名稱</label>
          <b-form-input v-modal="total" list="total" id="input-total"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-total">公司名稱</label>
          <b-form-input v-modal="total" list="total" id="input-total"></b-form-input>
        </b-col>
      </b-row>
     

      <br>

      <b-row>
        <b-col>
          <label for="input-client-company-phone">客戶公司電話</label>
          <b-form-input v-model="Company_Phone" list="client-company-phone" id="input-client-company-phone"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-company-fax">客戶公司傳真</label>
          <b-form-input v-modal="Company_Fax" list="client-company-fax" id="input-client-company-fax"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-company-number">客戶公司統一編號</label>
          <b-form-input v-modal="Company_ID" list="client-company-number" id="input-client-company-number"></b-form-input>
        </b-col>
      </b-row>
      </b-form-group>

      <br>
      <br>
      <br>
      <br>
    
    <b-row>
      <b-col lg="2">
          <b-button variant="primary" id="save-download">繼續</b-button>
           <!-- @click='goTo()' -->
      </b-col>
      <b-col>
        <b-button variant="outline-primary" id="console">取消</b-button>
      </b-col>
    </b-row>

   </b-container>
 </div>

</template>

<script>
export default {
  name:"EditClientPage",
  // data() {
  //   return {
  //     selected: ''
  //   }
  // },
  
  // methods:{
  //   state() {
  //       return Boolean(0)
  //     },
  //   goTo(){
  //     let selected_data= {
  //     selected: this.selected
  //   };
  //     if(this.selected != '')
  //       this.$router.push({path:'/Form',query:{selected_data}});
  //     else if(this.selected == '')
  //       this.state();
  //   }
  // },
}
</script>


<style scoped lang="scss">
#bg{
  margin: 5%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding:5%
}
</style>
