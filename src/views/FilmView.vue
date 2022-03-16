<template>
  <div>
    <div class="addr">长沙∨</div>
    <!-- <div class="title">电影</div> -->
    <film-swiper />
    <film-tab-cmp class="tab" />
    <router-view #default="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import FilmSwiper from "../components/FilmSwiper";
import FilmTabCmp from "../components/FilmTabCmp";
</script>

<style lang="scss" scoped>
.addr {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 999;
  border-radius: 30%;
  background: gray;
  opacity: 0.6;
  padding: 5px;
  color: white;
}
.title {
  position: absolute;
  margin-left: 50%;
  transform: translate(-50%);
  z-index: 999;
  top: 10px;
  font-size: 20px;
}
.tab {
  position: sticky;
  left: 0;
  top: 0;
}
</style>