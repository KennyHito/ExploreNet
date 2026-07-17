import { ref, watch } from 'vue'

const STORAGE_KEY = 'explorenet-theme'

function initial() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'light'
  } catch (e) {
    return 'light'
  }
}

const theme = ref(initial())

function apply(value) {
  document.documentElement.setAttribute('data-theme', value)
}

// 模块加载即应用（main.js 已 import，index.html 内联脚本已提前设置避免闪烁）
apply(theme.value)

watch(theme, (value) => {
  apply(value)
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch (e) {}
})

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  return { theme, toggle }
}
