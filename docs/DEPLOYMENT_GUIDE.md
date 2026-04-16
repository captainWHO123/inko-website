# 🚀 部署指南：从 GitHub 到 Cloudflare Pages

## 📋 总体步骤

1. ✅ 将代码推送到 GitHub 仓库
2. ✅ 在 Cloudflare Pages 中断开旧项目连接
3. ✅ 将新项目连接到 Cloudflare Pages
4. ✅ 配置自定义域名

---

## 第一步：创建 GitHub 仓库并推送代码

### 1.1 初始化 git 仓库并提交代码

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 添加所有文件到 git
git add .

# 创建第一次提交
git commit -m "Initial commit: InkoAI website with Kit form integration"

# 添加远程仓库（替换成你的用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

### 1.2 在 GitHub 上创建仓库（如果还没有）

1. 访问 https://github.com/new
2. 仓库名称：`inko-website`（或你喜欢的名字）
3. 设置为 Public 或 Private（根据你的需求）
4. **不要**勾选 "Add a README file"
5. **不要**勾选 "Add .gitignore"
6. 点击 "Create repository"
7. 复制仓库 URL，然后用上面的命令推送代码

---

## 第二步：断开 Cloudflare 上的旧项目连接

### 2.1 登录 Cloudflare Pages

1. 访问 https://dash.cloudflare.com/
2. 登录你的账户
3. 点击左侧菜单的 **"Workers & Pages"**

### 2.2 找到并删除旧项目

在 "Workers & Pages" 页面：

1. 找到你之前部署的项目
2. 点击项目名称进入详情页
3. 点击顶部的 **"Settings"** 标签
4. 向下滚动到 **"Danger zone"** 区域
5. 点击 **"Delete project"**
6. 输入项目名称确认删除
7. 点击 **"Delete project"** 确认

**⚠️ 注意：这只会删除 Cloudflare Pages 上的部署，不会删除你的 GitHub 仓库。**

### 2.3 清理域名（如果需要）

如果你想完全清理域名：

1. 在 Cloudflare 仪表板中，点击你的域名
2. 进入 **"DNS"** 设置
3. 删除与旧项目相关的 CNAME 记录：
   - 通常是一个 `CNAME` 记录，名称是你的子域名（如 `www` 或 `@`）
   - 目标是 `YOUR_PROJECT.pages.dev`

---

## 第三步：将新项目连接到 Cloudflare Pages

### 3.1 创建新的 Pages 项目

1. 回到 **"Workers & Pages"** 页面
2. 点击 **"Create application"**
3. 选择 **"Pages"** 标签
4. 点击 **"Connect to Git"**

### 3.2 连接 GitHub

1. 点击 **"Connect to GitHub"**
2. 如果是第一次，可能需要授权 Cloudflare 访问你的 GitHub
3. 选择你刚才创建的仓库（如 `inko-website`）
4. 点击 **"Begin setup"**

### 3.3 配置构建设置

在 **"Build settings"** 中：

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (留空)
```

**重要配置：**

- **Environment variables** (如果有)：
  - 暂时不需要（我们使用 Kit 表单，无需后端）

### 3.4 部署

1. 点击 **"Save and Deploy"**
2. 等待部署完成（通常需要 1-2 分钟）
3. 部署成功后，你会得到一个 `.pages.dev` URL
   - 例如：`https://inko-website.pages.dev`

---

## 第四步：配置自定义域名

### 4.1 添加自定义域名

1. 在项目页面，点击 **"Custom domains"** 标签
2. 点击 **"Set up a custom domain"**
3. 输入你的域名（如 `yourdomain.com` 或 `www.yourdomain.com`）
4. 点击 **"Continue"**

### 4.2 配置 DNS

Cloudflare 会自动为你配置 DNS：

1. 如果你的域名在 Cloudflare：
   - DNS 记录会自动添加
   - 直接点击 **"Activate domain"**

2. 如果你的域名在其他提供商：
   - Cloudflare 会给你一个 CNAME 记录
   - 你需要去你的域名提供商添加这个记录
   - 例如：
     ```
     类型: CNAME
     名称: www
     目标: your-project.pages.dev
     ```

### 4.3 等待 DNS 传播

- DNS 更改通常需要 5-10 分钟生效
- 最长可能需要 24-48 小时

---

## 🔍 验证部署

### 检查步骤：

1. ✅ 访问 `https://YOUR_PROJECT.pages.dev`
   - 应该看到你的网站正常显示

2. ✅ 访问你的自定义域名
   - 应该看到同样的网站

3. ✅ 测试 Kit 表单
   - 输入邮箱并提交
   - 应该能正常工作

4. ✅ 检查 Kit dashboard
   - 确认订阅已添加

---

## 🛠️ 常见问题

### 问题 1：部署失败

**可能原因：**
- 构建命令不正确
- 依赖未安装

**解决方案：**
```bash
# 本地测试构建
npm run build

# 检查 dist 目录是否生成
ls -la dist/
```

### 问题 2：网站显示 404

**可能原因：**
- 构建输出目录配置错误
- 路由配置问题

**解决方案：**
- 确认 Build output directory 是 `dist`
- 检查 `_routes.json` 文件（如果有的话）

### 问题 3：Kit 表单不工作

**可能原因：**
- Kit script 加载失败
- 域名白名单问题

**解决方案：**
- 检查浏览器控制台错误
- 确认 Kit 表单设置允许你的域名

### 问题 4：自定义域名无法访问

**可能原因：**
- DNS 记录配置错误
- DNS 传播未完成

**解决方案：**
```bash
# 检查 DNS 记录
dig yourdomain.com

# 检查 CNAME 记录
dig www.yourdomain.com CNAME
```

---

## 📝 部署后检查清单

- [ ] GitHub 仓库已创建并推送代码
- [ ] Cloudflare Pages 项目已创建
- [ ] 旧项目已删除（如果需要）
- [ ] 新项目部署成功
- [ ] `.pages.dev` 域名可以访问
- [ ] 自定义域名已配置
- [ ] 自定义域名可以访问
- [ ] Kit 表单正常工作
- [ ] 移动端显示正常

---

## 🔄 更新网站

以后更新网站时：

1. 修改代码
2. 提交到 GitHub：
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Cloudflare Pages 会自动部署

---

## 🆘 需要帮助？

如果遇到问题，请提供：
1. 错误信息的截图
2. Cloudflare Pages 的部署日志
3. 浏览器控制台的错误信息
