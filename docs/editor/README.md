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
    name: "editor",
    data() {
      return {
        ImgList: [
                  {name:'Editor', src: require('./imgs/editor1.png') },
                  {name:'Editor/Steps', src: require('./imgs/editor2.png') },
                  {name:'Editor/Content', src: require('./imgs/editor3.png') },
                  {name:'Content/BaseCrowd', src: require('./imgs/editor4.png') },
                  {name:'Content/TriggerCrowd', src: require('./imgs/editor5.png') },
                  {name:'TriggerCrowd/Timer', src: require('./imgs/editor6.png') },
                  {name:'Reach', src: require('./imgs/editor7.png') },
                  {name:'Reach/ParamSetting', src: require('./imgs/editor8.png') },
                  {name:'Goal', src: require('./imgs/editor9.png') }
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