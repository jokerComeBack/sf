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
img{
    display: block;
    width: 750px;
}
.img-list{
    padding-top: 40px;
    text-align:center;
}
.img-list span{
    font-size: 24px;
}
.big-image{
    width: 80%;
    position: absolute;
    z-index: 110;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.mask{
    position: fixed;
    z-index: 100;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.box{
    
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