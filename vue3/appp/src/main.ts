import { createApp, defineComponent, createVNode } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const img = require('./assets/logo.png') //eslint-disable-line
// 配置了eslint，不允许使用require。想使用require需要后边加 eslint-disable-line 注释
// import App from './App.vue'
const App = defineComponent({
  render() {
    return createVNode('div', { id: 'app' }, [
      createVNode('img', {
        alt: 'Vue logo',
        src: img,
      }),
      createVNode(HelloWorld, {
        msg: 'afdasdfaadda',
        age: 123,
      }),
    ])
  },
})
createApp(App).mount('#app')
