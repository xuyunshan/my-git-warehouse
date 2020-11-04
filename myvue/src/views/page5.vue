<template>
  <div class="div"></div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'demo',
  data() {
    return {
      data1: [
        {
          name: 'zs1',
          age: 1,
          child: [
            { name: 'zs11', age: 11, child: [{ name: 'zs111', age: 111 }] },
          ],
        },
        {
          name: 'zs2',
          age: 2,
          child: [
            { name: 'zs22', age: 22, child: [{ name: 'zs222', age: 222 }] },
          ],
        },
      ],
      data2: [
        {
          name: 'zs1',
          age: 3,
          child: [
            { name: 'zs11', age: 33, child: [{ name: 'zs111', age: 333 }] },
          ],
        },
        {
          name: 'zs2c',
          age: 2,
          child: [
            { name: 'zs22', age: 22, child: [{ name: 'zs222', age: 222 }] },
          ],
        },
      ],
    };
  },
  mounted() {
    const that = this;
    console.log($);
    $.ajax({
      url: 'http://192.168.221.25:8380/darams/home/getLayout',
      type: 'get',
      dataType: 'jsonp', // 请求方式为jsonp
      jsonpCallback: 'onBack', // 自定义回调函数名
      data: {},
    });
    function onBack() {
      debugger;
    }
    // console.log('that.data1=',that.data1,'that.data2=',that.data2);
    // that.func(that.data1,that.data2);
    // console.log('that.data1=',that.data1,'that.data2=',that.data2);
  },
  computed: {},
  methods: {
    func(val1, val2) {
      const that = this;
      if (val1.length > 0 && val2.length > 0) {
        val1.forEach((item1, ind1) => {
          val2.forEach((item2, ind2) => {
            if (item1.name == item2.name) {
              item1.age = item2.age;
              if (
                item1.child &&
                item1.child.length > 0 &&
                item2.child &&
                item2.child.length > 0
              ) {
                that.func(item1.child, item2.child);
              }
            }
          });
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div {
  padding: 20px;
}
</style>
