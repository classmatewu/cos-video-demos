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

const theme = ref(null)
const onThemeChange = () => {
  theme.value = theme.value ? null : darkTheme
}

const playerType = ref('TCPlayer')
const onPlayerSelect = (value) => {
  playerType.value = value
}
const featureType = ref('ordinary-public')
const onFeatureSelect = (value) => {
  featureType.value = value
}

provide('videoType', {
  playerType,
  featureType,
  theme,
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
.video-demos-wapper, .n-card, .n-card.n-card--bordered {
  width: 100%;
}
.n-config-provider {
  display: flex;
  justify-content: center;
  height: 100%;
}
.n-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-demos-wapper {
  margin-top: 50px;
}
@media (max-width: 768px) {
  #app {
    height: 100%;
  }
  .video-demos-wapper {
    margin-top: 10px;
  }
}
</style>
