<template>
  <ul>
    <li v-for="f in films.list" :key="f.filmId">
      <film-cmp :mf="f" />
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import FilmCmp from "../../components/FilmCmp";
import { reactive } from "vue";
const films = reactive({ list: [] });
axios({
  url: "/ajax/gateway?cityId=360300&pageNum=1&pageSize=10&type=1&k=997443",
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473"}',
    "X-Host": "mall.film-ticket.film.list",
  },
}).then((res) => {
  // console.log(res.data.data.films);
  films.list = res.data.data.films;
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    margin-left: -25px;
  }
}
</style>