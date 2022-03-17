<template>
  <div>
    <div class="main">
      <img
        @click="goBack"
        class="back"
        src="data:image/png;base64,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"
      />
      <img class="poster" :src="film.data.poster" />
      <div class="title">
        <div class="namebox">
          <div class="name">{{ film.data.name }}</div>
          <div v-if="film.data.item" class="item">
            {{ film.data.item.name }}
          </div>
          <div v-else class="item">2D</div>
        </div>
        <div v-if="film.data.grade" class="grade">{{ film.data.grade }}</div>
      </div>
      <div class="infobox">
        <div class="info">{{ film.data.category }}</div>
        <div class="info">{{ premiereAt }}上映</div>
        <div class="info">
          {{ film.data.nation }}|{{ film.data.runtime }}分钟
        </div>
      </div>
      <div class="synopsis">{{ film.data.synopsis }}</div>
      <img
        class="toggle"
        @click="tg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAAXNSR0IArs4c6QAAAQlJREFUKBWNkT1Lw1AUht8TIlJExKlj/4WQFNIacWyHCoLQ1cXdj59g7e7i6CA4OAhOpbdNIKn2X3Ts1NGhocdzbgmk1NJmuCHnvM+Tc+8lEyVfDBzDxdVZtTrBDk8/SSrI8EbAzBH4EAwPc/qJ4/RkG28zklVGWefoYL8BQg/gcsYYmmjU2iQx8feFZjSrjLIyBTBgdjlKn8V4TUQszfsw8LtFkYnTW/lrh5lJoBeq+TenRJkV5EEzHN2B+LEY0t6KnOkhrHtPObMi0KKOCV68iqS03JoacC6T/QLUDmveRw7re02gRT2o+QKfdq9aAE33HDSDwB/bz8Lyr0D7y6uid5t1+XLTFf8Bk+NpPwQfd0oAAAAASUVORK5CYII="
      />
    </div>
    <div>演职人员组件</div>
    <div>剧照组件</div>
    <div>选座购票</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onBeforeUnmount, reactive, computed, ref } from "vue";
import axios from "axios";
const route = useRoute();
const store = useStore();
//隐藏主导航栏
store.commit("hideBar");
onBeforeUnmount(() => {
  store.commit("showBar");
});
//根据id请求数据
const id = route.params.id;
const film = reactive({ data: {} });
axios({
  url: `/ajax/gateway?filmId=${id}&k=8100617`,
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.2.0","e":"16222722141619340109545473","bc":"430100"}',
    "X-Host": "mall.film-ticket.film.info",
  },
}).then((res) => {
  console.log(res.data.data.film);
  film.data = res.data.data.film;
});
const premiereAt = computed(() => {
  //上映日期处理
  let d = new Date(film.data.premiereAt * 1000);
  let fullYear = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month > 9 ? month : "0" + month;
  let date = d.getDate();
  return fullYear + "-" + month + "-" + date;
});
//内容切换
const ht = ref("36px"); //内容介绍高度
const ow = ref("hidden"); //溢出内容是否隐藏
const rz = ref("0deg"); //箭头旋转角度
const tg = () => {
  ht.value = ht.value === "36px" ? "auto" : "36px";
  ow.value = ow.value === "hidden" ? "visible" : "hidden";
  rz.value = rz.value === "0deg" ? "180deg" : "0deg";
};
const router = useRouter();
const goBack = () => {
  router.push("/film");
};
</script>

<style lang="scss" scoped>
.back {
  background-color: #eef0f3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 0.5;
}
.poster {
  width: 100%;
  height: 56vw;
  object-fit: cover;
}
.name {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
  align-self: center;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
  align-self: center;
}
.grade {
  font-size: 18px;
  font-style: italic;
  color: #ffb232;
  text-align: right;
  &::after {
    content: "分";
    font-size: 10px;
  }
}
.info {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  box-sizing: border-box;
}
.synopsis {
  height: v-bind(ht);
  font-size: 13px;
  color: #797d82;
  margin-top: 12px;
  margin-left: 12px;
  box-sizing: border-box;
  text-align: left;
  overflow: v-bind(ow);
}
.toggle {
  width: 8px;
  margin: auto;
  line-height: normal;
  transform: rotateZ(v-bind(rz));
}
.main {
  border-bottom: #f2f3f7 10px solid;
}
.title {
  display: flex;
  justify-content: space-between;
  margin: 12px;
}
.namebox {
  display: flex;
}
.infobox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
}
</style>