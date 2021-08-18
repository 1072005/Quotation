<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
    <p class="h2 text-center mb-4">填寫新表單</p>
    <b-form id="main">
       <b-row>
        <b-col>
          <label for="input-project-name">專案名稱</label>
          <b-form-input v-model="Quotation.Project_Name" type="text" list="project-name" id="input-project-name"></b-form-input> 
        </b-col>
      </b-row>

      <br>
      <b-row>
        <b-col>
          <label for="input-client-name">客戶名字</label>
          <b-form-input 
            v-model="Customer.Customer_Name" 
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
          <b-form-input v-model="Customer.Company_Phone" list="client-company-phone" id="input-client-company-phone"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-company-fax">客戶公司傳真</label>
          <b-form-input v-model="Customer.Company_Fax" list="client-company-fax" id="input-client-company-fax"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-client-Customer-ID">客戶公司統一編號</label>
          <b-form-input v-model="Customer.Customer_ID" list="client-Customer-ID" id="input-client-Customer-ID"></b-form-input>
        </b-col>
      </b-row>

      <br>

      <b-row>
        <b-col>
          <label for="input-product-format">產品規格</label>
          <b-form-input 
            v-model="Product.Name" 
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
          <b-form-input v-model="Product.Detail" list="product-detail" id="input-product-detail"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="input-product-amount">數量</label>
          <b-form-input 
            v-model="Product.Amount" 
            list="product-amount" 
            id="input-product-amount"  
            @change="changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-price">單價</label>
          <b-form-input 
            v-model="Product.Price" 
            list="product-price" 
            id="input-product-price" 
            @change="changePrice(),changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-discount-price">特價</label>
          <b-form-input v-model="Product.Discount" list="product-discount-price" id="input-product-discount-price" @change="changeSubtotal()"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-subtotal">小計</label>
          <b-form-input v-model="Product.Subtotal" list="product-subtotal" id="input-product-subtotal"></b-form-input>
        </b-col>
        <b-col>
          <b-button variant="outline-primary" id="plus" @click="plusproduct(data)">增加</b-button>
        </b-col>
      </b-row>

      <br>
      <b-row>
          <!-- <b-table :items="plusproduct(data.items)" :fields="plusproduct(data.items)" :columns="plusproduct(data.items)" align="center"></b-table> -->
      </b-row>
      <br>

      <b-row>
        <b-col>
          <label for="input-subtotal">總計</label>
          <b-form-input list="client-subtotal" id="input-subtotal"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-tax-rate">稅額</label>
          <b-form-input list="tax-rate" id="input-tax-rate"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-total">總額(含稅)</label>
          <b-form-input v-model="Quotation.total" list="total" id="input-total"></b-form-input>
        </b-col>
      </b-row>
      
      <br>

      <b-row>
        <b-col>
          <label for="input-remark">備註</label>
          <b-form-input 
            v-model="Remark1" 
            list="input-remark" 
            id="input-remark-1" 
            required placeholder="硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)"
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark2" list="input-remark" 
            id="input-remark-2" 
            required placeholder="如有其他增加項目則另外報價。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark3" 
            list="input-remark" 
            id="input-remark-3" 
            required placeholder="出貨地(FOB) : 台灣。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark4" 
            list="input-remark" 
            id="input-remark-4" 
            required placeholder="款項未付清前 , 產品所有權屬於麥威科技所有。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark5" 
            list="input-remark" 
            id="input-remark-5" 
            required placeholder="下單後訂單不可取消。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark6" 
            list="input-remark" 
            id="input-remark-6" 
            required placeholder="交期與付款條件:下單後一週,TT。" 
            @change="Remark()"></b-form-input>
          <br>
          <b-form-input 
            v-model="Remark7" 
            list="input-remark" 
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
export default{
  name: "Formpage",
  el: "#main",
  data(){
    return{

      fields: [ 
                { key: 'ID', label: '品名編號' },
                { key: 'format', label: '產品規格' },
                { key: 'amount', label: '數量' },
                { key: 'unit_price', label: '單價' },
                { key: 'discount_price', label: '特價(未稅)' },
                { key: 'subtotal', label: '小計' },
                { key: 'delete', label: '刪除' }
              ],
      items: [
          { ID: 1, 
            format: this.format + this.details,
            amount: this.amount,
            unit_price: this.unit_price,
            discount_price: this.discount_price,
            subtotal: this.discount * this.amount,
            delete: "刪除"
          },
        ],
      
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Customers : [], //所有的客戶資料

        //要傳出去的客戶資料
        Customer: {
          Customer_Name: '',
          Company_Name: '',
          Company_Phone: '',
          Company_Fax: '',
          Company_ID: ''
        },
        
        //所有的產品資料
        allProducts: [],

        //input放置的資料
        Product: {
          Product_ID: -1,
          Product_Name:"",
          Product_Detail:"",
          Amount: 1,
          Price: 0,
          Discount: 0,
          Subtotal: 0
        },
        //要傳出去的所有產品資料
        Products: [
          {
            Product_ID: -1,
            Product_Name:"",
            Product_Detail:"",
            Amount: 1,
            Price: 0,
            Discount: 0,
            Subtotal: 0
          },
        ],
        Quotation: {
          Project_Name: '',
          Project_Owner: "account",
          Remark: '', //Remark1~7
          total: 0
        },

        
        Remark1: '硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)',
        Remark2: '如有其他增加項目則另外報價。',
        Remark3: '出貨地(FOB) : 台灣。',
        Remark4: '款項未付清前 , 產品所有權屬於麥威科技所有。',
        Remark5: '下單後訂單不可取消。',
        Remark6: '交期與付款條件:下單後一週,TT。',
        Remark7: '15天內完成維修。',
        
    }
  },

  mounted(){
    this.getCustomers();
    this.getallProducts();
  },

  methods:{
    
    getCustomers(){
      const that =this;
      this.$axios.get('https://8dddbfe2067c.ngrok.io/api/customers')
      .then(function (response) {
        // console.log(response);
        that.Customers = response.data.data;
        // console.log(that.Customer);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    },

    searchCustomer(){
      let search = this.Customer.Customer_Name;
      for(var i=0; i<this.Customers.length; i++)
      {
        // console.log(that.Customers[i]);
        if(this.Customers[i].customer_Name == search)
        {
          console.log(this.Customers[i]);
          // this.Customer.Customer_Name = this.Customers[i].customer_Name;
          this.Customer.Company_Name = this.Customers[i].company_Name;
          this.Customer.Company_Phone = this.Customers[i].company_Phone;
          this.Customer.Company_Fax = this.Customers[i].company_Fax;
          this.Customer.Customer_ID = this.Customers[i].customer_ID;
        }
      }
    },
    searchCompany(){
      let search = this.Customer.Company_Name;
      for(var i=0; i<this.Customers.length; i++)
      {
        // console.log(that.Customers[i]);
        if(this.Customers[i].company_Name == search)
        {
          console.log(this.Customers[i]);
          // this.Customer.Customer_Name = this.Customers[i].customer_Name;
          // this.Customer.Company_Name = this.Customers[i].company_Name;
          this.Customer.Company_Phone = this.Customers[i].company_Phone;
          this.Customer.Company_Fax = this.Customers[i].company_Fax;
          this.Customer.Customer_ID = this.Customers[i].customer_ID;
        }
      }
    },
    

    getallProducts(){
      const that =this;
      this.$axios.get('https://8dddbfe2067c.ngrok.io/api/products')
      .then(function (response) {        
        that.allProducts = response.data.data;
        console.log(response);
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
      let search = this.Product.Product_Name;
      for(var i=0; i<this.allProducts.length; i++)
      {
        // console.log(this.allProducts[i]);
        if(this.allProducts[i].product_Name == search)
        {
          console.log(this.allProducts[i].price);
          this.Product.Price = this.allProducts[i].price;
        }
      }
    },

    plusproduct(){
      let newproduct_data={
      items: [
          { ID: this._id+=1, 
            format: this.format + this.details,
            amount: this.amount,
            unit_price: this.unit_price,
            discount_price: this.discount_price,
            subtotal: this.discount * this.amount,
            delete: <b-button size="sm" class="mr-2">"刪除"</b-button>
          },
        ],
      columns: this.ID
      }
      return newproduct_data;
    },

    
    Remark(){
      this.Quotation.Remark = this.Remark1 + "\n" + this.Remark2 + "\n" + this.Remark3 + "\n" + 
                  this.Remark4 + "\n" + this.Remark5 + "\n" + this.Remark6 + "\n" + this.Remark7 + "\n";

      console.log(this.Quotation.Remark);
    },


    goTo_review(){
      //   let selected_data= {
      //   selected: this.selected
      // };
        // if(this.selected != '')
          // this.$router.push({path:'/review',query:{data}});
      //   else if(this.selected == '')
      //     this.state();
      // }
    },


    postform(){

      let form={
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Customer: {
          Customer_Name: this.Customer.Customer_Name,
          Company_Name: this.Customer.Company_Name,
          Company_Phone: this.Customer.Company_Phone,
          Company_Fax: this.Customer.Company_Fax,
          Customer_ID: this.Customer.Customer_ID
        },
        Products: [
          {
            Product_ID: 0,
            Amount: 0,
            Price: 0,
            Discount: 0,
            Subtotal: 0
          },
          {
            Product_ID: 0,
            Amount: 0,
            Price: 0,
            Discount: 0,
            Subtotal: 0
          }
        ],
        Quotation: {
          Project_Name: this.Quotation.Project_Name,
          Project_Owner: "account",
          Remark: this.Quotation.Remark,
          total: this.Quotation.total
        }
      };

      this.$axios.post('https://8dddbfe2067c.ngrok.io/api/quotation',form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
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
