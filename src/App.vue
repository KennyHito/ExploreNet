<script setup>
import { ref, computed, provide, onMounted, onUnmounted } from 'vue'
import HomePage from './pages/HomePage.vue'
import ToolsPage from './pages/ToolsPage.vue'
import NewsPage from './pages/NewsPage.vue'
import AboutPage from './pages/AboutPage.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

const tabs = [
  { key: 'home', label: '首页', comp: HomePage },
  { key: 'tools', label: '工具', comp: ToolsPage },
  { key: 'news', label: '资讯', comp: NewsPage },
  { key: 'about', label: '关于', comp: AboutPage }
]

// 从 URL hash 解析当前页（支持刷新保持 / 直接访问 #/tools）
function keyFromHash() {
  const h = (window.location.hash || '').replace(/^#\/?/, '')
  return tabs.some((t) => t.key === h) ? h : 'home'
}

const current = ref(keyFromHash())
const currentComp = computed(() => tabs.find((t) => t.key === current.value).comp)

// tab 切换 = 改变 URL hash；真正的内容切换由 hashchange 驱动
function navigate(key) {
  if (key === current.value) {
    if (key === 'home') {
      try {
        window.scrollTo({ top: 0 })
      } catch (e) {
        /* 某些内嵌环境无 scrollTo，忽略 */
      }
    }
    return
  }
  window.location.hash = '#/' + key
}

function onHashChange() {
  current.value = keyFromHash()
  try {
    window.scrollTo({ top: 0 })
  } catch (e) {
    /* 某些内嵌环境无 scrollTo，忽略 */
  }
}

onMounted(() => window.addEventListener('hashchange', onHashChange))
onUnmounted(() => window.removeEventListener('hashchange', onHashChange))

// 供子页面（如首页快捷入口）触发 tab 切换
provide('navigate', navigate)
</script>

<template>
  <AppNav :tabs="tabs" :current="current" @switch="navigate" />
  <main>
    <component :is="currentComp" :key="current" class="page" />
  </main>
  <AppFooter />
</template>
