<template>
  <div id="app">
    <h1 class="title">多段时间选择器</h1>
    <byte-weektime-picker v-model="byteTime" />
    <p class="value">绑定值：{{byteTime}}</p>
  </div>
</template>

<script>
// 组件内局部引用
import { ByteWeektimePicker } from './index'

export default {
  name: 'app',
  components: {
    ByteWeektimePicker
  },
  data() {
    return {
      byteTime: "000011111111100011000000000011000111111111100000000000000111100000110000001100000111000000000000000000001110000000001100110000000111000000000000000000011100000000000011000000000111000000000000000000111000000000000011000000000111000000000000000011110000000000000011000000000111000000000000000011111111100000000011000000000111111111100000"
    }
  }
}
</script>

<style scoped>
#app {
  color: #2c3e50;
  margin: 60px auto;
  width: 660px;
}
#app .title {
  text-align: center;
  margin-bottom: 30px;
}
#app .value {
  word-wrap: break-word;
  margin-top: 30px;
  line-height: 24px;
}
</style>
