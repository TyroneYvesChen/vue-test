<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul class="nav-list">
            <li @click="isLogin">登录</li>
            <li class="nav-pile">|</li>
            <li >注册</li>
            <li class="nav-pile">|</li>
            <li >关于</li>
          </ul>
        </div>
      </div>
    </div>


    <my-dialog :isShow="isShow" @on-close="closeDialog">
      <login></login>
    </my-dialog>

  </div>
</template>

<script>
  import myDialog from "./myDialog.vue"
  import login from "./login.vue"
  export default {
    name: 'header',
    components:{
      "my-dialog": myDialog,
      login
    },
    data (){
        return {
          isShow: false
        }
    },
    methods: {
        isLogin (){
            this.isShow = true;
        },
      closeDialog (){
        this.isShow = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
    margin-top: 20px;
  }
  .head-logo img {
    width: 50px;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
</style>
