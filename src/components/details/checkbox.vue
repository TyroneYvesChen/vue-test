<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in checkboxData"
      :class="{active:nowIndexs.indexOf(index) > -1 }"
      @click="chosenSelection(index)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checkboxData: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data (){
    return {
      nowIndexs: []
    }
  },
  methods: {
    chosenSelection (index){
      if (this.nowIndexs.indexOf(index) === -1){
        this.nowIndexs.push(index)
      }else {
        this.removeByValue(this.nowIndexs, index)
      }
      console.log(this.nowIndexs)
      let param = this.paramDealWith()
      this.$emit("on-change", param)
    },
    removeByValue (arr, val){
      for(let i=0; i<arr.length; i++) {
        if(arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    },
    paramDealWith (){
      let arr = []
      for (let i = 0; i < this.nowIndexs.length; i++){
        arr.push(this.checkboxData[this.nowIndexs[i]])
      }
      return arr
    }
  },
  mounted (){
      this.chosenSelection(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
    margin-right: 15px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
