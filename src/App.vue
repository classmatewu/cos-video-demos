<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <n-config-provider :theme="theme">
    <n-card>
      <NavBar @onThemeChange="onThemeChange" @onPlayerSelect="onPlayerSelect" @onFeatureSelect="onFeatureSelect" />
      <VideoDemos class="video-demos-wapper" msg="Hello COS Video demos" />
    </n-card>
  </n-config-provider>
</template>

<script setup>
import {darkTheme, NCard, NConfigProvider} from 'naive-ui';
import {provide, ref} from 'vue';
import NavBar from './components/NavBar.vue';
import VideoDemos from './components/VideoDemos.vue';

const theme = ref(darkTheme)
const onThemeChange = () => {
  theme.value = theme.value ? null : darkTheme
}

const playerType = ref('')
const onPlayerSelect = (value) => {
  playerType.value = value
}
const featureType = ref('')
const onFeatureSelect = (value) => {
  featureType.value = value
}

provide('videoType', {
  playerType,
  featureType,
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
.video-demos-wapper {
  width: 900px;
}
</style>
