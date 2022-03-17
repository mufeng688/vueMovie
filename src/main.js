import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入图片
import "./assets/iconfont/iconfont.css";
// 引入无限滚动功能模块
import infiniteScroll from "vue3-infinite-scroll-good";
createApp(App).use(store).use(router).use(infiniteScroll).mount("#app");
