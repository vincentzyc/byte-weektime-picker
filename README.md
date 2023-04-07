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
支持的prop
```
  startTime: Number,  //自定义开始时段，0-47，每1代表半小时，星期一到星期日都生效
  endTime: Number,    //自定义结束时段，0-47，每1代表半小时，星期一到星期日都生效
  customDisableTimes: Array, //自定义禁用时段，数字数组，0-335
```