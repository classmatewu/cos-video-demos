<template>
  <link
    href="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css"
    rel="stylesheet"
  />
  <div class="flex wapper">
    <video id="tcplayer-video" preload="auto" playsinline webkit-playsinline x5-playsinline></video>
    <CodeCard class="code-card" :codeDemoMap="tcplayerCodeDemoMap" />
  </div>
  
</template>

<script setup>
import "codemirror-editor-vue3/dist/style.css"; // plugin-style
import "codemirror/mode/javascript/javascript.js"; // language
// import $ from 'jquery';
// import {html as beautifyHtml} from 'js-beautify';
import {inject, onMounted, ref, watch} from 'vue';
import {tcplayerCodeDemoMap, videoUrlMap} from '../utils';
import CodeCard from './CodeCard.vue';

const videoType = inject('videoType')

const demoCode = ref('')
let tcplayer = null

watch(videoType.featureType, async () => {
  tcplayer?.src(videoUrlMap[videoType.featureType.value])
  demoCode.value = tcplayerCodeDemoMap[videoType.featureType.value]
}, {
  immediate: true
})

onMounted(async () => {
  // await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js')
  // await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js')
  tcplayer = TCPlayer("tcplayer-video", {})
  tcplayer.src('https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4')
})

const code = ref(`
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}`)
const cmOptions = {
  mode: 'text/javascript', // 语言模式
  theme: 'icecoder', // 主题
  lineNumbers: true, // 显示行号
  smartIndent: true, // 智能缩进
  indentUnit: 2, // 智能缩进单位为4个空格长度
  foldGutter: true, // 启用行槽中的代码折叠
  styleActiveLine: true, // 显示选中行的样式
}
</script>

<style scoped>
.wapper {
  width: 100%;
}
#tcplayer-video {
  width: 50%;
  height: 500px;
}
.code-card {
  width: 50%;
  white-space: pre-wrap;
  height: 500px;
  display: flex;
}

@media (max-width: 768px) {
  .wapper {
    display: flex;
    flex-direction: column;
  }
  #tcplayer-video, .code-card {
    width: 100%!important;
  }
}
</style>