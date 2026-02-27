import Vue from 'vue'
import App from './App.vue'

//按需引入elementui组件
import {Button,Row,DatePicker} from 'element-ui';

Vue.config.productionTip = false

//将UI组件注册全局组件
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)

new Vue({
  render: h => h(App),
}).$mount('#app')
