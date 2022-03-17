<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="f in films.list" :key="f.filmId">
        <film-cmp :mf="f" />
      </li>
    </ul>
    <div class="fl"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import FilmCmp from "../../components/FilmCmp";
import { reactive, ref } from "vue";
const films = reactive({ list: [] });
const pageNum = ref(1);
axios({
  url: `/ajax/gateway?cityId=360300&pageNum=${pageNum.value}&pageSize=5&type=1&k=997443`,
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473"}',
    "X-Host": "mall.film-ticket.film.list",
  },
}).then((res) => {
  // console.log(res.data.data.films);
  films.list = res.data.data.films;
});
const loading = ref(false);
const total = ref(0);

const loadMore = () => {
  // 滚动到底部时，第一次调用loadMore函数时，
  loading.value = true;
  pageNum.value++;
  if (films.list.length === total.value) {
    // console.log("数据加载完了");
    return;
  }
  axios({
    url: `/ajax/gateway?cityId=360300&pageNum=${pageNum.value}&pageSize=5&type=1&k=997443`,
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473"}',
      "X-Host": "mall.film-ticket.film.list",
    },
  }).then((res) => {
    // console.log(res.data.data.films);
    films.list = [...films.list, ...res.data.data.films];
    total.value = res.data.data.total;
    loading.value = false;
  });
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin-bottom: 40px;
  li {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    margin-left: -25px;
    border-bottom: 1px rgb(248, 245, 245) solid;
  }
}
</style>