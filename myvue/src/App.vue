<template>
  <div>
    <div class="routers">
      <div @click="toPage1">toPage1</div>
      <div @click="toPage2">toPage2</div>
      <div @click="toPage3">toPage3</div>
    </div>
    <router-view></router-view>
  </div>
    
</template>
<script>
export default {
  name: "",
  data() {
    return {
      myDiagram:{},
    };
  },
  created() {
  },
  mounted(){
    var that = this;
  },
  methods:{
    toPage1(){
      this.$router.push('/page1')
    },
    toPage2(){
      this.$router.push('/page2')
    },
    toPage3(){
      this.$router.push('/page3')
    },
  }
}
</script>
<style lang='scss'>
.assetsMapField{
  width: 100%;
  height: 700px;
}
.routers{
  display: flex;
  padding: 10px;
  div{
    width: 100px;
    cursor: pointer;
    &:hover{
      color: #1081fa;
    }
  }
}
</style>
