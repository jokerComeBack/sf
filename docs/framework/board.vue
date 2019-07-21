<template>
    <div>
        <div v-for="item in ImgList" @click="showBigImg(item)">
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
          { src: require('./imgs/board1.png') },
          { src: require('./imgs/board2.png') },
          { src: require('./imgs/board3.png') }
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
    img{
        width: 750px;
    }
    .big-image{
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .mask{
        position: fixed;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    i{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
        font-style: normal;
        color: #fff;
    }
</style>