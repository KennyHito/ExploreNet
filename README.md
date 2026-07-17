# 探索站 (ExploreNet)

> 专注 AI 领域的深度内容博客，拆分工具实操、前沿资讯与个人学习沉淀，无广告、纯公益干货分享。

探索站是一个基于 **Vue 3 + Vite** 构建的个人静态网站，聚焦人工智能领域，以「拆解 AI 技术、落地 AI 应用、洞察 AI 趋势」为核心，提供通俗易懂、实战性强的原创内容。

## ✨ 功能特性

- **四大板块**
  - 🏠 **首页**：站点介绍 + 网站直达入口（工具 / 资讯 / 关于）
  - 🧰 **工具**：主流 AI 工具与平台实操指南，附带官方直达链接（如 OpenClaw、WorkBuddy、Coze 等）
  - 📰 **资讯**：按日期分组归档的前沿 AI / 科技资讯，点击日期可展开 / 收起，最新内容默认展开
  - 👤 **关于**：作者介绍、学习经历与 GitHub 开源项目导航
- **亮 / 暗双主题**：基于 CSS 变量的主题系统，支持一键切换，偏好通过 `localStorage` 持久化；首屏内联脚本提前设置主题属性，**无主题闪烁**
- **Hash 路由**：基于 URL hash 的轻量路由（`#/home`、`#/tools`、`#/news`、`#/about`），刷新可保持当前页、可直接访问指定板块
- **响应式布局**：移动端（≤734px）自动切换为单列，导航 Tab 支持横向滚动
- **页面切换动画**：纯 CSS 进入动画，并尊重系统「减少动态效果」无障碍设置
- **吸顶毛玻璃导航**：滚动时固定顶部，半透明 + 背景模糊

## 🛠 技术栈

| 类别 | 说明 |
| --- | --- |
| 前端框架 | Vue 3（`<script setup>` 语法） |
| 构建工具 | Vite 5 |
| 路由方案 | 原生 `hashchange` 事件驱动的轻量路由（无第三方路由库） |
| 状态共享 | Vue `provide / inject` + Composition API（`composables/useTheme.js`） |
| 样式 | 原生 CSS + CSS 变量（主题 / 间距统一维护），含 `scoped` 局部样式 |
| 主题持久化 | `localStorage`（`explorenet-theme`） |

## 📂 项目结构

```
ExploreNet/
├── index.html              # 入口 HTML，含主题预设置内联脚本
├── vite.config.js          # Vite 配置（端口 5173，host 开启）
├── package.json
├── favicon.ico / main_icon.png
└── src/
    ├── main.js             # 应用入口，挂载 App、引入全局样式与主题
    ├── App.vue             # 根组件：路由调度、导航 / 页脚装配
    ├── style.css           # 全局样式 + 亮暗主题变量 + 响应式
    ├── components/
    │   ├── AppNav.vue       # 吸顶导航栏（Logo + Tab + 主题切换）
    │   ├── AppFooter.vue    # 页脚
    │   ├── ThemeToggle.vue  # 日 / 夜模式切换按钮
    │   ├── ToolCard.vue     # 工具卡片
    │   └── NewsPanel.vue    # 资讯按日期折叠面板
    ├── composables/
    │   └── useTheme.js      # 主题状态与切换逻辑（全局单例）
    ├── data/
    │   ├── tools.js         # 工具板块数据源
    │   └── news.js          # 资讯板块数据源（按日期分组）
    └── pages/
        ├── HomePage.vue     # 首页
        ├── ToolsPage.vue    # 工具页
        ├── NewsPage.vue     # 资讯页
        └── AboutPage.vue    # 关于页
```

## 🚀 快速开始

环境要求：Node.js（建议 18+）

```bash
# 安装依赖
npm install

# 启动本地开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 预览生产构建
npm run preview
```

## 🔧 自定义与扩展

- **新增 / 修改工具**：编辑 `src/data/tools.js`，每条记录支持 `name`、`desc`、`features`、`steps`、`scenarios`、`link`、`linkText` 等字段，卡片会自动渲染。
- **新增 / 修改资讯**：编辑 `src/data/news.js`，按日期分组（`date` + `expanded` + `items[]`），`expanded: true` 的日期默认展开。
- **调整主题配色**：在 `src/style.css` 的 `:root` 与 `[data-theme="dark"]` 中修改 CSS 变量（如 `--accent` 强调色、`--bg` 背景色等）。
- **新增页面 / 板块**：在 `src/pages/` 下新建页面组件，并在 `src/App.vue` 的 `tabs` 数组中注册即可（路由由 hash 自动驱动）。

## 📄 说明

本站为个人学习分享用途，内容均为原创打磨与整理，不跟风流量、不堆砌无效信息。工具板块涉及的网络工具仅用于合规的技术学习与资料查阅，请严格遵守所在地法律法规。

© 2026 探索站 ｜ 个人分享 · 仅供学习
