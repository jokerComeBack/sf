<template>
    <div>
        <img src="./mind.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "one1",
    data() {
      return {
        showMask: false
      }
    },
    methods:{
      showBigImg(){
        this.showMask = true
      }
    }
  }
</script>

<style scoped>
.big-image{
    width: 3000px;
}
.mask{
    position: absolute;
    z-index: 100;
    left:0;
    top:0;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>