<template>
  <div class="flex">
    <link href="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css" rel="stylesheet">
    <video id="player-container-id" preload="auto" width="600" height="400" playsinline webkit-playsinline x5-playsinline></video>
    <n-card title="代码片段"> 所见即所得 </n-card>
  </div>
</template>

<script setup>
import $ from 'jquery';
import {NCard} from 'naive-ui';
import {inject, onMounted, watch} from 'vue';

const videoType = inject('videoType')
const videoUrlMap = {
  'ordinary-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
  'ordinary-private': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/mv.mp4?q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1635933538;1638525538&q-key-time=1635933538;1638525538&q-header-list=&q-url-param-list=&q-signature=9e3486b353d2b4469a324039a20f9ad2fc136644',
  'hls-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/m3u8/mu/123.21d.m3u8',
  'hls-private': 'https://nj-flynnzzhang-1253960454.cos.ap-nanjing.myqcloud.com/test.m3u8?ci-process=pm3u8&expires=3600&q-sign-algorithm=sha1&q-ak=AKIDhJ5feQMtKYUSCTqdS0Ng05OYaTZSeckw&q-sign-time=1636011566;1636018766&q-key-time=1636011566;1636018766&q-header-list=&q-url-param-list=&q-signature=9918c3c90ce978723ce30d5dd0afd3dde0dfcd42',
  'hls-encrypt': 'https://video-test-1259789488.cos.ap-guangzhou.myqcloud.com/hls-encrypt/example.m3u8',
}
let tcplayer = null

watch(videoType.featureType, async () => {
  console.log(1, tcplayer);
  tcplayer?.src(videoUrlMap[videoType.featureType.value])
})

onMounted(async () => {
  await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js')
  await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js')
  tcplayer = TCPlayer("player-container-id", {})
  tcplayer.src('https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4')
})
</script>

<style>

</style>