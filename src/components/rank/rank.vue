<template>
  <div id="rank">
    <h2>排 行 榜</h2>
    <div id="content">
      <div
        class="showBlock"
        v-for="(item, index) in apiData"
        :key="index"
        v-if="index < length"
        :style="{ backgroundColor: computedColor() }"
      >
        <h3>
          {{ item.ListName.split("·")[0] }}<br />{{
            item.ListName.split("·")[1]
          }}
        </h3>
        <div
          v-for="(song, songindex) in item.songlist"
          :key="song.songid"
          @click="gotoSong(song)"
        >
          <ul>
            <li>{{ songindex + 1 }}</li>
            <li>{{ song.songname }}</li>
            <li>{{ song.singername }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const rankurl =
  "http://localhost:1022/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1";
export default {
  name: "rank",
  data() {
    return {
      apiData: {},
      length: 4,
    };
  },
  mounted() {
    this.$http({
      url: rankurl,
      method: "get",
    }).then((res) => {
      let apiData = this.apiData;
      let jsonCallback = function (res) {
        apiData = res;
      };
      eval(res.data);
      this.apiData = apiData[0].List;
      console.log(this.apiData);
    });
  },
  methods: {
    computedColor() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      return `rgba(${r},${g},${b},0.5)`;
    },
    gotoSong(song) {
      console.log(song.songid);
      window.location = `https://y.qq.com/n/yqq/song/${song.songid}_num.html#stat=y_new.index.toplist.songname`;
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  padding-top: 20px;
}
h3 {
  text-align: center;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
}

#rank,
#content {
  min-width: 900px;
}
#content {
  display: flex;
  justify-content: center;
}
.showBlock {
  display: inline-block;
  height: 450px;
  width: 20%;
  margin: 20px;
}
ul,
li {
  text-align: center;
  list-style: none;
  color: white;
  font-family: fantasy;
  margin-left: -25px;
}
</style>