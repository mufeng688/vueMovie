<template>
  <div
    @click="toDetatil(mf.filmId)"
    style="display: flex; margin: 10px 0; width: 99%"
  >
    <img :src="mf.poster" style="flex: 2" />
    <div
      style="
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        flex: 7;
      "
    >
      <div style="display: flex">
        <div class="title">{{ mf.name }}</div>
        <div class="xd">{{ mf.item.name }}</div>
      </div>
      <div v-if="mf.grade">
        观众评分&nbsp;<span class="grade">{{ mf.grade }}</span>
      </div>
      <div v-else>暂无评分</div>
      <div>主演：{{ actors }}</div>
      <div style="display: flex">
        <div style="align-self: center">{{ mf.nation }}</div>
        <div class="line"></div>
        <div style="align-self: center">{{ mf.runtime }}</div>
      </div>
    </div>
    <div style="flex: 2; display: flex; align-items: center">
      <div class="btn" @click.stop="toBuy">购票</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  mf: {
    type: Object,
  },
});
const actors = computed(() => {
  let as = props.mf.actors
    .filter((a, i) => i > 0)
    .map((a) => a.name)
    .join(" ");
  return as.length > 13 ? as.substring(0, 13) + "..." : as;
});
const ruoter = useRouter();
const toDetatil = (id) => {
  console.log(id);
  ruoter.push({ name: "detatil", params: { id } });
};
const toBuy = () => {
  ruoter.push("/buy");
};
</script>

<style lang="scss" scoped>
div {
  color: #797d82;
  font-size: 12px;
  img {
    width: 66px;
    height: 94px;
  }
}
.title {
  font-size: 15px;
  font-weight: 800;
  line-height: 15px;
  align-self: center;
}
.grade {
  color: #ffb232;
}
.xd {
  background: gray;
  color: white;
  width: 15px;
  height: 15px;
  font-size: 10px;
  opacity: 0.4;
  line-height: 15px;
  margin-left: 5px;
  align-self: center;
  z-index: -1;
}
.line {
  width: 0;
  height: 12px;
  border-left: 1px solid gray;
  margin: 5px;
  align-self: center;
}
.btn {
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: #ffb232;
  border: #ffb232 1px solid;
}
</style>