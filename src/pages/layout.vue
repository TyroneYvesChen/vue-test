<template>
  <div>
    <v-header></v-header>

    <silder-model :silderData="silderData" :speed="mySpeed"
                  @silderIndex="getSilderIndex"></silder-model>

    <div class="container">
      <div class="router-wrap">
        <router-link to="/">hello</router-link>
        <router-link to="/componentsLayout">部分组件</router-link>
        <router-link to="/vueRouterTest">vueRouterTest</router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>


    <v-footer></v-footer>
  </div>
</template>

<script>
  import silderModel from "../components/silderModel.vue"
  import vheader from "../components/header.vue"
  import vfooter from "../components/footer.vue"
  export default {
    name: 'layout',
    components:{
      silderModel,
      "v-header": vheader,
      "v-footer": vfooter,
    },
    data (){
      return {
        mySpeed: 2000,
        silderData:[
          {
            src: "static/img/1.gif",
            title:"pic1"
          },
          {
            src: "static/img/2.gif",
            title:"pic2"
          },
          {
            src: "static/img/3.gif",
            title:"pic3"
          },
          {
            src: "static/img/4.gif",
            title:"pic4"
          }
        ]
      }
    },
    methods: {
      getSilderIndex (index){
          console.log("I get the index from silderModel")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
  }
  .router-wrap{
    padding: 20px;
    text-align: center;
  }
  .router-wrap a{
    padding: 5px 10px;
    margin: 0 10px;
    border: 1px dashed #ccc;
    box-shadow: 1px 1px 5px 2px #ccc;
  }
  .router-wrap a:active,
  .router-wrap a.router-link-exact-active{
    box-shadow: 1px 1px 5px 2px #ccc inset;
  }
</style>
