<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="box">
      <div class="p">123</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    var that = this;

    that.getalldata()
  },
  methods: {
    getweather() {
		var that = this;
      return new Promise((resolve, reject) => {
        that
          .$jsonp("https://co.moji.com/api/weather2/weatherThird?city=33", {})
          .then(pres => {
            setTimeout(() => {
              resolve(pres.data);
            }, 2000);
          });
      });
    },
    gettimes(weather) {
		var that = this;
      console.log(weather);
      return new Promise((resolve, reject) => {
        that
          .$jsonp("https://35c.api.moji.com/api/cola/gettimes", {})
          .then(pres => {
			  console.log(pres.data)
            resolve(pres.data);
          });
      });
	},
	// async getalldata(){
	// 	var that = this;
    //   var weather = await that.getweather();
	//   var times = await that.gettimes(weather);
	//   return new Promise((res,rej)=>{
	// 	  res({
	// 		  weather:weather,
	// 		  times:times
	// 	  })
	//   });
	// }
	getalldata(){
		Promise.all([this.getweather(),this.gettimes()]).then((result)=>{
			console.log(result)
		})
	}
  }
};
</script>
<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  background: #ccc;
  .p {
    color: red;
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
