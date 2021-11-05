<template>
  <link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet" />
  <div class="wapper">
    <video id="videojs-player" class="video-js vjs-big-play-centered vjs-fluid">
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    <div class="code-card border">代码片段</div>
  </div>
</template>

<script setup>
import $ from 'jquery';
import {inject, onMounted, ref, watch} from 'vue';
const videoType = inject('videoType')
const src = ref('https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4')
let videoPlayer = null
const videoUrlMap = {
  'ordinary-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
  'ordinary-private': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/mv.mp4?q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1635933538;1638525538&q-key-time=1635933538;1638525538&q-header-list=&q-url-param-list=&q-signature=9e3486b353d2b4469a324039a20f9ad2fc136644',
  'hls-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/m3u8/mu/123.21d.m3u8',
  'hls-private': 'https://nj-flynnzzhang-1253960454.cos.ap-nanjing.myqcloud.com/test.m3u8?ci-process=pm3u8&expires=3600&q-sign-algorithm=sha1&q-ak=AKIDhJ5feQMtKYUSCTqdS0Ng05OYaTZSeckw&q-sign-time=1636011566;1636018766&q-key-time=1636011566;1636018766&q-header-list=&q-url-param-list=&q-signature=9918c3c90ce978723ce30d5dd0afd3dde0dfcd42',
  'hls-encrypt': 'https://video-test-1259789488.cos.ap-guangzhou.myqcloud.com/hls-encrypt/example.m3u8',
}

watch(videoType.featureType, async () => {
  videoPlayer.src(videoUrlMap[videoType.featureType.value]);
})

onMounted(async () => {
  await $.getScript('https://vjs.zencdn.net/7.15.4/video.min.js')
  videoPlayer = videojs(document.getElementById('videojs-player'), {
    controls: true, // 是否显示控制条
    poster: 'xxx', // 视频封面图地址
    preload: 'auto',
    autoplay: false,
    fluid: true, // 自适应宽高
    language: 'zh-CN', // 设置语言
    muted: false, // 是否静音
    inactivityTimeout: false,
    controlBar: { // 设置控制条组件
      /* 设置控制条里面组件的相关属性及显示与否
      'currentTimeDisplay':true,
      'timeDivider':true,
      'durationDisplay':true,
      'remainingTimeDisplay':false,
      volumePanel: {
        inline: false,
      }
      */
      /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
      children: [
        {name: 'playToggle'}, // 播放按钮
        {name: 'currentTimeDisplay'}, // 当前已播放时间
        {name: 'progressControl'}, // 播放进度条
        {name: 'durationDisplay'}, // 总时间
        { // 倍数播放
          name: 'playbackRateMenuButton',
          'playbackRates': [0.5, 1, 1.5, 2, 2.5]
        },
        {
          name: 'volumePanel', // 音量控制
          inline: false, // 不使用水平方式
        },
        {name: 'FullscreenToggle'} // 全屏
      ]
    },
    sources:[ // 视频源
        {
            src: 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
            type: 'video/mp4',
            poster: 'https://vjs.zencdn.net/v/oceans.png'
        }
    ]
  }, function () {
    console.log('视频可以播放了',this);
  });
})
</script>

<style scoped>
.wapper {
  width: 100%;
  display: flex;
}
#videojs-player {
  width: 50%;
  height: 500px;
}
.code-card {
  width: 50%;
}
</style>