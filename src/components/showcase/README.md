# Showcase Collaboration Guide

本目录维护 Hero 区域的三个演示组件：

- `SyncShowcase.tsx`
- `RecommendShowcase.tsx`
- `ReviewShowcase.tsx`

目标不是做一个通用组件库，而是维护三个可以稳定播放、便于协作修改、并且视觉上可控的展示型动画组件。

## 1. 当前结构

### 1.1 文件职责

- `HeroShowcaseCarousel.tsx`
  - 负责三个 showcase 的切换、自动轮播、hover 暂停。
- `SyncShowcase.tsx`
  - CRM 目标选择型 demo。
  - 仍保留独立业务语义，但已经接入共享输入框外壳与结果页原语。
  - 自带系统选择、资产图标、结果页滚动和重播逻辑。
- `RecommendShowcase.tsx`
  - 新一代参考图驱动实现。
  - 使用共享原语构建输入框、结果页、底部输入栏。
- `ReviewShowcase.tsx`
  - 新一代参考图驱动实现。
  - 与 `Recommend` 共用视觉原语和基础交互节奏。
- `showcaseDemoPrimitives.tsx`
  - 三个 showcase 共享的视觉与交互基础层。
  - 这里放“已经稳定且跨 demo 重复出现”的部分。

### 1.2 当前分层

可以把目录理解成两层：

1. 业务 demo 层
   - `SyncShowcase.tsx`
   - `RecommendShowcase.tsx`
   - `ReviewShowcase.tsx`

2. 共享原语层
   - `showcaseDemoPrimitives.tsx`

当前三个 showcase 都接入了共享原语层，但接入深度不同：

- `Sync` 复用外壳、按钮、结果页框架，业务内容仍独立
- `Recommend` / `Review` 复用更完整的视觉结构与时间线工具

## 2. 已收敛的部分

以下内容已经可以视为协作约定：

- 三个 showcase 使用相同的 composer 外壳：
  - `ShowcaseComposerShell`
- `Recommend` 和 `Review` 使用相同的基础 easing：
  - `SHOWCASE_EASE_OUT`
- 相同的输入框玻璃态样式：
  - `SHOWCASE_GLASS_STYLE`
- 相同的结果页外壳和底部固定输入栏：
  - `ShowcaseResultFrame`
- 相同的发送按钮 / 停止按钮视觉：
  - `ShowcaseSendButton`
  - `ShowcaseStopButton`
- 相同的顶部用户消息气泡：
  - `ShowcaseMessageBubble`
- 相同的逐字输入调度方法：
  - `scheduleTyping`

这意味着：

- 如果改动涉及三个 showcase 都会受影响的输入框外壳、消息气泡、底部输入栏、按钮阴影和进入动画，优先改 `showcaseDemoPrimitives.tsx`。
- 如果改动只属于单个 demo 的叙事内容、时间轴、选择器、结果文案，应该留在各自 showcase 文件内部。

## 3. 推荐的协作边界

### 3.1 什么时候应该抽共享层

只有同时满足下面两个条件，才应该抽到 `showcaseDemoPrimitives.tsx`：

- `Recommend` 和 `Review` 至少有两个地方完全复用。
- 提取后不会让单个 showcase 的阅读成本明显变差。

适合抽共享层的内容：

- 固定的视觉 token
- 固定结构的结果页容器
- 明确可复用的按钮
- 无业务语义的时间线工具函数

不适合现在就抽共享层的内容：

- 各 demo 的状态机
- 各 demo 的文案常量
- `Recommend` 的 mention 选择器
- `Sync` 的 CRM 选择面板和资产图标

### 3.2 修改文件时的优先顺序

如果需求只影响 `Recommend` / `Review`：

1. 先看能否只改 `showcaseDemoPrimitives.tsx`
2. 如果不能，再改具体 showcase 文件

如果需求影响 `Sync`：

1. 先判断能否只改共享外壳或结果页原语
2. 如果是系统选择器、Salesforce 标签、结果文案等业务差异，再改 `SyncShowcase.tsx`

### 3.3 时间线修改规范

这三个 showcase 本质上都是“状态机 + 定时器 + 自动重播”。

修改时遵循下面原则：

- 所有 `setTimeout` 必须进入同一个 timeout 容器，并在 cleanup 时统一清理。
- 所有 `requestAnimationFrame` 必须在 cleanup 中取消。
- 重播必须重置：
  - 输入值
  - `showThought`
  - `showContent` / `showResultContent`
  - 滚动容器 `scrollTop`

不要做的事：

- 不要在 showcase 内使用 `window.location.reload()`
- 不要使用页面级 `fixed` 定位脱离当前卡片容器
- 不要把结果区的滚动逻辑藏进难以读懂的抽象里

## 4. 三个 Showcase 的代码检查结论

### 4.1 SyncShowcase

优点：

- 状态流完整，重播和滚动清理都在组件内闭环。
- 资产图标和 CRM 选择过程能表达独立业务语义。
- 结果页文案分组清晰。

问题：

- 业务特性仍然最多，阅读成本高于另外两个 showcase。
- 系统选择器和 Salesforce 标签仍是独立实现。
- 结果页内容结构和 `Recommend` / `Review` 仍然不同，统一成本较高。

结论：

- 目前可维护，且已经接入共享基础层，但仍然是三者中最强业务特化的 demo。

### 4.2 RecommendShowcase

优点：

- 已经有比较清晰的本地状态机。
- 输入框、mention 面板、结果页都贴近参考图。
- 已经把稳定视觉抽到了共享原语中。

问题：

- mention 选择器仍是本地实现，没有再抽更细的共享层。
- 自动滚动逻辑和 `Review` 仍有重复。
- 文案和时间线常量仍是内嵌式，适合 demo，不适合做数据驱动模板。

结论：

- 当前可作为“新一代 showcase” 的实现参考。

### 4.3 ReviewShowcase

优点：

- 与 `Recommend` 使用同一套视觉原语。
- 输入阶段和结果阶段切换清晰。
- 文案结构和滚动展示更适合协作编辑。

问题：

- 自动滚动逻辑与 `Recommend` 近似重复。
- 文案与时间线常量仍在组件内部，适合 demo，不适合数据驱动模板。

结论：

- 当前可作为“文本型结果页 demo”的实现参考。

## 5. 目前无法安全收敛的部分

下面这些点我认为当前不应该强行统一，否则会提高协作成本，或者直接改变已经对齐好的视觉结果。

### 5.1 Sync 与另外两个 showcase 的业务差异

这是当前最大的未收敛项。

原因：

- `Sync` 使用业务资产图标：
  - `salesforce.svg`
  - `hubspot.svg`
  - `gmail.svg`
- `Sync` 的输入态是“目标系统选择”，不是自然语言 mention 或纯文本总结。
- `Sync` 的结果页结构不是参考图驱动的大白面板，而是更偏产品化的卡片结果区。

结论：

- 在没有新的统一设计稿之前，`Sync` 不应该为了代码整齐而继续强行抽象成和另外两个完全一致。

### 5.2 Recommend / Review 的状态机抽象

这两个 showcase 虽然同属新一代实现，但状态转移并不完全一样。

差异：

- `Recommend` 有 mention 面板和高亮选择阶段
- `Review` 没有选择阶段
- 两者输入节奏、内容展开时机、结果页展示结构都不同

结论：

- 现在不建议抽一个“通用 showcase 状态机 hook”。
- 这样做会降低可读性，未来改一个 demo 时反而更难定位。

### 5.3 自动滚动逻辑

`Sync`、`Recommend`、`Review` 都有结果页自动滚动，但参数不同：

- 滚动开始延迟不同
- 滚动时长不同
- 重播等待时间不同
- 内容高度和滚动目标不同

结论：

- 逻辑形态相似，但 API 还没稳定。
- 在没有明确参数协议前，不建议抽通用 hook。

### 5.4 文案数据层

现在三者的内容都直接内嵌在组件文件里。

这在 demo 阶段是合理的，因为：

- 文案本身就是视觉稿的一部分
- 换行、段落长度、输入框高度、滚动节奏都依赖文案长度

结论：

- 当前不建议把文案抽成外部 JSON。
- 如果未来要做多语言或后台配置，需要先重新定义布局和节奏规则。

## 6. 推荐的后续整理方向

如果后面还要继续维护这三个 showcase，建议按下面顺序推进：

1. 先决定 `Sync` 是否要采用和 `Recommend` / `Review` 同一套视觉语言
2. 如果答案是否定的，就接受“`Sync` 是独立体系”这个事实
3. 如果答案是肯定的，再单独做一次 `Sync` 迁移，不要边改边抽象
4. 等 `Recommend` / `Review` 再增加 1 到 2 个同风格 demo 后，再决定是否抽：
   - 自动滚动 hook
   - 结果页 section 组件
   - 统一时间轴配置结构

## 7. 协作时的最低约束

任何人修改本目录代码时，至少满足下面规则：

- 新增共享层前，先判断是否真的跨 demo 复用
- 不要把参考图驱动的视觉实现过早抽象成配置系统
- 任何时间线改动都必须包含 cleanup
- 任何重播逻辑都必须恢复初始状态
- 任何结果页滚动逻辑都必须保证组件卸载时停止
- 修改后至少验证：
  - `npm run lint`
  - `npm run build`

## 8. 当前建议结论

如果把这套代码用于团队协作，当前最合理的共识是：

- `Recommend` 和 `Review` 已经可以按统一规范协作
- `Sync` 目前还是独立实现，不要假装它已经和前两者完全统一
- 这不是坏事，问题不在“有没有统一”，而在“有没有把边界写清楚”

本文件的作用就是把这个边界写清楚。
