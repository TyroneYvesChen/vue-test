<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul class="nav-list">
            <li @click="loginEvent" v-if="!isLogin" v-model="isLogin">登录</li>
            <li v-if="isLogin" v-model="isLogin">Tyrone Yves Chen</li>
            <li class="nav-pile">|</li>
            <li @click="register" v-if="!isLogin" v-model="isLogin">注册</li>
            <li v-if="isLogin" v-model="isLogin" @click="logoutEvent">退出</li>
            <li class="nav-pile">|</li>
            <li >关于</li>
          </ul>
        </div>
      </div>
    </div>


    <my-dialog :isShow="isShow" @on-close="closeDialog">
      <login @on-close="isLoginEvent" v-if="dialogType === 'login'"></login>
      <register @on-close="closeDialog" v-if="dialogType === 'register'"></register>
    </my-dialog>

  </div>
</template>

<script>
  import myDialog from "./myDialog.vue"
  import login from "./login.vue"
  import register from "./register.vue"
  export default {
    name: 'header',
    components:{
      "my-dialog": myDialog,
      login,
      register
    },
    data (){
        return {
          isShow: false,
          dialogType: "",
          isLogin: false
        }
    },
    methods: {
      loginEvent (){
        this.dialogType = "login"
        this.isShow = true;
      },
      logoutEvent (){
        this.isLogin = false
      },
      register (){
        this.dialogType = "register"
        this.isShow = true;
      },
      isLoginEvent (){
        this.isLogin = true
        this.closeDialog()
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
  #loginBtn{
    background-color: red!important;
  }
</style>
