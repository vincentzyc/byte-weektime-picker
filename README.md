# byte-weektime-picker

## 安装
```
npm install byte-weektime-picker -S
```

### 引入

```
//main.js中全局引入

import ByteWeektimePicker from 'byte-weektime-picker'

Vue.use(ByteWeektimePicker)

```
或者
```
//组件中局部引入

import { ByteWeektimePicker } from 'byte-weektime-picker'

components: {
  ByteWeektimePicker
}

```

### 使用

```
<byte-weektime-picker v-model="byteTime" />
```

详见 [demo源码](https://github.com/vincentzyc/byte-weektime-picker/blob/master/src/App.vue)