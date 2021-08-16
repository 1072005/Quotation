<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
    <p class="h2 mb-4">編輯產品資料</p>
    <br>

    <b-form-group>
      <b-row>
        <b-col>
          <label for="input-total">產品規格</label>
          <b-form-input v-modal="total" list="total" id="input]-total"></b-form-input>
        </b-col>
      </b-row>
      <br>
       <b-row>
        <b-col cols="4">
          <label for="input-total">單價</label>
          <b-form-input v-modal="total" list="total" id="input]-total"></b-form-input>
        </b-col>
      </b-row>
     </b-form-group>

      <br><br><br>
    
    <b-row>
      <b-col lg="2">
          <b-button variant="primary" id="save-download" @click='goTo()'>繼續</b-button>
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
  name:"FormTypePage",
  data() {
    return {
      mainProps: { blank: true, width: 145, height: 205.07, class: 'm1' },
      selected: ''
    }
  },
  
  methods:{
    state() {
        return Boolean(0)
      },
    goTo(){
      let selected_data= {
      selected: this.selected
    };
      if(this.selected != '')
        this.$router.push({path:'/Form',query:{selected_data}});
      else if(this.selected == '')
        this.state();
    }
  },
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
