<template>
  <div class="componentsLayout">
    <div class="title">singleSelection 单选</div>
    <single-selection :selections="singleSelection"
    @on-change="chooseOneEvent"></single-selection>
    <div class="componentsValue">选中了：{{chooseOneReturn}}</div>
  </div>
</template>

<script>
  import singleSelection from "../components/details/singleSelection.vue"
export default {
  name: 'componentsLayout',
  components:{
    singleSelection
  },
  data (){
      return {
        singleSelection: [
          {
            label: 'test',
            value: 0
          },
          {
            label: 'T-mac',
            value: 1
          },
          {
            label: '喵哈哈',
            value: 2
          }
        ],
        chooseOneReturn: ""
      }
  },
  methods: {
    chooseOneEvent (data){
      console.log(data)
      this.chooseOneReturn = data.label
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .componentsValue{
    height: 40px;
    line-height: 40px;
  }
</style>
