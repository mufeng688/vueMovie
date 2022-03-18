<template>
  <div>
    <slot></slot>
    <!-- <h3>轮播组件</h3> -->
    <swiper :modules="modules" :slides-per-view="3" mousewheel loop="true">
      <swiper-slide v-for="(item, i) in imgs.list" :key="i">
        <img :src="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>
    
<script setup>
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
//引入模块
import { Autoplay, Pagination, Mousewheel } from "swiper";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import { reactive } from "vue";
import axios from "axios";

const route = useRoute();
const imgs = reactive({});
const id = route.params.id;
//加载自动播放模块
const modules = reactive([Autoplay, Pagination, Mousewheel]);
//获取轮播图
axios({
  url: `/ajax/gateway?filmId=${id}&k=8100617`,
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
    "X-Host": "mall.film-ticket.film.info",
  },
}).then((res) => {
  //   console.log(res.data.data.film.photos);
  imgs.list = res.data.data.film.photos;
});
</script>
    
<style lang="scss" scoped>
.swiper-wrapper {
  text-align: center;
  img {
    width: 100px;
    // height: 170px;
  }
}
</style>