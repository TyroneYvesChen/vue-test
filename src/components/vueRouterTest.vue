<template>
  <div class="router">
    <div>{{ msg }}</div>
    <div class="router-wrap">
      <router-link to="/vueRouterTest/son">儿子</router-link>
      <router-link to="/vueRouterTest/daughter">女儿</router-link>

    </div>
    <div class="router-wrap">
      <div>router.push/go/replace</div>
      <ul class="routerList">
        <li @click="routerPush">router.push</li>
        <li @click="routerGo">router.go</li>
        <li @click="routerReplace">router.replace</li>
      </ul>
    </div>
    <transition name="routerClidren">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
//  import router from '@/router'
export default {
  name: 'vueRouterTest',
  data () {
    return {
      msg: '我就试试看vueRouter'
    }
  },
  methods: {
    routerPush (){
      this.$router.push({ path: "/vueRouterTest/son", query: { userId: 123 }})
    },
    routerGo (){
      this.$router.go(-1)
    },
    routerReplace (){
      this.$router.replace("/vueRouterTest/daughter")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .routerClidren-enter-active {
    transition: all .5s ease;
  }
  .routerClidren-leave-active {
    transition: all .3s ease;
    transform: translate(500px,500px);
  }
  .routerClidren-enter {
    transform: translate(-500px,200px);
  }



  .routerList li{
    padding: 5px 10px;
    display: inline-block;
    margin: 0 10px;
    box-shadow: orangered 1px 1px 5px 1px;
    cursor: pointer;
  }
  .router-wrap div{
    height: 40px;
    line-height: 40px;
    color: #0099FF;
  }
</style>
