<template>
  <div class="mx-auto video-demos-wapper">
    <TCPlayerDemos v-if="videoType.playerType.value === 'TCPlayer'" />
    <VideoPlayerDemos v-else-if="videoType.playerType.value === 'VideoJs'" />
    <DPlayerDemos v-else-if="videoType.playerType.value === 'DPlayer'" />
  </div>
</template>

<script setup>
import {inject, reactive, watch} from 'vue';
import DPlayerDemos from './DPlayerDemos.vue';
import TCPlayerDemos from './TCPlayerDemos.vue';
import VideoPlayerDemos from './VideoPlayerDemos.vue';

const state = reactive({ count: 0 })
const videoType = inject('videoType')
watch(videoType.playerType, (value) => {
  console.log(value);
})
</script>

<style scoped>
a {
  color: #42b983;
}
.video-demos-wapper {
  width: 88vw;
}
</style>
