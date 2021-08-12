// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/svg/svg.js'
import SvgIcon from '@/components/SvgIcon.vue' // svg组件
// 注册全局插件
Vue.component('svg-icon', SvgIcon)

import ElementUI from 'element-ui'
import '@/style/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
