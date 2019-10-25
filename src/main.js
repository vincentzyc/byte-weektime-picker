import Vue from 'vue'
import App from './App.vue'

// 全局引用
// import ByteWeektimePicker from './index'

// Vue.use(ByteWeektimePicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
