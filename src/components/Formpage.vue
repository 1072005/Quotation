<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
    <p class="h2 text-center mb-4">填寫新表單</p>
    <b-form id="main">
       <b-row>
        <b-col>
          <label for="input-project-name">專案名稱</label>
          <b-form-input v-model="Project_Name" type="text" list="project-name" id="input-project-name"></b-form-input> 
        </b-col>
      </b-row>

      <br>
      <b-row>
        <b-col>
          <label for="input-client-name">客戶名字</label>
          <b-form-input v-model="Customer_Name" type="text" list="client-name" id="input-client-name"></b-form-input> 

          <datalist id="client-name">
            <!--eslint-disable-next-line-->
            <option v-for="client_name in Client_names">{{ client_name }}</option>
          </datalist>
        </b-col>
        <b-col>
          <label for="input-client-company">客戶公司</label>
          <b-form-input v-model="Company_Name" list="client-company" id="input-client-company"></b-form-input>
          <datalist id="client-company">
            <!--eslint-disable-next-line-->
            <option v-for="client_company in Client_companys">{{ client_company }}</option>
          </datalist>
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

      <br>

      <b-row>
        <b-col>
          <label for="input-product-format">產品規格</label>
          <b-form-input v-model="format" list="product-format" id="input-product-format"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-details">細項</label>
          <b-form-input v-model="details" list="product-details" id="input-product-details"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="input-product-amount">數量</label>
          <b-form-input v-model="amount" list="product-amount" id="input-product-amount"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-unit-price">單價</label>
          <b-form-input v-model="unit_price" list="product-unit-price" id="input-product-unit-price"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-discount-price">特價</label>
          <b-form-input v-model="discount_price" list="product-discount-price" id="input-product-discount-price"></b-form-input>
        </b-col>
        <b-col>
          <label for="input-product-subtotal">小計</label>
          <b-form-input v-model="product_subtotal" list="product-subtotal" id="input-product-subtotal"></b-form-input>
        </b-col>
        <b-col>
          <b-button variant="outline-primary" id="plus">增加</b-button>
        </b-col>
      </b-row>

      <br>
      <b-row>
          <b-table :items="items" :fields="fields" bordered align="center"></b-table>
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
          <b-form-input v-modal="total" list="total" id="input-total"></b-form-input>
        </b-col>
      </b-row>
      
      <br>

      <b-row>
        <b-col>
          <label for="input-remark">備註</label>
          <b-form-input v-modal="Remark1" list="input-remark" id="input-remark-1" required placeholder="硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)"></b-form-input>
          <br>
          <b-form-input v-modal="Remark2" list="input-remark" id="input-remark-2" required placeholder="如有其他增加項目則另外報價。"></b-form-input>
          <br>
          <b-form-input v-modal="Remark3" list="input-remark" id="input-remark-3" required placeholder="出貨地(FOB) : 台灣。"></b-form-input>
          <br>
          <b-form-input v-modal="Remark4" list="input-remark" id="input-remark-4" required placeholder="款項未付清前 , 產品所有權屬於麥威科技所有。"></b-form-input>
          <br>
          <b-form-input v-modal="Remark5" list="input-remark" id="input-remark-5" required placeholder="下單後訂單不可取消。"></b-form-input>
          <br>
          <b-form-input v-modal="Remark6" list="input-remark" id="input-remark-6" required placeholder="交期與付款條件:下單後一週,TT。"></b-form-input>
          <br>
          <b-form-input v-modal="Remark7" list="input-remark" id="input-remark-7" required placeholder="15天內完成維修。"></b-form-input>
        </b-col>
      </b-row>
    </b-form>

    <br>
    <b-row>
      <b-col>
        <b-button variant="outline-primary" id="review">Review</b-button>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col lg="2">
        <b-button variant="primary" id="save-download" v-on:click="postform()" >儲存並下載</b-button>
      </b-col>
      <b-col>
        <b-button variant="outline-primary" id="console">取消</b-button>
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
      Client_names : [],
      Client_companys : [], fields: [ 
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
        ]
    
    }
  },

  mounted(){
    this.getCostomers();
    this.getProducts();
  },

  methods:{

    getCostomers(){

      let search_Costomers= {
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Search: this.Search_Costomers,
        Search_In: this.Search_In
      }

       this.$axios.get('https://d42ab6f4f646.ngrok.io/api/customers?'+search_Costomers)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    },

    getProducts(){

      let search_Products= {
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Search: this.Product_Name
      }

     this.$axios.get('https://d42ab6f4f646.ngrok.io/api/products',search_Products)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    },
    postform(){

      let form={
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Customer: {
          Customer_Name: this.Customer_Name,
          Company_Name: this.Company_Name,
          Company_Phone: this.Company_Phone,
          Company_Fax: this.Company_Fax,
          Customer_ID: this.Customer_ID
        },
        Products: [
          {
            Product_ID: 1,
            Amount: 2,
            Price: 53000,
            Discount: 53000,
            Subtotal: 106000
          },
          {
            Product_ID: 2,
            Amount: 1,
            Price: 53000,
            Discount: 53000,
            Subtotal: 53000
          }
        ],
        Quotation: {
          Project_Name: this.Project_Name,
          Project_Owner: "account",
          Remark: this.Remark1 + "/n" + this.Remark2 + "/n" + this.Remark3 + "/n" + 
                  this.Remark4 + "/n" + this.Remark5 + "/n" + this.Remark6 + "/n" + this.Remark7 + "/n",
          total: this.total
        }
      };

      this.$axios.post('https://d42ab6f4f646.ngrok.io/api/quotation',form)
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
