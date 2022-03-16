<template>
  <div>
    <router-view #default="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <tab-cmp />
  </div>
</template>
<script setup>
  import TabCmp from './components/TabCmp'
  // import axios from 'axios'
  //请求轮播图
  // axios({
  //   url: '/mz/gateway?type=2&cityId=360300&k=5396646',
  //   headers: {
  //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
  //     'X-Host':'mall.cfg.common-banner'
  //   }
  // }).then(res => {
  //   console.log(res.data.data)
  // })
  //请求正在热映的数据
  // axios({
  //   url: '/mz/gateway?cityId=360300&pageNum=1&pageSize=10&type=1&k=997443',
  //   headers: {
  //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473"}',
  //     'X-Host': 'mall.film-ticket.film.list'
  //   }
  // }).then(res => {
  //     console.log(res.data.data.films)
  // })
  //请求即将上映的数据
  // axios({
  //   url: '/mz/gateway?cityId=360300&pageNum=1&pageSize=10&type=2&k=9603561',
  //   headers: {
  //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
  //     'X-Host':'mall.film-ticket.film.list'
  //   }
  // }).then(res => {
  //   console.log(res.data.data.films)
  // })
  //请求城市数据
  // axios({
  //   url: '/mz/gateway?k=4916207',
  //   headers: {
  //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
  //     'X-Host':'mall.film-ticket.city.list'
  //   }
  // }).then(res => {
  //   console.log(res.data.data.cities)
  // })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
 
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
