<!-- 首页 -->
<template>
  <div class="">
    <!--  -->
    <u-tabs :list="tabs" @click="tabsChange"></u-tabs>

    <div class="videoListBox">
      <!-- 轮播图 -->
      <u-swiper
        height="150px"
        class="swiper"
        :list="videoList"
        keyName="image"
        showTitle
        :autoplay="true"
        circular
      ></u-swiper>

      <div style="height: calc(100vh - 194px); overflow: auto">
        <VideoList :videoList="videoList"></VideoList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VideoList from "@/components/VideoList/index.vue";

import { hotVideo } from "@/apis/video";
import { onMounted } from "vue";

const videoList = ref<any[]>();
const hotVideoList = ref<any>();
const tabs = ref<any[]>();
const baseUrl = import.meta.env.VITE_APP_BASE_API;

//处理请求的视频数据
function getHotVideo() {
  hotVideo().then((res: any) => {
    hotVideoList.value = res.data;

    videoList.value = res.data.all.videoList.map((item: any) => {
      return { ...item, image: baseUrl + item.picture };
    });

    let tab = [];

    for (const key in res.data) {
      tab.push({ ...res.data[key], name: res.data[key].title, key: key });
    }

    tabs.value = tab;
  });
}

function tabsChange(item: any) {
  videoList.value = hotVideoList.value[item.key].videoList.map((item: any) => {
    return { ...item, image: baseUrl + item.picture };
  });
}
onMounted(() => {
  getHotVideo();
});
</script>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fbfbfb;
  background-color: #cee1fd;
  img {
    width: 100%;
    height: 100%;
  }
}

.videoListBox {
  height: calc(100vh - 44px);
  width: 100%;
  overflow: auto;
}
</style>
