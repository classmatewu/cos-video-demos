<template>
  <DPlayerDemos />
  <!-- <n-h3 style="text-align: center;">COS Video Demos</n-h3>
  <n-tabs type="segment">
    <n-tab-pane name="chap1" tab="DPlayer">
      <DPlayerDemos />
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="TCPlayer">
      TCPlayer
    </n-tab-pane>
    <n-tab-pane name="chap3" tab="VideoJs">
      VideoJs
    </n-tab-pane>
  </n-tabs> -->
</template>

<script setup>
import {NDivider, NH3, NTabPane, NTabs} from 'naive-ui';
import {defineProps, reactive} from 'vue';
import DPlayerDemos from './DPlayerDemos.vue';

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
