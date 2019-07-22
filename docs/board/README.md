<template>
    <div>
        <div v-for="item in ImgList" @click="showBigImg(item)" class="img-list">
            <span>{{item.name}}</span>
            <img :src="item.src" alt="">
        </div>
        <div class="mask" v-if="showMask">
            <div class="mask" @click="showMask = false"></div>
            <img :src="bigImg.src" alt="" class="big-image">
        </div>
    </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        ImgList: [
          {name:'Board组件', src: require('./imgs/board1.png') },
                    {name:'Board/Group组件', src: require('./imgs/board2.png') },
                    {name:'Board/Card组件', src: require('./imgs/board3.png') }
        ],
        bigImg: null,
        showMask: false
      }
    },
    methods:{
      showBigImg(item){
        this.bigImg = item
        this.showMask = true
      }
    }
  }
</script>

<style>
@import "../.vuepress/css/index.css";
    
   
</style>