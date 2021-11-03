<template>
  <div id="dplayer-public"></div>
  <!-- <div class="DPlayerDemos-wapper">
    <n-card title="COS公有读视频(mp4/mov/..)">
      <div id="dplayer-public"></div>
      <div class="url-from">
        <n-input round placeholder="cos video url" />
        <n-button type="info">播放</n-button>
      </div>
    </n-card>
    <n-card title="COS私有读视频(需携带签名)">
      <div id="dplayer-private"></div>
      <div class="url-from">
        <n-input round placeholder="cos video url" />
        <n-button type="info">播放</n-button>
      </div>
    </n-card>
    <n-card title="COS公有读HLS视频">
      <div id="dplayer-hls"></div>
      <div class="url-from">
        <n-input round placeholder="cos video url" />
        <n-button type="info">播放</n-button>
      </div>
    </n-card>
  </div> -->
</template>

<script setup>
import DPlayer from 'dplayer';
import $ from "jquery";
import {NButton, NCard, NInput} from 'naive-ui';
import {defineProps, onMounted, reactive} from 'vue';

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

onMounted(async () => {
  new DPlayer({
      container: document.getElementById('dplayer-public'),
      video: {
          url: 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
      },
  });
  new DPlayer({
      container: document.getElementById('dplayer-private'),
      video: {
          url: 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/mv.mp4?q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1635933538;1638525538&q-key-time=1635933538;1638525538&q-header-list=&q-url-param-list=&q-signature=9e3486b353d2b4469a324039a20f9ad2fc136644',
      },
  });
  await $.getScript('https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js')
  new DPlayer({
      container: document.getElementById('dplayer-hls'),
      video: {
          url: 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/m3u8/mu/123.21d.m3u8',
      },
  });
})
</script>

<style scoped>
.n-card {
  max-width: 600px;
}
.DPlayerDemos-wapper {
  display: flex;
  justify-content: space-between;
}
.url-from {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.n-input {
  width: 85%;
}
</style>
