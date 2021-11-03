<template>
  <n-dropdown :options="options">
    <n-button>用户资料1</n-button>
  </n-dropdown>
  <n-dropdown :options="options">
    <n-button>用户资料2</n-button>
  </n-dropdown>
  <n-button @click="onThemeChange">{{themeName}}</n-button>
  <n-divider />
</template>

<script setup>
import { h, defineComponent, defineEmits, ref } from 'vue'
import { NIcon, NDropdown, NButton, NDivider } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const emit = defineEmits(['onThemeChange'])
const themeName = ref('深色')
const onThemeChange = () => {
  console.log(1);
  themeName.value = themeName.value === '深色' ? '浅色' : '深色'
  emit('onThemeChange')
}


const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]
</script>