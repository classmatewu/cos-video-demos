<template>
  <div class="mx-auto mx-auto w-1500px h-700px video-demos-wapper">
    <DPlayerDemos />
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import DPlayerDemos from './DPlayerDemos.vue';

const state = reactive({ count: 0 })
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
