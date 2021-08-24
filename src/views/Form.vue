<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
    <p class="h2 text-center mb-4" v-text="title">{{title}}</p>
    <b-form id="main" autocomplete="off">
       <b-row>
        <b-col>
          <label for="input-project-name">專案名稱</label>
          <b-form-input 
            v-model="Quotation.Project_Name" 
            :state="State.Project_name"
            list="project-name"
            id="input-project-name"></b-form-input> 
        </b-col>
      </b-row>
      
            <!-- @blur.native="_state()" -->
      <br>
      <b-row>
        <b-col>
          <label for="input-client-name">客戶姓名</label>
          <b-form-input 
            v-model="Customer.Customer_Name" 
             :state="State.Customer_Name"
             list="client-name" 
             id="input_client_name"
             @change="searchCustomer()"></b-form-input> 
          <datalist id="client-name">
            <!--eslint-disable-next-line-->
            <option v-for="item in Customers">{{ item.customer_Name }}</option>
          </datalist>
        </b-col>
        <b-col>
          <label for="input-client-company">客戶公司</label>
          <b-form-input 
            v-model="Customer.Company_Name" 
            :state="State.Company_Name"
            list="client-company" 
            id="input-client-company"
            @change="searchCompany()"></b-form-input> 
          <datalist id="client-company"> 
            <!--eslint-disable-next-line-->
            <option v-for="(item,index) in Customers">{{ item.company_Name }}</option>
          </datalist>
        </b-col>
      </b-row>

      <br>

      <b-row>
        <b-col>
          <label for="input-client-company-phone">客戶公司電話</label>
          <b-form-input
            v-model="Customer.Company_Phone"
            :state="State.Company_Phone"
            list="client-company-phone" 
            id="input-client-company-phone"
            @keyup.native="btKeyUp2"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-company-fax">客戶公司傳真</label>
          <b-form-input 
            v-model="Customer.Company_Fax" 
            list="client-company-fax" 
            id="input-client-company-fax"
            @keyup.native="btKeyUp2"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-Customer-ID">客戶公司統一編號</label>
          <b-form-input 
            v-model="Customer.Customer_ID" 
            :type="'number'"
            :state="Customer_ID_State"
            list="client-Customer-ID" 
            id="input-client-Customer-ID"
            aria-describedby="input-live-feedback"
            @keyup.native="btKeyUp"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">請輸入完整之統一編號，共八位數</b-form-invalid-feedback>
        </b-col>
      </b-row>

      <br>

      <b-row>
        <b-col>
          <label for="input-product-format">產品規格</label>
          <b-form-input 
            v-model="Product.Product_Name" 
            list="product-format" 
            id="input-product-format"
            @change="searchProduct()"></b-form-input>
          <datalist id="product-format">
            <!--eslint-disable-next-line-->
            <option v-for="item in allProducts">{{ item.product_Name }}</option>
          </datalist>
        </b-col>
        <b-col>
          <label for="input-product-detail">細項</label>
          <b-form-textarea  
            v-model="Product.Product_Detail"
            id="textarea-auto-height"
            ysize="sm"
            rows="1"
            max-rows="1"
          ></b-form-textarea>
          <!-- <b-form-input v-model="Product.Product_Detail" list="product-detail" id="input-product-detail"></b-form-input> -->
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="input-product-amount">數量</label>
          <b-form-input 
            v-model="Product.Amount" 
            :type="'number'"
            min="1"
            list="product-amount" 
            id="input-product-amount"  
            @change="changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-price">單價</label>
          <b-form-input 
            v-model="Product.Price" 
            :type="'number'"
            min="0"
            list="product-price" 
            id="input-product-price" 
            @change="changePrice(),changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-discount-price">特價</label>
          <b-form-input 
            v-model="Product.Discount" 
            :type="'number'"
            min="0"
            list="product-discount-price" 
            id="input-product-discount-price" 
            @change="changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-subtotal">小計</label>
          <b-form-input 
            v-model="Product.Subtotal" 
            :type="'number'"
            min="0"
            list="product-subtotal" 
            id="input-product-subtotal"></b-form-input>
        </b-col>
        <b-col>
          <b-button variant="outline-primary" id="plus" @click="plusitem()">增加</b-button>
        </b-col>
      </b-row>

      <br>
      <div>
      <b-row>
        <b-table :items="items" :fields="fields" :bordered="bordered" align="center" ref="table">
          
          <template v-slot:cell(delete)="row">
            <b-button size="sm" @click="deleterowitem(row.item)" class="mr-2">
              刪除
            </b-button>
          </template>
        </b-table>
      </b-row>
      </div>
      <br>

      <b-row>
        <b-col>
          <label for="input-subtotal">總計</label>
          <b-form-input 
            v-model="Stotal" 
            :type="'number'" 
            min="0"
            id="input-subtotal"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-tax-rate">稅額</label>
          <b-form-input 
            v-model="Rtotal" 
            :type="'number'"
            min="0"
            id="input-tax-rate"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-total">總額(含稅)</label>
          <b-form-input 
            v-model="Quotation.total"
            :type="'number'"
            min="0"
            id="input-total"></b-form-input>
        </b-col>
      </b-row>
      
      <br>

      <b-row>
        <b-col>
          <label for="input-remark">備註</label>
          <b-form-input 
            v-model="Remark1" 
            :state="Remark1_state"
            id="input-remark-1" 
            required placeholder="硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)"
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark2" 
            :state="Remark2_state"
            id="input-remark-2" 
            required placeholder="如有其他增加項目則另外報價。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark3" 
            :state="Remark3_state"
            id="input-remark-3" 
            required placeholder="出貨地(FOB) : 台灣。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark4" 
            :state="Remark4_state"
            id="input-remark-4" 
            required placeholder="款項未付清前 , 產品所有權屬於麥威科技所有。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark5" 
            :state="Remark5_state"
            id="input-remark-5" 
            required placeholder="下單後訂單不可取消。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark6" 
            :state="Remark6_state" 
            id="input-remark-6" 
            required placeholder="交期與付款條件:下單後一週,TT。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark7" 
            :state="Remark7_state"
            id="input-remark-7" 
            required placeholder="15天內完成維修。" 
            @change="Remark()"></b-form-input>
        </b-col>
      </b-row>
    </b-form>

    <br>
    <b-row>
      <b-col>
        <b-button variant="outline-primary" id="review" @click='goTo_review()'>Review</b-button>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col lg="2">
        <b-button variant="primary" id="save-download" @click="postform()" >儲存並下載</b-button>
      </b-col>
      <b-col>
        <b-button variant="outline-primary" id="console" @click="$router.push('Mainpage')">取消</b-button>
      </b-col>
    </b-row>
   </b-container>
 </div>

</template>

<script>
import download from "downloadjs";
export default{
  data(){
    return{
      title: "填寫新表單",
      fields: 
      [ 
        { key: 'Product_Name', label: '產品規格' },
        { key: 'Product_Detail', label: '產品細項' },
        { key: 'Amount', label: '數量' },
        { key: 'Price', label: '單價' },
        { key: 'Discount', label: '特價' },
        { key: 'Subtotal', label: '小計' },
        { key: 'delete', lable: '刪除' }
      ],
      items: [],
      bordered: true,

      user_id: 1,
      token: "SMoQMA3y9mXkJ2qr8Loc",

      Customers : [], //所有的客戶資料
      //要傳出去的客戶資料
      Customer: {
        Customer_Name: '',
        Company_Name: '',
        Company_Phone: '',
        Company_Fax: '',
        Customer_ID: ''
      },
        
      //所有的產品資料
      allProducts: [],
      //input放置的資料
      Product: {
        Product_ID: 0,
        Product_Name: "",
        Product_Detail: "",
        Amount: 1,
        Price: 0,
        Discount: 0,
        Subtotal: 0
      },
      //要傳出去的所有產品資料
      Products: [],

      Quotation: {
        
        Project_Name: '',
        Project_Owner: "account",
        Remark: '', //Remark1~7
        total: 0,
      },
      
      Stotal: 0,
      Rtotal: 0,
        
      Remark1: '硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)',
      Remark2: '如有其他增加項目則另外報價。',
      Remark3: '出貨地(FOB) : 台灣。',
      Remark4: '款項未付清前 , 產品所有權屬於麥威科技所有。',
      Remark5: '下單後訂單不可取消。',
      Remark6: '交期與付款條件:下單後一週,TT。',
      Remark7: '15天內完成維修。',

      State:{
        Project_name: null,
        Customer_Name:null,
      }        
    }
  },

  mounted(){
    this.getCustomers();
    this.getallProducts();
    this.Remark();
  },
  
  computed:{

    Customer_ID_State(){
      if(this.Customer.Customer_ID.length == 0)
        return null;
      else
        return this.Customer.Customer_ID.length == 8 ? null : false
    },
    
    Remark1_state(){
      return this.Remark1.length == 0 ? false : null
    },
    Remark2_state(){
      return this.Remark2.length == 0 ? false : null
    },
    Remark3_state(){
      return this.Remark3.length == 0 ? false : null
    },
    Remark4_state(){
      return this.Remark4.length == 0 ? false : null
    },
    Remark5_state(){
      return this.Remark5.length == 0 ? false : null
    },
    Remark6_state(){
      return this.Remark6.length == 0 ? false : null
    },
    Remark7_state(){
      return this.Remark7.length == 0 ? false : null
    },
  },

  methods:{
    
    _state(data){
      if(data == 1) {
        //Project_Name
        if(this.Quotation.Project_Name.length == 0)
          this.State.Project_name = false;
        else if(this.Quotation.Project_Name.length != 0)
          this.State.Project_name = null;
      }
      else if(data == 2){
        //Customer_Name
        if(this.Customer.Customer_Name.length == 0)
          this.State.Customer_Name = false;
        else if(this.Customer.Customer_Name.length != 0)
          this.State.Customer_Name = null;
      }
      
      //Company_Name
      if(this.Customer.Company_Name.length == 0)
        this.State.Company_Name = false;
      else if(this.Customer.Company_Name.length != 0)
        this.State.Company_Name = null;
      //Company_Phone
      if(this.Customer.Company_Phone.length == 0)
        this.State.Company_Phone = false;
      else if(this.Customer.Company_Phone.length != 0)
        this.State.Company_Phone = null;
      //Company_Fax
      if(this.Customer.Company_Fax.length == 0)
        this.State.Company_Fax = false;
      else if(this.Customer.Company_Fax.length != 0)
        this.State.Company_Fax = null;

     },
    

    getForm(){
      const that = this;
      let id;
      id = window.localStorage.getItem("editformID");
      if(id != null){
        that.title = "編輯表單"
        this.$api
        .GetFormID(id)
        .then(function (response) {
          console.log(response);

          that.Customer.Customer_Name = response.data.data.customer.customer_Name;
          that.Customer.Company_Name = response.data.data.customer.company_Name;
          that.Customer.Company_Phone = response.data.data.customer.company_Phone;
          that.Customer.Customer_ID = response.data.data.customer.customer_ID;
          that.Customer.Customer_ID = response.data.data.customer.customer_ID;

          for(var i=0;i<response.data.data.products.length; i++){
            that.Product.Product_ID = response.data.data.products[i].product_ID;
            that.Product.Product_Name = response.data.data.products[i].product_Name;
            that.Product.Product_Detail = response.data.data.products[i].product_Detail;
            that.Product.Price = response.data.data.products[i].price;
            that.Product.Discount = response.data.data.products[i].discount;
            that.Product.Subtotal = response.data.data.products[i].subtotal;
            
            that.Products[i] = that.Product;
            that.plusitem();
          }

          that.Quotation.Project_Name = response.data.data.quotation.project_Name;
        
          that.Remark1 = response.data.data.quotation.remark[0];
          that.Remark2 = response.data.data.quotation.remark[1];
          that.Remark3 = response.data.data.quotation.remark[2];
          that.Remark4 = response.data.data.quotation.remark[3];
          that.Remark5 = response.data.data.quotation.remark[4];
          that.Remark6 = response.data.data.quotation.remark[5];
          that.Remark7 = response.data.data.quotation.remark[6];        
        })
        .catch(function (error) {
          console.log(error);
        });
      }      
    },
  
    btKeyUp(e) {
      e.target.value = e.target.value.replace(
        /[`~!@#$%^&*()_\\+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
        ""
      );
    },
    btKeyUp2(e) {
      e.target.value = e.target.value.replace(
        /[`~!@#$%^&*()_\\+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——+={}|《》？：“”【】、；‘’，。、]/g,
        ""
      );
    },
    
    getCustomers(){
      const that =this;
      this.$axios.get('https://1ace-220-135-155-67.ngrok.io/api/customers')
      .then(function (response) {
        // console.log(response);
        that.Customers = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    searchCustomer(){
      const that = this;
      let search = that.Customer.Customer_Name;
      for(var i=0;i<that.Customers.length;i++){
        if(that.Customers[i].customer_Name == search){
          this.$api
          .SearchCustomerName(search)
          .then(function (response) {
            that.Customer.Company_Name = response.data.data[0].company_Name;
            that.Customer.Company_Phone = response.data.data[0].company_Phone;
            that.Customer.Company_Fax = response.data.data[0].company_Fax;
            that.Customer.Customer_ID = response.data.data[0].customer_ID;
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }      
    },
    searchCompany(){
      const that = this;
      let search = that.Customer.Company_Name;
      for(var i=0;i<that.Customers.length;i++){
        if(that.Customers[i].company_Name == search){
          this.$api
          .SearchCompany(search)
          .then(function (response) {
            that.Customer.Company_Phone = response.data.data[0].company_Phone;
            that.Customer.Company_Fax = response.data.data[0].company_Fax;
            that.Customer.Customer_ID = response.data.data[0].customer_ID;
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }      
    },   

    getallProducts(){
      const that =this;
      this.$axios.get('https://1ace-220-135-155-67.ngrok.io/api/products')
      .then(function (response) {        
        that.allProducts = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      }); 
    },

    changePrice(){
      this.Product.Discount=this.Product.Price;
    },
    changeSubtotal(){
      this.Product.Subtotal = this.Product.Discount*this.Product.Amount;
    },
    searchProduct(){
      const that = this;
      let search = that.Product.Product_Name;
      let searchPrice;
      for(var i=0;i<that.allProducts.length;i++){
        if(that.allProducts[i].product_Name == search){
          this.$api
          .Searchproduce(search)
          .then(function (response) {        
            searchPrice = response.data.data[0].price;
            that.Product.Price = searchPrice;
            that.changePrice();
            that.changeSubtotal();
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }     
      
    },
    
    plusitem(){

      let newitem = {
        Product_ID: this.Product.Product_ID,
        Product_Name: this.Product.Product_Name,
        Product_Detail: this.Product.Product_Detail,
        Amount: this.Product.Amount,
        Price: this.Product.Price,
        Discount: this.Product.Discount,
        Subtotal: this.Product.Subtotal,
      }
      let B=0;
      if(newitem.Product_Name == "" || newitem.Amount == "" || newitem.Price == "" ||
         newitem.Discount == "" || newitem.Subtotal == ""){
           alert("產品表格需填寫完整！");
      }
      else if(this.items.length > 0){
        for(var i=0;i<this.items.length;i++){
          if(newitem.Product_Name == this.items[i].Product_Name){
            alert("產品表格中已有相同產品規格，若要修改請刪除並重新填寫！");
            B=1;
            break;
          }
          console.log("i="+i);
        }
        if(B==0){
          this.items[this.items.length] = newitem;
          this.$refs.table.refresh();
          this.setstotal();
        }
        B=0;
      }
      else if(this.items.length == 0){
        this.items[this.items.length] = newitem;
        this.$refs.table.refresh();
        this.setstotal();
      }
    },

    deleterowitem(data){
      for(var i=0;i<this.items.length;i++){
        if(data.Product_Name == this.items[i].Product_Name){
          delete this.items[i];
        }
      }
      this.items.length -= 1;
      this.$refs.table.refresh();
      this.setstotal();
    },

    setstotal(){
      let stotal = 0;
      if(this.items.length > -1){
        for(var i=0;i<this.items.length;i++){
          stotal += this.items[i].Subtotal;
        }
      }
      this.Stotal = stotal;
      this.Rtotal = stotal*0.05;
      this.Rtotal = this.Rtotal.toFixed(2);
      this.Quotation.total = this.Stotal + parseInt(this.Rtotal);
    },

    
    Remark(){
      this.Quotation.Remark = this.Remark1 + "\n" + this.Remark2 + "\n" + this.Remark3 + "\n" + 
                  this.Remark4 + "\n" + this.Remark5 + "\n" + this.Remark6 + "\n" + this.Remark7;
    },


    goTo_review(){

      let form_data= {
        user_id: 1,
        Customer: {
          Customer_Name: this.Customer.Customer_Name,
          Company_Name: this.Customer.Company_Name,
          Company_Phone: this.Customer.Company_Phone,
          Company_Fax: this.Customer.Company_Fax,
          Customer_ID: this.Customer.Customer_ID
        },
        Products: this.items,
        Quotation: {
          total: this.Quotation.total
        },

        Remark1: this.Remark1,
        Remark2: this.Remark2,
        Remark3: this.Remark3,
        Remark4: this.Remark4,
        Remark5: this.Remark5,
        Remark6: this.Remark6,
        Remark7: this.Remark7,

        Stotal: this.Stotal,//小計
        Rtotal: this.Rtotal,//稅額
        i: this.items.length,
      };
      
      var route = this.$router.resolve({path:'/review'});
      sessionStorage.setItem("user_id",form_data.user_id);
      sessionStorage.setItem("Customer_Name",form_data.Customer.Customer_Name);
      sessionStorage.setItem("Company_Name",form_data.Customer.Company_Name);
      sessionStorage.setItem("Company_Phone",form_data.Customer.Company_Phone);
      sessionStorage.setItem("Company_Fax",form_data.Customer.Company_Fax);
      sessionStorage.setItem("Customer_ID",form_data.Customer.Customer_ID);

      for(var j=0; j<form_data.i; j++){
        sessionStorage.setItem("Product_Name"+j ,form_data.Products[j].Product_Name);
        sessionStorage.setItem("Product_Detail"+j ,form_data.Products[j].Product_Detail);
        sessionStorage.setItem("Amount"+j ,form_data.Products[j].Amount);
        sessionStorage.setItem("Price"+j ,form_data.Products[j].Price);
        sessionStorage.setItem("Discount"+j ,form_data.Products[j].Discount);
        sessionStorage.setItem("Subtotal"+j ,form_data.Products[j].Subtotal);
      }
      
      sessionStorage.setItem("Remark1",form_data.Remark1);
      sessionStorage.setItem("Remark2",form_data.Remark2);
      sessionStorage.setItem("Remark3",form_data.Remark3);
      sessionStorage.setItem("Remark4",form_data.Remark4);
      sessionStorage.setItem("Remark5",form_data.Remark5);
      sessionStorage.setItem("Remark6",form_data.Remark6);
      sessionStorage.setItem("Remark7",form_data.Remark7);

      sessionStorage.setItem("total",form_data.Quotation.total);

      sessionStorage.setItem("Stotal",form_data.Stotal);
      sessionStorage.setItem("Rtotal",form_data.Rtotal);
      sessionStorage.setItem("i",form_data.i);

      window.open(route.href,'_blank');
    },


    postform(){
      const that = this;
      that.Remark();
      let form={
        Customer: {
          Customer_Name: that.Customer.Customer_Name,
          Company_Name: that.Customer.Company_Name,
          Company_Phone: that.Customer.Company_Phone,
          Company_Fax: that.Customer.Company_Fax,
          Customer_ID: that.Customer.Customer_ID
        },
        Products: that.items,
        Quotation: {
          Project_Name: that.Quotation.Project_Name,
          Project_Owner: that.user_id,
          Remark: that.Quotation.Remark,
          total: that.Stotal,
          total_withTax: that.Quotation.total
        }
      };      
      // console.log(form);
      if(form.Customer.Customer_Name == "" || form.Customer.Company_Name == "" || form.Customer.Company_Phone == "" ||
         form.Customer.Company_Fax == "" || form.Customer.Customer_ID == "" || that.items.length == 0||
         that.Quotation.Project_Name == "" || that.Remark1 == "" || that.Remark2 == "" || that.Remark3 == "" || 
         that.Remark4 == "" || that.Remark5 == "" || that.Remark6 == "" || that.Remark7 == ""){
          alert("表單尚未填寫完整！");          
      }

      else{
        this.$axios.post('http://1c7884ba3f78.ngrok.io/api/quotation',form)
        .then(function (response) {
          console.log(response);
          const content = response.headers["content-type"];
          download(response.data, content);
          that.$router.push('Mainpage');
        })
        .catch(function (error) {
          console.log(error);
        }); 
        console.log(form);
      }
    },
    
  }
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
#plus{
  margin:23px
}
</style>
