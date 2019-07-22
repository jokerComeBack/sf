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
    name: "report",
    data() {
      return {
        ImgList: [
          {name:'SetMsgLimit', src: require('./imgs/setmsglimit1.png') },
          {name:'Rule', src: require('./imgs/setmsglimit2.png') },

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