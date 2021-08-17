<template>
 <div id="bg">
   <b-container fluid class="bv-example-row">
     <b-row>
        <b-col col lg="2">
          <img v-bind="mainProps" src="../assets/Logo_myway.png" alt="img1" >
        </b-col>
        <b-col>
          <h2><b>麥威科技股份有限公司</b></h2>
        </b-col>
        <b-col lg="3"  style="text-color:Gray">
          <h2 align="center" style="color:grey"><b>報價單</b></h2>
          <h5 align="center" style="color:grey"><b>Quotation</b></h5>
          <div class="bg-dark"><hr size=5></div>
        </b-col>
     </b-row>
     <b-row>
        <b-col md="6"  offset-md="2">
          <p>桃園市中壢區明德路60五樓I室</p>
          <p>電&emsp;&emsp;話：0918988747</p>
          <p>統一編號：82782328</p>
        </b-col>
        <b-col>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>Email：mywaytech@getmywaytech.com</p>
        </b-col>
     </b-row>
     <div class="bg-dark"><hr size=7></div>
     <b-row>
        <b-col md="4">
          <p>客戶姓名：&emsp;&emsp;</p>
          <p>公司名稱：&emsp;&emsp;</p>
          <p>公司電話：&emsp;&emsp;</p>
          <p>公司傳真：&emsp;&emsp;</p>
        </b-col>
        <b-col md="6">
          <p align="right"><b>日期&emsp;&emsp;</b></p>
          <p align="right"><b>報價單編號&emsp;&emsp;</b></p>
          <p align="right"><b>客戶統一編號&emsp;&emsp;</b></p>
          <p align="right"><l>報價有效期至&emsp;&emsp;</l></p>
        </b-col>
     </b-row>
     <hr size=7>
      <p><b>特別注意事項：</b>1.本報價單經雙方協議成交，經客戶簽章視為正式訂單。</p>
      <div class="flieds">
        <b-row>
          <b-col style="border-style:solid">
            <p align="center"><b>品名編號</b></p>
          </b-col>
          <b-col style="border-style:solid"  md="4">
            <p align="center"><b>產品規格</b></p>
          </b-col>
          <b-col style="border-style:solid">
            <p align="center"><b>數量</b></p>
          </b-col>
          <b-col style="border-style:solid">
            <p align="center"><b>單價</b></p>
          </b-col>
          <b-col style="border-style:solid" md="2">
            <p align="center"><b>特價(未稅)</b></p>
          </b-col>
          <b-col style="border-style:solid" md="2">
            <p align="center"><b>小計</b></p>
          </b-col>
        </b-row>
      </div>
      <div class="products" >
        <b-row>
          <b-col style="border-style:solid">
            <p align="center">1</p>
          </b-col>
          <b-col style="border-style:solid" md="4">
            <p>Fever Guard(軟體+設備)<br>(1)軟體:人臉追蹤測溫軟體<br>(2)型號:FGA12-IR2</p>
          </b-col>
          <b-col style="border-style:solid">
            <p align="center">2</p>
          </b-col>
          <b-col style="border-style:solid">
            <p align="right">NT$6,3000</p>
          </b-col>
          <b-col style="border-style:solid" md="2">
            <p align="right">53000</p>
          </b-col>
          <b-col style="border-style:solid" md="2">
            <p align="right">106000</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col md="6">
            <p><b>備註：<br>                                                                                                     
                1.硬體及系統保固一年。(天災 , 人為破壞因素損壞不在保固範圍內)<br>
                2.如有其他增加項目則另外報價。<br>
                3.出貨地(FOB) : 台灣。<br>
                4.款項未付清前 , 產品所有權屬於麥威科技所有。<br>
                5.下單後訂單不可取消。<br>
                6.交期與付款條件:下單後一週,TT。<br>
                7. 15天內完成維修。</b></p>
            </b-col>
          <b-col>
            <b-row>
              <b-col></b-col>
               <b-col md="4" style="border-style:solid;">
                <p align="right" >小計</p>
              </b-col>
              <b-col  md="4" style="border-style:solid;">
                <p align="right">小計1</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col></b-col>
               <b-col md="4" style="border-style:solid;">
                <p align="right">稅額</p>
              </b-col>
              <b-col  md="4" style="border-style:solid;">
                <p align="right">稅額1</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col></b-col>
               <b-col md="4" style="border-style:solid;">
                <p align="right"><b>總計</b></p>
              </b-col>
              <b-col  md="4" style="border-style:solid;">
                <p align="right">總計1</p>
              </b-col>
            </b-row>
          </b-col>
         
        </b-row>
      </div>
        <b-row>
          <!-- <b-table hover :items="items" :fields="fields" bordered align="center"></b-table> -->
        </b-row>
     <br>
     <b-row>
        
     </b-row>
     <b-row>
       <b-col md="4">
        <p align="center" style="border-style:solid"><b>客戶同意採購簽章：</b></p>
        <br><br>
       </b-col>
     </b-row>
     <b-row>
       <b-col md="6">
        <div class="bg-dark"><hr></div>
       </b-col>
     </b-row>
     <b-row>
       <b-col>
        <div class="bg-dark"><hr size=5></div>
        <p align="center">如您有任何疑問，請即聯絡：薛勝榮，0918988747，austin@getmywaytech.com</p>
        <p align="center"><b>祝事業興旺！</b></p>
       </b-col>
     </b-row>
   </b-container>
          <img v-bind="mainProps" src="../assets/Form_example_myway.png" alt="example" >
 </div>
</template>

<script>
export default{
  name: "Reviewspage",
  el: "#main",

  data(){
    return{
      Client_names : [],
      Client_companys : [],
      fields: [ 
                { key: 'ID', label: '品名編號' },
                { key: 'format', label: '產品規格' },
                { key: 'amount', label: '數量' },
                { key: 'unit-price', label: '單價' },
                { key: 'discount-price', label: '特價(未稅)' },
                { key: 'subtotal', label: '小計' }
              ],
      items: [
         { ID: 1, 
            format: 'Fever Guard(軟體+設備)(1)軟體:人臉追蹤測溫軟體(2)型號:FGA12-IR2',
            amount: 2,
            unit_price: 63000,
            discount_price: 53000,
            subtotal: 10600
           },
        ]
    }
  },

  mounted(){
    
  },

  methods:{

    getCostomers(){

      let search_Costomers= {
        user_id: 1,
        token: "SMoQMA3y9mXkJ2qr8Loc",
        Search: this.Search_Costomers,
        Search_In: this.Search_In
      }

       this.$axios.get('https://c95d5df9aa5a.ngrok.io/api/customers',search_Costomers)
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

     this.$axios.get('https://c95d5df9aa5a.ngrok.io/api/products',search_Products)
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

      this.$axios.post('https://c95d5df9aa5a.ngrok.io/api/quotation',form)
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
  // border-radius: 30px;
  padding:5%
}
hr{
  background-color: black !important;
  color: black !important;
}
</style>
