<template>
  <div class="componentsLayout">
    <div class="title">singleSelection 单选</div>
    <single-selection :selections="singleSelection"
    @on-change="chooseOneEvent"></single-selection>
    <div class="componentsValue">选中了：{{chooseOneReturn}}</div>

    <div class="title">checkbox 多选</div>
    <checkbox :checkboxData="checkboxData"
              @on-change="chooseMoreEvent"></checkbox>
    <div>
      <div class="componentsValue"
           v-for="item in chooseMoreReturn">选中了：{{item.label}}</div>
    </div>

    <div class="title">counter 计数</div>
    <counter @on-change="counterEvent" :max=20 :min=0></counter>
  </div>
</template>

<script>
  import singleSelection from "../components/details/singleSelection.vue"
  import checkbox from "../components/details/checkbox.vue"
  import counter from "../components/details/counter.vue"
export default {
  name: 'componentsLayout',
  components:{
    singleSelection,
    checkbox,
    counter
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
        checkboxData: [
          {
            label: 'KG',
            value: 0
          },
          {
            label: 'T-mac',
            value: 1
          },
          {
            label: 'FK',
            value: 2
          }
        ],
        chooseOneReturn: "",
        chooseMoreReturn: []
      }
  },
  methods: {
    chooseOneEvent (data){
      console.log(data)
      this.chooseOneReturn = data.label
    },
    chooseMoreEvent (data){
      this.chooseMoreReturn = data
    },
    counterEvent (data){
        console.log(data)
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
