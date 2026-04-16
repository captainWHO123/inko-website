# ✅ 快速部署清单

## 📝 准备工作

- [ ] GitHub 账户已登录
- [ ] Cloudflare 账户已登录
- [ ] 代码已提交到本地 git（✅ 已完成）

---

## 步骤 1：推送到 GitHub（5 分钟）

### 1.1 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`inko-website`
3. 不要勾选任何选项（README、.gitignore 等）
4. 点击 "Create repository"

### 1.2 推送代码

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 替换成你的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/inko-website.git

# 推送代码
git push -u origin main
```

**示例：**
```bash
git remote add origin https://github.com/johndoe/inko-website.git
git push -u origin main
```

- [ ] 代码已推送到 GitHub
- [ ] 可以在 GitHub 上看到文件

---

## 步骤 2：删除 Cloudflare 旧项目（3 分钟）

1. 访问 https://dash.cloudflare.com/
2. 点击 **"Workers & Pages"**
3. 找到旧项目，点击进入
4. 点击 **"Settings"** 标签
5. 滚动到底部 **"Danger zone"**
6. 点击 **"Delete project"**
7. 输入项目名称确认
8. 点击 **"Delete project"** 确认删除

- [ ] 旧项目已删除
- [ ] Workers & Pages 页面不再显示旧项目

---

## 步骤 3：部署新项目到 Cloudflare（5 分钟）

1. 在 **"Workers & Pages"** 页面
2. 点击 **"Create application"**
3. 选择 **"Pages"** → **"Connect to Git"**
4. 点击 **"Connect to GitHub"** 授权
5. 选择 `inko-website` 仓库
6. 点击 **"Begin setup"**

### 配置构建设置：

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

7. 点击 **"Save and Deploy"**
8. 等待部署完成（1-2 分钟）

- [ ] 项目已创建
- [ ] 部署成功
- [ ] 可以访问 `https://inko-website.pages.dev`

---

## 步骤 4：配置自定义域名（5 分钟）

1. 在项目页面点击 **"Custom domains"**
2. 点击 **"Set up a custom domain"**
3. 输入你的域名（如 `www.yourdomain.com`）
4. 点击 **"Continue"**

### 如果域名在 Cloudflare：

5. 直接点击 **"Activate domain"**
6. 等待 DNS 传播（5-10 分钟）

### 如果域名在其他提供商：

5. 复制 Cloudflare 给你的 CNAME 记录
6. 登录你的域名提供商
7. 添加 CNAME 记录：
   ```
   类型: CNAME
   名称: www
   目标: inko-website.pages.dev
   ```

- [ ] 自定义域名已添加
- [ ] DNS 记录已配置
- [ ] 可以通过自定义域名访问网站

---

## 步骤 5：测试验证（2 分钟）

1. 访问你的自定义域名
2. 检查页面是否正常显示
3. 测试 Kit 表单：
   - 输入邮箱地址
   - 点击 "Get Early Access"
   - 确认提交成功

- [ ] 网站正常显示
- [ ] Kit 表单可以正常提交
- [ ] 移动端显示正常

---

## 🎉 完成！

现在你的网站已经成功部署到 Cloudflare Pages 并配置了自定义域名。

### 以后更新网站：

```bash
# 1. 修改代码
# 2. 提交并推送
git add .
git commit -m "Update content"
git push

# Cloudflare Pages 会自动重新部署
```

---

## 🆘 遇到问题？

### 部署失败
- 检查 Cloudflare Pages 的 Build log
- 确认 `package.json` 中的构建脚本正确

### 域名无法访问
- 使用 https://dnschecker.org/ 检查 DNS 传播
- 确认 CNAME 记录配置正确

### Kit 表单不工作
- 检查浏览器控制台错误
- 确认 Kit 表单 ID 和 UID 正确

---

## 📚 详细文档

- 完整部署指南：[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Cloudflare 详细操作：[CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md)
