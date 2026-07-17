<script setup>
defineProps({
  tool: { type: Object, required: true }
})
</script>

<template>
  <div class="card tool-card">
    <h3>{{ tool.name }}</h3>
    <p class="desc">{{ tool.desc }}</p>

    <template v-if="tool.example">
      <p class="sub"><span class="example-name">{{ tool.example }}</span></p>
      <p class="sub">{{ tool.exampleDesc }}</p>
    </template>

    <template v-if="tool.steps && tool.steps.length">
      <p class="sub">使用教程</p>
      <ol class="steps">
        <li v-for="(s, i) in tool.steps" :key="i">{{ s }}</li>
      </ol>
    </template>

    <template v-if="tool.scenarios && tool.scenarios.length">
      <p class="sub">核心使用场景</p>
      <div class="chips">
        <span class="chip" v-for="(c, i) in tool.scenarios" :key="i">{{ c }}</span>
      </div>
    </template>

    <template v-if="tool.features && tool.features.length">
      <p class="sub">核心功能</p>
      <div class="chips">
        <span class="chip" v-for="(f, i) in tool.features" :key="i">{{ f }}</span>
      </div>
    </template>

    <a class="btn btn-primary" :href="tool.link" target="_blank" rel="noopener noreferrer">
      {{ tool.linkText }} ↗
    </a>
  </div>
</template>
