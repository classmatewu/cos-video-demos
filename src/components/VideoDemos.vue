<template>
  <div class="mx-auto mx-auto w-1500px h-700px video-demos-wapper">
    <TCPlayerDemos v-if="videoType.playerType.value === 'TCPlayer'" />
    <DPlayerDemos v-else-if="videoType.playerType.value === 'DPlayer'" />

  </div>
</template>

<script setup>
import {inject, reactive, watch} from 'vue';
import DPlayerDemos from './DPlayerDemos.vue';
import TCPlayerDemos from './TCPlayerDemos.vue';

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
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
