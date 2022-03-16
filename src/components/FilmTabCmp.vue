<template>
  <nav>
    <router-link to="/film/nowplaying" #default="{navigate}">
      <span @click="navigate">正在热映</span>
    </router-link>
    <router-link to="/film/comingsoon" #default="{navigate}">
      <span @click="navigate">即将上映</span>
    </router-link>     
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .active {
    color: red;
    border-bottom: 2px solid red;    
  }
  nav {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 800;
    background-color: white;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    a {
      text-decoration: none;
    }
    margin-bottom: 10px;
  }
</style>