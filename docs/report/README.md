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
          {name:'Report审批前', src: require('./imgs/report1.png') },
                    {name:'审批后分析', src: require('./imgs/report2.png') },
                    {name:'审批后详情', src: require('./imgs/report3.png') }
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