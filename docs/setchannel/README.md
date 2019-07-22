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
          {name:'SetChannel/push与短信', src: require('./imgs/setchannel1.png') },
          {name:'SetChannel/webhook', src: require('./imgs/setchannel2.png') }
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