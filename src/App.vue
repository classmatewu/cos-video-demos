<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <n-config-provider :theme="theme">
    <n-card>
      <n-space>
        <NavBar @onThemeChange="onThemeChange" />
        <VideoDemos class="video-demos-wapper" msg="Hello COS Video demos" />
      </n-space>
    </n-card>
  </n-config-provider>
</template>

<script setup>
import VideoDemos from './components/VideoDemos.vue';
import NavBar from './components/NavBar.vue'
import { NConfigProvider, NCard, NButton,darkTheme  } from 'naive-ui'
import {ref} from 'vue'

const theme = ref(darkTheme)
const onThemeChange = () => {
  console.log(2);
  theme.value = theme.value ? null : darkTheme
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1600px;
}
.video-demos-wapper {
  width: 900px;
}
</style>
