<template>
  <div class="mx-auto mx-auto lg:w-1000px lg:h-1000px">
    <DPlayerDemos />
  </div>
</template>

<script setup>
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
