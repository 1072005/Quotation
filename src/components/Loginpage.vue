<template>
 
  <form>
    <p class="h2 text-center mb-4">報價單系統</p>
    <div class="grey-text">
      <p>帳號</p>
      <mdb-input  icon="envelope" placeholder="請輸入帳號" type="email"/>
      <p>密碼</p>
      <mdb-input  icon="lock" placeholder="請輸入密碼" type="password"/>
    <div class="text-center inbtn " >
      <b-button  variant="primary" class="col-12">登入</b-button>
    </div>
    <p class="register">第一次使用? </p>
    <b-link href="#register">立即註冊</b-link>
    </div>
  </form>

</template>

<script>
  import { mdbInput,  } from 'mdbvue';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      
    },
  }
</script>

<style scoped lang="scss">
.grey-text{

  width: 20%;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
}
.grey-text p{
  padding-top: 30px;
  font-size:1.3rem ;
}
form{
  padding-top: 5%;
}
.inbtn{
  
  padding-top: 50px;
}
.register{
  display:inline-block;
  font-size: 1rem !important;
}
.register_1{
  font-size: 1rem !important;
  display:inline-block;
  color: blue;
}
</style>
