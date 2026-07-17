<script setup>
import { ref } from 'vue'

const props = defineProps({
  group: { type: Object, required: true }
})

// 最新日期默认展开，历史日期默认折叠（来自数据里的 expanded 字段）
const open = ref(props.group.expanded)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div class="news-group" :class="{ open }">
    <button class="news-date" @click="toggle" :aria-expanded="open">
      <span>{{ group.date }}</span>
      <span class="arrow">▾</span>
    </button>
    <div class="news-items" :hidden="!open">
      <div class="news-item" v-for="(item, i) in group.items" :key="i">
        <h4>{{ item.title }}</h4>
        <p class="summary">{{ item.summary }}</p>
        <div class="news-tags">
          <span v-for="(tag, j) in item.tags" :key="j">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
