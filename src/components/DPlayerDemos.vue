<template>
  <div class="player-wapper">
    <div id="dplayer-video"></div>
    <div class="code-card border">代码片段</div>
  </div>
</template>

<script setup>
import DPlayer from 'dplayer';
import $ from 'jquery';
import {defineProps, inject, onMounted, reactive, watch} from 'vue';

defineProps({
  msg: String
})

const videoType = inject('videoType')
const state = reactive({ count: 0 })
let dp = null

onMounted(async () => {
  dp = new DPlayer({
      container: document.getElementById('dplayer-video'),
      video: {
          url: 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
      },
  });
})

const videoUrlMap = {
  'ordinary-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
  'ordinary-private': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/mv.mp4?q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1635933538;1638525538&q-key-time=1635933538;1638525538&q-header-list=&q-url-param-list=&q-signature=9e3486b353d2b4469a324039a20f9ad2fc136644',
  'hls-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/m3u8/mu/123.21d.m3u8',
  'hls-private': 'https://nj-flynnzzhang-1253960454.cos.ap-nanjing.myqcloud.com/test.m3u8?ci-process=pm3u8&expires=3600&q-sign-algorithm=sha1&q-ak=AKIDhJ5feQMtKYUSCTqdS0Ng05OYaTZSeckw&q-sign-time=1636011566;1636018766&q-key-time=1636011566;1636018766&q-header-list=&q-url-param-list=&q-signature=9918c3c90ce978723ce30d5dd0afd3dde0dfcd42',
  'hls-encrypt': 'https://video-test-1259789488.cos.ap-guangzhou.myqcloud.com/hls-encrypt/example.m3u8',
}

watch(videoType.playerType, () => {
})
watch(videoType.featureType, async () => {
  if (videoType.featureType.value.includes('hls')) await $.getScript('https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js')
  dp.switchVideo({
    url: videoUrlMap[videoType.featureType.value]
  })
})

</script>

<style scoped>
#dplayer-video {
  width: 50%;
  height: 500px;
}
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
.player-wapper {
  display: flex;
  width: 100%;
}
.n-input {
  width: 100%;
}
.n-icon {
  cursor: pointer;
}
.code-card {
  width: 50%;
}
</style>
