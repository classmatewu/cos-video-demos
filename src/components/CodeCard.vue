<template>
  <Codemirror
    id="code-card"
    v-model:value="code"
    :options="cmOptionsRef"
    border
    placeholder="测试 placeholder"
    :height="500"
  />
</template>

<script setup>
import Codemirror from "codemirror-editor-vue3";
import "codemirror-editor-vue3/dist/style.css"; // plugin-style
import "codemirror/mode/xml/xml.js"; // language
import "codemirror/theme/icecoder.css"; // 深色主题
import "codemirror/theme/idea.css"; // 浅色主题
import $ from 'jquery';
import {inject, onMounted, reactive, ref, watch} from 'vue';

const props = defineProps({
  codeDemoMap: Object,
})

const videoType = inject('videoType')
const code = ref('')
const codeMirrorTheme = ref('')
const cmOptions = {
  mode: 'xml', // 语言模式
  htmlMode: true,
  theme: '', // 主题
  lineNumbers: true, // 显示行号
  smartIndent: true, // 智能缩进
  indentUnit: 2, // 智能缩进单位为4个空格长度
  foldGutter: true, // 启用行槽中的代码折叠
  styleActiveLine: true, // 显示选中行的样式
}
const cmOptionsRef = reactive(cmOptions)

watch(videoType.featureType, async () => {
  code.value = props.codeDemoMap[videoType.featureType.value]
}, {
  immediate: true
})
watch(videoType.theme, (value) => {
  cmOptionsRef.theme = value ? 'icecoder' : 'idea'
}, {
  immediate: true
})

onMounted(async () => {
  await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js')
  await $.getScript('https://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js')
})
</script>

<style scoped>

</style>