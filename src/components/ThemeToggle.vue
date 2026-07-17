<script setup>
import { useTheme } from '../composables/useTheme.js'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'"
  >
    {{ theme === 'dark' ? '☀' : '☾' }}
  </button>
</template>
