<!-- 好友 -->
<template>
  <div class="">
    <map
      style="width: 100%; height: 300px"
      :latitude="latitude"
      :longitude="longitude"
      :markers="covers"
    >
    </map>
    <uni-collapse ref="collapse" v-model="value" @change="change">
      <uni-collapse-item title="折叠内容">
        <view class="content">
          <text class="text">
            折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。
          </text>
        </view>
      </uni-collapse-item>
    </uni-collapse>
    <button @click="goLogin">点我跳回登录页</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const current = ref(0);
const value = ref(["0"]);

const latitude = ref(39.909);
const longitude = ref(116.39742);
const covers = ref([
  {
    latitude: 39.909,
    longitude: 116.39742,
  },
  {
    latitude: 39.9,
    longitude: 116.39,
  },
]);

function goLogin() {
  uni.navigateTo({ url: "/pages/systems/login/index" });
}

function change() {}
</script>

<style lang="scss" scoped></style>
