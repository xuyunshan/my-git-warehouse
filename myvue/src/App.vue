<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="box">
      <div class="p">123</div>
    </div>
  </div>
</template>
<script>

export default {
  name:'',
  data(){
    return {

    }
  },
  created(){
    this.axios({
      url: "localhost:8888/test",
      method: "get",
      params: {}
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
  background: #ccc;
  .p{
    color:red;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
