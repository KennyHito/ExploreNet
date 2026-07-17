<script setup>
import ThemeToggle from './ThemeToggle.vue'

defineProps({
  tabs: { type: Array, required: true },
  current: { type: String, required: true }
})
const emit = defineEmits(['switch'])
</script>

<template>
  <nav class="nav">
    <div class="nav-left">
      <button class="nav-logo" @click="emit('switch', 'home')" aria-label="返回首页" title="返回首页">
        <img src="/main_icon.png" alt="探索站" width="32" height="32" />
      </button>
      <div class="nav-tabs">
        <a v-for="t in tabs" :key="t.key" class="tab" :class="{ active: t.key === current }"
          @click.prevent="emit('switch', t.key)">{{ t.label }}</a>
      </div>
    </div>
    <div class="nav-actions">
      <ThemeToggle />
    </div>
  </nav>
</template>
