<!-- 消息 -->
<template>
  <div class="">
    <video
      ref="video"
      class="video"
      style="width: 100%; height: 200px"
      controls
    >
      <source type="video/mp4" :src="path" />
    </video>

    <u-divider text="分割线" :dashed="true"></u-divider>

    <uni-card title="简介" extra="额外信息">
      <text>
        这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。
      </text>
    </uni-card>

    <!-- <audio style="text-align: left" controls></audio> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const path = ref<string>("");
</script>

<style lang="scss" scoped></style>
