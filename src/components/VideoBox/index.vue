<!-- 视频盒子 -->
<template>
  <div class="videoBox">
    <image
      style="width: 100%; height: 70%"
      mode="scaleToFill"
      src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
    >
    </image>
    <div style="width: 100%; height: 30%" class="videoInfo">
      <div class="title">
        {{ videoInfo.title }}
      </div>
      <span class="author" :title="videoInfo.author">
        {{ "作者：" + videoInfo.author }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  videoInfo: {
    text: "视频信息",
    type: [Object],
    default: () => {
      return {};
    },
  },
});

function videoView(videoInfo: any) {}
</script>

<style lang="scss" scoped>
.videoBox {
  width: 175px;
  height: 175px;
  margin: 5px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  .videoInfo {
    padding: 5px;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #61666d;
    font-size: 12px;
  }
}
</style>
