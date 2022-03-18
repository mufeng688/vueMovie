<template>
  <div>
    <slot></slot>
    <!-- <h3>轮播组件</h3> -->
    <swiper :modules="modules" :slides-per-view="4" mousewheel>
      <swiper-slide v-for="(item, i) in imgs.list" :key="i">
        <img :src="item.avatarAddress" />
        <div class="name">{{ item.name }}</div>
        <div class="role">{{ item.role }}</div>
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
  console.log(res.data.data.film.actors);
  imgs.list = res.data.data.film.actors;
});
</script>
    
<style lang="scss" scoped>
.swiper-wrapper {
  text-align: center;
  img {
    width: 80px;
    height: 110px;
  }
  .name {
    font-size: 8px;
  }
  .role {
    font-size: 8px;
    color: rgb(134, 134, 130);
  }
}
</style>