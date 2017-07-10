<template>
  <div>
    <v-header></v-header>

    <silder-model :silderData="silderData" :speed="mySpeed"
                  @silderIndex="getSilderIndex"></silder-model>

    <div class="container">
      <!--<keep-alive>
        <router-view></router-view>
      </keep-alive>-->
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
<style scoped>
  .container {
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
  }

</style>
