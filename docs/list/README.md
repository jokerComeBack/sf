<template>
    <div>
        <div v-for="item in ImgList" @click="showBigImg(item)" class="img-list">
            <span>{{item.name}}</span>
            <img :src="item.src" alt="">
        </div>
        <div class="mask" v-if="showMask">
            <div class="mask" @click="showMask = false"></div>
            <div class="box">
                <img :src="bigImg.src" alt="" class="big-image">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        ImgList: [
          {name: 'list组件', src: require('./list1.png') },
          {name: 'List/Guide组件', src: require('./list2.png') },
          {name: 'List/Table组件', src: require('./list3.png') }
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