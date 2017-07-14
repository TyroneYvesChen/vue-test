<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections"
      :class="{active:index === nowIndex}"
      @click="chosenSelection(index)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'singleSelection',
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data (){
    return {
      nowIndex: 0
    }
  },
  methods: {
    chosenSelection (index){
      this.nowIndex = index
      this.$emit("on-change",this.selections[index])
    }
  },
  mounted (){
      this.chosenSelection(this.nowIndex)
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
