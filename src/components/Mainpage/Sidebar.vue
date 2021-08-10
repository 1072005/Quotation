<template>
    <b-container fluid>
        <b-col class="sidebar">
            <b-col md-3><h1>報價單系統</h1></b-col>
            <b-col md-3><p>{帳號}</p></b-col>
            <b-col md-3 ><b-button @click="newpage">建立新表單</b-button></b-col>
            <b-col md-3 ><b-button>建立過的表單</b-button></b-col>
            <b-col md-3 ><b-button >修改客戶頁面</b-button></b-col>
            <b-col md-3 ><b-button >登出</b-button></b-col>
        </b-col>
        
    </b-container>
</template>

<script>

export default {
  name: "sidebar",
  methods:{
      newpage(){
           this.$router.push({path: '/newpage'})
      }
      
  }
}
</script>

<style scoped lang="scss">
.sidebar{
    position:absolute;;
    top: 50px;
    left: 50px;
}
.sidebar p{
    margin-top:10px ;
    text-align: center;
}
.sidebar .btn{
    width: 110%;
    margin-top:10px ;
    color: black;
    font-size: 1.3rem;
}
.btn-secondary{
    background-color: #CEE6F1;
    border-color: #CEE6F1;
}
</style>
