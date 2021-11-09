<template>
  <div class="player-wapper">
    <div id="dplayer-video"></div>
    <CodeCard class="code-card" :codeDemoMap="dplayerCodeDemoMap" />
  </div>
</template>

<script setup>
import DPlayer from 'dplayer';
import $ from 'jquery';
import {inject, onMounted, reactive, watch} from 'vue';
import {dplayerCodeDemoMap, videoUrlMap} from '../utils';
import CodeCard from './CodeCard.vue';

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

@media (max-width: 768px) {
  #player-wapper {
    display: flex;
    flex-direction: column;
  }
  #dplayer-video, .code-card {
    width: 100%!important;
  }
}
</style>
