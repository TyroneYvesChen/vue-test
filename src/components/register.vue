<template>
  <div class="">
    <div class="line">
      <div class="line-details"><span>注册</span></div>
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
      <div class="line-details">password again</div>
      <div class="line-input">
        <input type="text" v-model="passWordAgain">
      </div>
      <div class="errors" ref="passWordAgain-errors"></div>
    </div>
    <div class="line">
      <div class="line-details">
        <button id="register" @click="register">注册</button>
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
      passWord: "",
      passWordAgain: ""
    }
  },
  methods: {
    register (){
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
      if (this.passWordAgain !== this.passWord){
        this.$refs["passWordAgain-errors"].innerText = "两次密码不一致！"
        return
      }
      alert("注册成功")
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
  #register{
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
