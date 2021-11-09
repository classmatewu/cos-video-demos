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
    <CodeCard class="code-card" :codeDemoMap="videojsCodeDemoMap" />
  </div>
</template>

<script setup>
import $ from 'jquery';
import {inject, onMounted, ref, watch} from 'vue';
import {videojsCodeDemoMap, videoUrlMap} from '../utils';
import CodeCard from './CodeCard.vue';
const videoType = inject('videoType')
const src = ref('https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4')
let videoPlayer = null

watch(videoType.featureType, async () => {
  videoPlayer.src(videoUrlMap[videoType.featureType.value]);
})

onMounted(async () => {
  await $.getScript('https://vjs.zencdn.net/7.15.4/video.min.js')
  videoPlayer = videojs(document.getElementById('videojs-player'), {
    controls: true, // 是否显示控制条
    poster: 'xxx', // 视频封面图地址
    height: '500px',
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

<style>
.wapper {
  width: 100%;
  display: flex;
}
#videojs-player {
  width: 50%;
  height: 500px;
}
.video-js {
  height: 500px;
}

.videojs-player-dimensions.vjs-fluid {
  padding-top: 0;
}

.code-card {
  width: 50%!important;
}

@media (max-width: 768px) {
  .wapper {
    display: flex;
    flex-direction: column;
  }
  #videojs-player, .code-card {
    width: 100%!important;
  }
}
</style>