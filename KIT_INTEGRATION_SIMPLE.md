# Kit 表单接入说明

## 重要澄清

### Vite 不是 Kit 的服务器

- **Vite** = 你的前端开发服务器（React 开发用）
- **Kit** = 邮件营销服务，提供表单 embed 代码
- **Cloudflare Pages** = 生产环境托管平台
- **Cloudflare Functions** = 生产环境后端 API

它们是完全不同的服务！

## 当前情况

### 你的网站现在的状态：

```
┌─────────────────────────────────┐
│ http://localhost:3000          │ ← Vite 开发服务器
│ (前端 React 应用)               │
└─────────────────────────────────┘
           ↓
    提交到 /api/waitlist
           ↓
┌─────────────────────────────────┐
│ Cloudflare Functions            │ ← 只在生产环境工作
│ (functions/api/waitlist.ts)     │   需要环境变量配置
└─────────────────────────────────┘
           ↓
    提交到 Kit API
```

**问题**：开发环境没有 `/api/waitlist`，所以提交失败

## 解决方案：使用 Kit 表单

### 新的架构：

```
┌─────────────────────────────────┐
│ http://localhost:3000          │ ← Vite 开发服务器
│ (前端 React 应用)               │
│ 包含 Kit embed 表单             │
└─────────────────────────────────┘
           ↓
    直接提交到 Kit（无需后端）
           ↓
┌─────────────────────────────────┐
│ https://app.kit.com/forms/...  │ ← Kit 的表单处理
└─────────────────────────────────┘
```

**优点**：无需后端 API，开发生产环境都能工作

## 已完成的修改

✅ **已切换到 Kit 表单**
- 在 `src/App.tsx` 中：`<Hero />` → `<HeroWithKit />`
- `HeroWithKit` 使用 Kit 的 embed 表单
- 表单直接提交到 Kit，无需 `/api/waitlist`

## 验证步骤

### 1. 刷新浏览器
访问 http://localhost:3000

### 2. 检查表单
应该看到：
- 邮箱输入框
- "Get Early Access" 按钮
- 样式应该和你的设计匹配

### 3. 测试提交
1. 输入邮箱地址
2. 点击按钮
3. 应该看到 Kit 的成功消息

### 4. 验证订阅
登录你的 Kit 账户，检查订阅是否添加成功

## 如果表单没有显示

### 检查浏览器控制台：
1. 按 F12 打开开发者工具
2. 查看 Console 标签页
3. 应该看到 "Kit form script loaded successfully"

### 如果有错误：
1. 检查网络连接
2. 确认 Kit script 可访问：https://f.convertkit.com/ckjs/ck.5.js
3. 检查 formId 和 uid 是否正确

## 架构对比

### 旧方案（自定义表单）
```tsx
// Hero.tsx
const handleSubmit = async (event) => {
  await fetch("/api/waitlist", {  // ← 需要 Cloudflare Functions
    method: "POST",
    body: JSON.stringify({ email })
  });
};
```

**要求**：
- ✅ 生产环境：配置 Cloudflare 环境变量
- ❌ 开发环境：不支持，无法测试

### 新方案（Kit 表单）
```tsx
// HeroWithKit.tsx
<KitForm formId="8899105" uid="607eb344a1" />
// ← 直接提交到 Kit，无需后端
```

**要求**：
- ✅ 生产环境：开箱即用
- ✅ 开发环境：开箱即用

## 文件说明

### 已创建的文件：
1. **`src/components/KitForm.tsx`**
   - Kit 表单的核心组件
   - 动态加载 Kit script
   - 程序化创建表单

2. **`src/components/StyledKitForm.tsx`**
   - 样式包装器
   - 定制 Kit 表单样式
   - 匹配你的设计

3. **`src/components/HeroWithKit.tsx`**
   - 使用 Kit 表单的 Hero 组件
   - 替换原来的 Hero

### 已修改的文件：
1. **`src/App.tsx`**
   - 从 `<Hero />` 切换到 `<HeroWithKit />`

### 不再需要的文件（可选删除）：
1. **`functions/api/waitlist.ts`**
   - Cloudflare Functions 文件
   - 使用 Kit 表单后不需要

## 环境变量（可选）

如果你想保留后端 API 方案，需要在 Cloudflare Pages 配置：

```bash
# 在 Cloudflare Pages 控制台设置：
KIT_API_KEY=your_kit_api_key
KIT_FORM_ID=8899105
```

但使用 Kit 表单的话，**不需要这些配置**。

## 下一步

1. ✅ 刷新浏览器
2. ✅ 测试表单提交
3. ✅ 检查 Kit dashboard
4. ✅ 部署到生产环境

## 部署

### 开发环境：
```bash
npm run dev
# 访问 http://localhost:3000
```

### 生产环境：
```bash
npm run build
# 部署 dist/ 目录到 Cloudflare Pages
```

Kit 表单在两个环境中都能正常工作！

## 总结

- **Vite** 不是 Kit 的服务器，是前端开发工具
- **Kit 表单**直接提交到 Kit，无需你的后端 API
- **已经完成切换**，刷新浏览器即可测试
- **开发生产都能工作**，无需额外配置
