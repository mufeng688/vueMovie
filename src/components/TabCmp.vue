<template>
  <nav>
    <router-link to="/film" #default="{navigate}">
      <div>
        <i class="iconfont icon-favorite" @click="navigate"></i>
        <span>电影</span>
      </div>
    </router-link>
    <router-link to="/cinema" #default="{navigate}">
      <div>
        <i class="iconfont icon-cart" @click="navigate"></i>
        <span>影院</span>
      </div>
    </router-link>
    <router-link to="/consult" #default="{navigate}">
      <div>
        <i class="iconfont icon-service" @click="navigate"></i>
        <span>咨询</span>
      </div>
    </router-link>
    <router-link to="/my" #default="{navigate}">
      <div>
        <i class="iconfont icon-account" @click="navigate"></i>
        <span>我的</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .active {
    font-weight: 800;
    color: red;   
  }
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: gainsboro;
    display: flex;
    justify-content: space-around;
    div {
      display: inline-flex;
      flex-direction: column; 
      margin-top: 10px;
      span {
        font-size: 10px;
      }
    }
  }
</style>