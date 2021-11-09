<template>
  <div class="navbar-wapper">
    <n-gradient-text type="info"> COS Video Demos </n-gradient-text>
    <div class="navbar-actions">
      <n-dropdown :options="playerType" @select="onPlayerSelect">
      <n-button>{{curPlayerType}}</n-button>
      </n-dropdown>
      <n-dropdown :options="featureType" @select="onFeatureSelect">
        <n-button>{{curFeatureType}}</n-button>
      </n-dropdown>
      <n-button @click="onThemeChange">{{themeName}}</n-button>
    </div>
  </div>
  <n-divider />
</template>

<script setup>
import {LogOutOutline as LogoutIcon, Pencil as EditIcon, PersonCircleOutline as UserIcon} from '@vicons/ionicons5'
import {NButton, NDivider, NDropdown, NGradientText, NIcon} from 'naive-ui'
import {h, ref} from 'vue'

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const curPlayerType = ref('TCPlayer')
const curFeatureType = ref('COS公有读普通视频')

const emit = defineEmits(['onThemeChange', 'onPlayerSelect', 'onFeatureSelect'])
const themeName = ref('深色')
const onThemeChange = () => {
  themeName.value = themeName.value === '深色' ? '浅色' : '深色'
  emit('onThemeChange')
}

const playerType = ref([
  {
    label: 'TCPlayer',
    key: 'TCPlayer',
    icon: renderIcon(EditIcon)
  },
  {
    label: 'VideoJs',
    key: 'VideoJs',
    icon: renderIcon(LogoutIcon)
  },
  {
    label: 'DPlayer',
    key: 'DPlayer',
    icon: renderIcon(UserIcon)
  },
])

const DPlayerFeatureList = [
  {
    label: 'COS公有读普通视频',
    key: 'ordinary-public',
    icon: renderIcon(UserIcon)
  },
  {
    label: 'COS私有读普通视频',
    key: 'ordinary-private',
    icon: renderIcon(EditIcon)
  },
  {
    label: 'COS公有读HLS视频',
    key: 'hls-public',
    icon: renderIcon(LogoutIcon)
  },
  {
    label: 'COS私有读HLS视频',
    key: 'hls-private',
    icon: renderIcon(LogoutIcon)
  },
  {
    label: 'COS HLS 加密视频',
    key: 'hls-encrypt',
    icon: renderIcon(LogoutIcon)
  }
]
const featureKeyMap = {
  'ordinary-public': 'COS公有读普通视频',
  'ordinary-private': 'COS私有读普通视频',
  'hls-public': 'COS公有读HLS视频',
  'hls-private': 'COS私有读HLS视频',
  'hls-encrypt': 'COS HLS 加密视频',
}

const featureType = ref(DPlayerFeatureList)

const onPlayerSelect = (value) => {
  curPlayerType.value = value
  // featureType.value = value === 'DPlayer' ? DPlayerFeatureList : []
  featureType.value = DPlayerFeatureList
  emit('onPlayerSelect', value)
}
const onFeatureSelect = (value) => {
  curFeatureType.value = featureKeyMap[value]
  emit('onFeatureSelect', value)
}
</script>

<style scoped>
.n-gradient-text {
  font-size: 24px;
}
.navbar-wapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:88vw;
}
.navbar-actions {
  display: flex;
  justify-content: space-evenly;
  width: 400px;
}

@media (max-width: 768px) {
  .navbar-wapper {
    flex-direction: column;
  }
  .navbar-actions {
    margin-top: 20px;
  }
}
</style>