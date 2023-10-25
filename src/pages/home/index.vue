<!-- 首页 -->
<template>
  <div class="">
    <!-- 公告 -->
    <uni-notice-bar
      show-icon
      scrollable
      text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    />
    <!-- 搜索 -->
    <uni-search-bar
      class="uni-mt-10"
      radius="100"
      placeholder="输入搜索条件"
      clearButton="none"
      cancelButton="none"
      @confirm="search"
    />
    <!--  -->
    <u-tabs :list="tabs" @click="tabsChange"></u-tabs>

    <div class="videoListBox">
      <!-- 轮播图 -->
      <u-swiper
        :list="videoList"
        keyName="image"
        showTitle
        :autoplay="true"
        circular
      ></u-swiper>

      <VideoList :videoList="videoList"></VideoList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VideoList from "@/components/VideoList/index.vue";

import { hotVideo } from "@/apis/video";

function search(res: any) {
  uni.showToast({
    title: "搜索：" + res.value + "页面跳转",
    icon: "none",
  });
}

const videoList = ref<any[]>();
const hotVideoList = ref<any>();
const tabs = ref<any[]>();

//处理请求的视频数据
function getHotVideo() {
  hotVideo().then((res: any) => {
    hotVideoList.value = res.data;

    videoList.value = res.data.all.videoList.map((item: any) => {
      return { ...item, image: item.picture };
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
    return { ...item, image: item.picture };
  });
}

getHotVideo();
</script>

<style lang="scss" scoped>
.swiper-box {
  height: 200px;
}
.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #fbfbfb;
  background-color: #cee1fd;
}

.videoListBox {
  width: 100%;
  height: 450px;
  overflow: auto;
}
</style>
