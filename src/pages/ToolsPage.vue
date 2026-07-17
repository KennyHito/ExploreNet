<script setup>
import { tools } from '../data/tools.js'
import ToolCard from '../components/ToolCard.vue'
</script>

<template>
  <section class="page-section">
    <div class="container">
      <!-- <div class="section-head">
        <h2>工具</h2>
        <p>主流工具/平台实操教程与官方直达，双主题自适应</p>
      </div> -->
      <div class="tools-grid">
        <ToolCard v-for="t in tools" :key="t.key" :tool="t" />
      </div>
    </div>
  </section>
</template>
