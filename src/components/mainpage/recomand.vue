<template>
  <div id="recomand">
    <h2>精 彩 推 荐</h2>
    <div id="list">
      <transition name="slide-fade">
        <img
          v-for="(item, index) in apiData"
          :key="item.id"
          :src="item.picUrl"
          v-if="index === chosen"
          @click="gotoCorrespodentPage(index)"
        />
      </transition>
      <div id="dotNav">
        <span
          v-for="(_, index) in apiData"
          :key="index"
          class="dotted"
          @click="changeChosen(index)"
          :style="{ backgroundColor: computedColor(index) }"
        >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
const recomandURL =
  "http://localhost:1022/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
export default {
  name: "recomand",
  data() {
    return {
      length: 0,
      apiData: {},
      chosen: 0,
      timer: null,
    };
  },
  mounted() {
    this.$http({
      url: recomandURL,
      method: "get",
    }).then((res) => {
      this.apiData = JSON.parse(res.request.response).data.slider;
      this.length = this.apiData.length;
      this.action();
    });
  },
  methods: {
    action() {
      this.timer = setInterval(() => {
        this.chosen = (this.chosen + 1) % this.length;
      }, 2000);
    },
    changeChosen(index) {
      this.chosen = index;
    },
    computedColor(index) {
      return this.chosen === index ? "rgba(230,230,230,0.8)" : "bisque";
    },
    gotoCorrespodentPage(index) {
      window.location = this.apiData[index].linkUrl;
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  padding-top: 20px;
}
#recomand {
  height: 500px;
  min-width: 900px;
  position: relative;
}
img {
  min-width: 900px;
  width: 65%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0.1;
}
#dotNav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
}
.dotted {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 10px;
}
</style>