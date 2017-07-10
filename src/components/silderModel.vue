<template>
    <div id="silderModel"  @mouseover="stopRun" @mouseout="run">
      <div class="silderImgWrap">
        <transition name="side-in">
          <img v-if="isShow" :src="silderData[nowIndex].src">
        </transition>
        <transition name="side-out">
          <img v-if="!isShow" :src="silderData[nowIndex].src">
        </transition>
      </div>
      <ul>
        <li @click="goto(prev)">&lt;</li>
        <li v-for="(item, index) in silderData" @click="goto(index)"
        :class="{checked: index === nowIndex}">
          <a href="javascript:void (0);">{{index + 1}}</a>
        </li>
        <li @click="goto(next)">&gt;</li>
      </ul>
    </div>
</template>

<script>
  export default{
    data (){
        return {
          nowIndex: 0,
          intervalID: 0,
          isShow: true
        }
    },
    props:{
      silderData:{
          type: Array,
          default: []
      },
      speed :{
        type: Number,
        default: 2000
      }
    },
    methods: {
      goto (index){
        this.isShow = false;
        setTimeout(() => {
          this.nowIndex = index;
          this.isShow = true;
          this.$emit("silderIndex", this.nowIndex);
        }, 10)
      },
      run (){
        this.intervalID = setInterval(() => {
          this.goto(this.next)
        }, this.speed)
      },
      stopRun (){
          clearInterval(this.intervalID)
      }
    },
    computed: {
      prev (){
        return this.nowIndex == 0
          ?  this.silderData.length - 1
          :  this.nowIndex - 1
      },
      next (){
        return this.nowIndex == this.silderData.length - 1
          ?  0
          :  this.nowIndex + 1
      }
    },
    mounted (){
      console.log(this.silderData)
      console.log(this.speed)
      this.run()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .side-in-enter-active{
    transition: all .5s;
  }

  .side-in-enter{
    transform: translateX(100%);
  }

  .side-out-leave-active{
    transition: all .5s;
    transform: translateX(-100%);
  }

  .silderImgWrap{
    width: 100%;
  }

  .silderImgWrap img{
    width: 100%;
    position: absolute;
    top: 0;
  }

  #silderModel{
    position: relative;
    margin: 15px 15px 15px 0;
    overflow: hidden;
    height: 300px;
    width: 100%;
    z-index: 1;
  }

  ul{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  li{
    float: left;
    padding: 5px 10px;
    margin: 0 10px;
    border: #ccc 1px solid;
    background-color: #ccc;
    cursor: pointer;
  }

  li.checked{
    background-color: rgba(67,142,219,0.5);
  }


</style>
