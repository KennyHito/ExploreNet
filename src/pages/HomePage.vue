<script setup>
import { inject } from 'vue'

const navigate = inject('navigate')

const features = [
  {
    icon: '🧰',
    title: '工具实操',
    desc: '整理好用的网络工具、智能体搭建教程与主流平台实操指南，附带官方直达链接，零基础也能直接上手。',
    target: 'tools'
  },
  {
    icon: '📰',
    title: '前沿资讯',
    desc: '一手获取最新AI与科技方向前沿资讯，查看每日更新，持续稳定输出。',
    target: 'news'
  },
  {
    icon: '👤',
    title: '关于本站',
    desc: '介绍关于我，联系请前往GitHub留言。',
    target: 'about'
  },
  {
    icon: '💡',
    title: '网站说明',
    desc: '沉淀个人学习成果、整理可落地的实操经验，无广告无营销，纯公益干货分享。',
    target: 'about'
  }
]

const intro = [
  '在人工智能飞速迭代、信息纷繁繁杂的当下，海量AI资讯、零散的工具教程、晦涩的技术干货充斥网络，很多爱好者、职场从业者和入门开发者常常陷入“看得多、学不精、用不上”的困境。正因如此，探索站应运而生，这是一个聚焦人工智能领域的垂直原创博客，以“拆解AI技术、落地AI应用、洞察AI趋势”为核心，专注输出通俗易懂、实战性强、价值纯粹的AI内容，致力于成为大众走进AI、用好AI的优质知识阵地。',
  '探索站始终坚持轻量化、深度化、实用化的内容创作理念，拒绝碎片化水文与同质化搬运。区别于泛科技资讯平台的流量式更新，网站内容全部经过精细筛选与原创打磨，精准覆盖AI新手入门、工具实操、技术拆解、行业趋势、智能体开发五大核心板块，兼顾零基础爱好者的学习需求与进阶开发者的实战需求，适配不同阶段用户的学习与应用场景。',
  '在内容布局上，探索站主打“落地优先、通俗易懂”。针对入门人群，网站梳理了系统化的零基础学习路径，拆解大模型基础、工具用法、提示词技巧等核心内容，规避专业晦涩的术语堆砌，用通俗语言讲透底层逻辑，帮助新手快速建立认知体系，摆脱入门迷茫。针对职场人与自媒体从业者，重点分享办公、内容创作、效率自动化等实战教程，涵盖文案生成、数据处理、智能工作流搭建等实用技能，助力普通人借助工具提升工作效率、解锁副业新技能。',
  '对于深度技术爱好者与开发者，探索站深耕实战开发领域。聚焦主流大模型、智能体、低代码搭建、插件开发、私有化部署等前沿内容，拆解各类工具平台的实操案例，分享可落地的开发思路、避坑技巧与项目经验，拒绝空洞的理论堆砌，让每一篇技术内容都能落地复用，为个人项目开发、企业轻量化改造提供真实参考。',
  '同时，探索站持续追踪行业动态与前沿趋势。实时同步国内外大模型更新、产品迭代、行业政策与创新应用案例，深度解析在办公、自媒体、商业服务、软件开发等领域的落地变革，摒弃片面的热点炒作，客观梳理行业发展脉络，帮助读者精准把握风口，清晰认知行业机遇与发展方向。',
  '自创立以来，探索站始终坚守纯粹的内容初心，不跟风流量热点、不堆砌无效信息，以“让技术更易懂、让工具更实用”为核心使命。在全民普及的时代，不再让前沿技术遥不可及，也不再让学习流于表面。无论是想要入门的普通爱好者、想要借力提效的职场人，还是深耕领域的开发者，都能在这里找到适配自己的学习内容与实战方法。',
  '未来，探索站将持续深耕垂直领域，持续更新原创教程、实战案例、行业解读内容，不断丰富内容体系，搭建更完善的知识分享平台，陪伴每一位用户持续探索边界，玩转新时代的新机遇。'
]
</script>

<template>
  <section class="page-section">
    <div class="container">
      <div class="section-head">
        <h2>探索站</h2>
        <p>专注AI领域的深度内容博客</p>
      </div>
      <div class="intro-card">
        <p class="intro-text" v-for="(p, i) in intro" :key="i">{{ p }}</p>
      </div>
    </div>
  </section>

  <section class="page-section bg-alt">
    <div class="container">
      <div class="section-head">
        <h2>网站直达</h2>
        <p>从工具到资讯，一站式满足你的学习路径</p>
      </div>
      <div class="feature-grid">
        <div class="card" v-for="f in features" :key="f.title" @click="navigate(f.target)" style="cursor:pointer">
          <div class="ico">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-alt {
  background: var(--bg-secondary);
}

.intro-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow-sm);
}

.intro-text {
  font-size: 16px;
  line-height: 1.95;
  color: var(--text);
  opacity: 0.82;
  margin: 0 0 18px;
}

.intro-text:last-child {
  margin-bottom: 0;
}

@media (max-width: 734px) {
  .intro-card {
    padding: 22px;
  }

  .intro-text {
    font-size: 15px;
    line-height: 1.85;
  }
}
</style>
