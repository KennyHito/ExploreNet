<script setup>
import { inject } from 'vue'

const navigate = inject('navigate')

</script>

<template>
  <section class="page-section">
    <h2 class="intro-title">💡 Hey! I'm KennyHito. 🐘</h2>
    <div class="container prose">
      <div class="card">
        <div class="intro-list">
          <p>☕️ 你好呀！</p>
          <p>🦌 本人历经初创公司、互联网公司，目前在金融公司！</p>
          <p>
            🍇 本人<a class="inline-link" href="https://go.huajic.com/?path=auth/register&code=d39H" target="_blank"
              rel="noopener">自用梯子🪜</a>，可先注册试用 24 小时，个人觉得还是很稳定！（可能网页会提示不安全，不用管，直接继续访问即可。）
          </p>
          <p>🤔 主攻 iOS 和 Vue！</p>
          <p>
            📱 iOS 在工作中主要采用 Objective-C 开发语言，日常写了一些功能（封装），若你有需要可自行查看，<a class="inline-link"
              href="https://github.com/KennyHito/StudyiOS" target="_blank" rel="noopener">StudyiOS</a>。
          </p>
          <div>
            💻 Vue 是学习尚硅谷 B站教学视频，感兴趣的可以看看禹神讲解。
            <div class="intro-sublist">
              <p>①、尚硅谷前端入门 html+css 零基础教程，零基础前端开发 html5+css3 视频 <a class="inline-link"
                  href="https://github.com/KennyHito/WebBasic" target="_blank" rel="noopener">WebBasic</a>。</p>
              <p>②、尚硅谷 Vue2.0+Vue3.0 全套教程丨vuejs 从入门到精通 <a class="inline-link"
                  href="https://github.com/KennyHito/VueBasic" target="_blank" rel="noopener">VueBasic（第一部分）</a>、<a
                  class="inline-link" href="https://github.com/KennyHito/VueTest" target="_blank"
                  rel="noopener">VueTest（第二部分）</a>和<a class="inline-link" href="https://github.com/KennyHito/Vue3Test"
                  target="_blank" rel="noopener">Vue3Test（第三部分）</a>。</p>
              <p>③、尚硅谷 Vue3 入门到实战，最新版 vue3+TypeScript 前端开发教程 <a class="inline-link"
                  href="https://github.com/KennyHito/HelloVue3" target="_blank" rel="noopener">HelloVue3</a>。</p>
            </div>
            🍋 若以上某个项目对你有所帮助，希望可以在 GitHub 上点个 Star 和 Fork 🤗！
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
