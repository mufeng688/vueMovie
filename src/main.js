import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入图片
import './assets/iconfont/iconfont.css'
createApp(App).use(store).use(router).mount('#app')
