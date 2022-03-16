<template>
  <ul>
    <li v-for="f in films.list" :key="f.filmId">
      <film-pur :mf="f" />
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import FilmPur from "../../components/FilmPur.vue";
import { reactive } from "vue";
const films = reactive({ list: [] });
axios({
  url: "/ajax//gateway?cityId=360300&pageNum=1&pageSize=10&type=2&k=2242354",
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473"}',
    "X-Host": "mall.film-ticket.film.list",
  },
}).then((res) => {
  console.log(res.data.data);
  films.list = res.data.data.films;
});
</script>

<style lang='scss' scoped>
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