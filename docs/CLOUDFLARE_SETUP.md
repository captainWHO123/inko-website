# 🌐 Cloudflare Pages 操作详解

## 📌 前置准备

在开始之前，请确认：
- ✅ 你有 GitHub 账户
- ✅ 你有 Cloudflare 账户
- ✅ 你知道你的域名在哪个平台（Cloudflare 或其他提供商）

---

## 🎯 目标

1. **删除旧项目** - 从 Cloudflare Pages 上移除之前的网站
2. **部署新项目** - 将 InkoAI 网站部署到 Cloudflare Pages
3. **配置域名** - 将你的域名指向新网站

---

## 第一步：在 GitHub 上创建仓库

### 1.1 创建新仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `inko-website` (或你喜欢的名字)
   - **Description**: `InkoAI - Insurance adviser autopilot platform`
   - **Public/Private**: 选择 Private（如果是私有项目）
3. **重要：不要勾选以下选项：**
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
4. 点击 **"Create repository"**

### 1.2 推送代码到 GitHub

创建仓库后，GitHub 会显示一系列命令。使用以下命令（已经为你准备好了）：

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 添加远程仓库（替换下面的 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送代码到 GitHub
git push -u origin main
```

**示例：**
```bash
# 如果你的 GitHub 用户名是 "johndoe"，仓库名是 "inko-website"
git remote add origin https://github.com/johndoe/inko-website.git
git push -u origin main
```

---

## 第二步：删除 Cloudflare 上的旧项目

### 2.1 登录 Cloudflare

1. 访问 https://dash.cloudflare.com/
2. 登录你的账户
3. 在左侧菜单中找到 **"Workers & Pages"**

### 2.2 找到并删除旧项目

1. 在 **"Workers & Pages"** 页面，你会看到所有项目列表
2. 找到你之前部署的项目（可能是你的旧网站）
3. 点击项目名称进入详情页
4. 点击顶部的 **"Settings"** 标签
5. 向下滚动到 **"Danger zone"** 区域（通常在页面底部）
6. 你会看到红色的 **"Delete project"** 按钮
7. 点击它，输入项目名称确认删除
8. 再次点击 **"Delete project"** 确认

**⚠️ 重要提示：**
- 删除项目只会删除 Cloudflare Pages 上的部署
- 不会删除你的 GitHub 仓库
- 不会删除你的域名
- 可以随时重新部署

### 2.3 清理 DNS 记录（可选但推荐）

如果你想完全清理旧网站的 DNS 设置：

1. 在 Cloudflare 仪表板，点击你的域名
2. 进入 **"DNS"** → **"Records"** 标签
3. 查找与旧项目相关的记录：
   - 通常是一个 `CNAME` 记录
   - 名称可能是 `www`、`@` 或其他子域名
   - 目标是 `YOUR_OLD_PROJECT.pages.dev`
4. 点击记录右侧的 **"Edit"** 或 **"Delete"**
5. 删除或修改这些记录

**注意：** 如果你不确定，可以先不删除，稍后再处理。

---

## 第三步：在 Cloudflare Pages 上部署新项目

### 3.1 创建新的 Pages 项目

1. 回到 **"Workers & Pages"** 页面
2. 点击右上角的 **"Create application"**
3. 选择 **"Pages"** 标签
4. 点击 **"Connect to Git"**

### 3.2 连接 GitHub 仓库

1. 点击 **"Connect to GitHub"** 按钮
2. 如果是第一次连接，你需要授权 Cloudflare 访问你的 GitHub：
   - 点击 **"Authorize Cloudflare"**
   - 使用 GitHub 账户登录授权
3. 授权后，你会看到你的 GitHub 仓库列表
4. 找到并选择你刚才创建的仓库（`inko-website`）
5. 点击 **"Begin setup"**

### 3.3 配置构建设置

在 **"Build settings"** 部分，填写以下信息：

```
┌─────────────────────────────────────┐
│ Project name: inko-website          │
│                                     │
│ Production branch: main             │
│                                     │
│ Framework preset: Vite              │
│                                     │
│ Build command: npm run build        │
│                                     │
│ Build output directory: dist        │
│                                     │
│ Root directory: (留空)              │
└─────────────────────────────────────┘
```

**详细说明：**
- **Project name**: 项目名称（会变成 `project-name.pages.dev`）
- **Production branch**: 主分支名称（通常是 `main`）
- **Framework preset**: 选择 "Vite"（会自动填充其他设置）
- **Build command**: 构建命令
- **Build output directory**: 构建输出目录（Vite 默认是 `dist`）

### 3.4 环境变量（可选）

**重要：** 使用 Kit 表单的情况下，你**不需要**配置任何环境变量！

如果你使用的是旧的后端 API 方案，才需要配置：
- `KIT_API_KEY`
- `KIT_FORM_ID`

### 3.5 开始部署

1. 检查所有配置是否正确
2. 点击 **"Save and Deploy"** 按钮
3. Cloudflare Pages 会开始部署：
   - 克隆你的 GitHub 仓库
   - 安装依赖（`npm install`）
   - 构建项目（`npm run build`）
   - 部署到 CDN

4. 等待部署完成（通常需要 1-2 分钟）

### 3.6 部署成功

部署成功后，你会看到：
- ✅ "Deployment succeeded" 消息
- 一个新的 URL：`https://inko-website.pages.dev`（或类似）
- 访问这个 URL 应该能看到你的网站

---

## 第四步：配置自定义域名

### 4.1 添加自定义域名

1. 在项目页面，点击 **"Custom domains"** 标签
2. 点击 **"Set up a custom domain"**
3. 输入你的域名：
   - 如果是主域名：`yourdomain.com`
   - 如果是子域名：`www.yourdomain.com`
4. 点击 **"Continue"**

### 4.2 配置 DNS

#### 情况 A：域名在 Cloudflare 管理

如果你的域名已经在 Cloudflare：

1. Cloudflare 会自动为你添加 DNS 记录
2. 直接点击 **"Activate domain"**
3. 等待 DNS 传播（通常 5-10 分钟）

#### 情况 B：域名在其他提供商

如果你的域名在 GoDaddy、Namecheap 等其他平台：

1. Cloudflare 会给你一个 CNAME 记录：
   ```
   类型: CNAME
   名称: www (或你指定的子域名)
   目标: inko-website.pages.dev
   ```

2. 登录你的域名提供商（如 GoDaddy）
3. 找到 DNS 设置
4. 添加上述 CNAME 记录

### 4.3 验证域名配置

1. 等待 DNS 传播完成
2. 访问你的自定义域名
3. 应该能看到你的网站

**检查工具：**
- https://dnschecker.org/ - 检查 DNS 传播状态
- 输入你的域名，查看全球 DNS 解析情况

---

## 🔍 验证和测试

### 检查清单

- [ ] GitHub 仓库已创建并推送代码
- [ ] 旧 Cloudflare Pages 项目已删除
- [ ] 新项目已创建并部署成功
- [ ] `.pages.dev` URL 可以访问
- [ ] 自定义域名已配置
- [ ] 自定义域名可以访问
- [ ] Kit 表单正常工作
- [ ] 移动端显示正常

### 测试步骤

1. **测试基础功能**
   - 访问你的自定义域名
   - 检查页面是否正常显示
   - 测试所有链接和按钮

2. **测试 Kit 表单**
   - 输入一个邮箱地址
   - 点击提交按钮
   - 检查是否显示成功消息
   - 登录 Kit dashboard 确认订阅

3. **测试移动端**
   - 在手机上打开网站
   - 检查响应式布局
   - 测试表单提交

---

## 🔄 更新网站

以后更新网站时，只需：

```bash
# 1. 修改代码
# 2. 提交到 GitHub
git add .
git commit -m "Update website content"
git push

# 3. Cloudflare Pages 会自动检测并重新部署
```

你可以在 Cloudflare Pages 项目页面看到部署进度。

---

## 🆘 常见问题

### Q1: 部署失败怎么办？

**A:**
1. 检查 **"Build log"** 查看具体错误
2. 本地测试构建：`npm run build`
3. 确认 `package.json` 中的脚本正确

### Q2: 自定义域名显示 404

**A:**
1. 检查 DNS 记录是否正确配置
2. 使用 dnschecker.org 检查 DNS 传播
3. 确认域名已正确指向你的 Pages 项目

### Q3: 如何删除项目？

**A:**
1. 进入项目设置
2. 滚动到 "Danger zone"
3. 点击 "Delete project"

### Q4: 可以同时部署多个域名吗？

**A:**
可以！在 "Custom domains" 中添加多个域名即可。

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Cloudflare Pages 文档
2. 检查 GitHub Actions 日志
3. 提供错误信息和截图
