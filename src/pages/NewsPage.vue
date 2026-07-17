<script setup>
import { newsGroups } from '../data/news.js'
import NewsPanel from '../components/NewsPanel.vue'
</script>

<template>
  <section class="page-section">
    <div class="container">
      <!-- <div class="section-head">
        <h2>资讯</h2>
        <p>按日期分组归档，点击日期展开 / 收起，最新内容默认展开</p>
      </div> -->
      <NewsPanel v-for="(g, i) in newsGroups" :key="g.date + i" :group="g" />
    </div>
  </section>
</template>
