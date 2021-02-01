<template>
  <div id="mainPage">
    <recomand class="blockFormat"></recomand>
    <rank class="blockFormat"></rank>
  </div>
</template>
<script>
import recomand from "./mainpage/recomand.vue";
import rank from "./rank/rank.vue";
export default {
  name: "MainPage",
  components: {
    recomand,
    rank,
  },
};
</script>
<style scoped>
.blockFormat {
  background: -webkit-linear-gradient(top, rgba(230, 230, 230, 0.8), white);
}
</style>