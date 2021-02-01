<template>
  <div id="app">
    <div id="navigator">
      <router-link to="/mainpage">首页</router-link>
      <router-link to="/singer">歌手</router-link>
      <router-link to="/newdisk">新碟</router-link>
      <router-link to="/ranking">排行榜</router-link>
      <router-link to="/categories">分类歌单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
</script>
<style scoped>
#navigator {
  min-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
}
a {
  width: 10%;
  height: 80px;
  display: inline-block;
  text-align: center;
  line-height: 80px;
  text-decoration: none;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>