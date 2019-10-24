import ByteWeektimePicker from './components/byte-weektime-picker.vue'

const install = function (Vue) {

  if (install.installed) return;

  Vue.component(ByteWeektimePicker.name, ByteWeektimePicker)

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { ByteWeektimePicker }

export default install