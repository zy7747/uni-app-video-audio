<!-- 首页 -->
<template>
  <div class="">
    <!--  -->
    <u-tabs :list="tabs" @click="tabsChange"></u-tabs>

    <div class="videoListBox">
      <!-- 轮播图 -->
      <u-swiper
        :radius="6"
        height="20vh"
        class="swiper"
        :list="videoList"
        keyName="image"
        showTitle
        :autoplay="true"
        circular
      ></u-swiper>

      <div style="height: calc(70vh - 44px); overflow: auto">
        <VideoList :videoList="videoList"></VideoList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import VideoList from "@/components/VideoList/index.vue";
import { hotVideo } from "@/apis/video";

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
.videoListBox {
  height: calc(100vh - 44px);
  width: 100%;
  overflow: auto;
}
</style>
