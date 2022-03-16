<template>
  <swiper
    :modules="modules"
    autoplay
    :pagination="{ clickable: true }"
    mousewheel
    loop="true"
  >
    <swiper-slide v-for="item in imgs.list" :key="item.bannerId">
      <img :src="item.imgUrl" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
//引入模块
import { Autoplay, Pagination, Mousewheel } from "swiper";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import { reactive } from "vue";
import axios from "axios";
const imgs = reactive({});
//加载自动播放模块
const modules = reactive([Autoplay, Pagination, Mousewheel]);
//获取轮播图
axios({
  url: "/ajax/gateway?type=2&cityId=360300&k=5396646",
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
    "X-Host": "mall.cfg.common-banner",
  },
}).then((res) => {
  imgs.list = res.data.data;
});
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  text-align: center;
  img {
    width: 100%;
  }
}
</style>