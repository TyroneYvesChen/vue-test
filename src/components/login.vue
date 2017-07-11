<template>
  <div class="">
    <div class="line">
      <div class="line-details"><span>登录</span></div>
    </div>
    <div class="line">
      <div class="line-details">name</div>
      <div class="line-input">
        <input type="text" v-model="userName">
      </div>
      <div class="errors" ref="userName-errors"></div>
    </div>
    <div class="line">
      <div class="line-details">password</div>
      <div class="line-input">
        <input type="text" v-model="passWord">
      </div>
      <div class="errors" ref="passWord-errors"></div>
    </div>
    <div class="line">
      <div class="line-details">
        <button id="loginBtn" @click="login">登录</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data (){
    return {
      userName: "",
      passWord: ""
    }
  },
  methods: {
    login (){
      console.log(this.userName)
      if (this.userName === ""){
        this.$refs["userName-errors"].innerText = "姓名不为空！"
        return
      }else {
        this.$refs["userName-errors"].innerText = ""
      }

      if (this.passWord.length < 8){
        this.$refs["passWord-errors"].innerText = "密码长度小于8！"
        return
      }else {
        this.$refs["passWord-errors"].innerText = ""
      }
      alert("登录成功")
      this.$emit("on-close")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line{
    padding: 15px;
    clear: both;
  }
  .line-details{
    width: 15%;
    float: left;
    text-align: right;
  }
  .line-input{
    float: left;
    padding-left: 30px;
  }
  input{
    border: 1px solid #ccc;
  }
  button{
    list-style-type:none;
  }
  .errors{
    float: left;
    color: red;
    padding-left: 30px;
  }
  #loginBtn{
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #888;
    color: #f6f6f6;
    font-weight: bold;
    cursor: pointer;
  }
  .line-details span{
    font-size: 20px;
  }
</style>
