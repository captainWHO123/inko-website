# 🚀 快速设置 GitHub SSH（3 分钟）

## 你的 SSH 公钥（复制这个）

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKaSOkAX2ksmhz7uBc+cSPJ87eZ/YvstHzYUb4W+C6hh behardyutua90@gmail.com
```

---

## 步骤 1：添加 SSH 密钥到 GitHub（2 分钟）

### 直接操作：

1. **点击这个链接直接打开设置页面：**
   https://github.com/settings/keys

2. **点击 "New SSH key" 按钮**

3. **填写表单：**
   - Title: `MacBook Air`
   - Key type: `Authentication Key`
   - Key: 粘贴上面的 SSH 公钥

4. **点击 "Add SSH key"**

✅ 完成！SSH 密钥已添加

---

## 步骤 2：配置 Git 使用 SSH（1 分钟）

### 在终端运行以下命令：

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 删除旧的 HTTPS remote
git remote remove origin

# 添加新的 SSH remote（替换成你的 GitHub 用户名）
git remote add origin git@github.com:YOUR_USERNAME/inko-website.git

# 测试连接
ssh -T git@github.com
```

**如果测试成功，你会看到：**
```
Hi YOUR_USERNAME! You've successfully authenticated...
```

---

## 步骤 3：推送到 GitHub

### 3.1 先创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`inko-website`
3. **不要**勾选任何选项
4. 点击 "Create repository"

### 3.2 推送代码

```bash
# 在项目目录下运行
git push -u origin main
```

✅ 完成！代码已推送到 GitHub

---

## 📝 完整命令（假设你的用户名是 behardyutua90）

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 1. 删除旧的 remote
git remote remove origin

# 2. 添加 SSH remote（替换成你的用户名）
git remote add origin git@github.com:behardyutua90/inko-website.git

# 3. 推送代码
git push -u origin main
```

---

## ✅ 以后每次推送

```bash
git add .
git commit -m "Update"
git push

# 不需要密码！
```

---

## 🔍 验证

1. **检查 SSH 连接：**
   ```bash
   ssh -T git@github.com
   ```
   应该显示：`Hi username! You've successfully authenticated...`

2. **检查 remote 配置：**
   ```bash
   git remote -v
   ```
   应该显示：`git@github.com:username/repo.git`

3. **检查 GitHub：**
   访问你的仓库页面，确认文件已推送

---

## 🎯 下一步

SSH 设置完成后：
1. ✅ 继续部署到 Cloudflare Pages
2. ✅ 以后推送代码不需要密码
3. ✅ 所有 Git 操作更安全方便

---

## 🆘 如果 SSH 测试失败

1. **确认 SSH 密钥已添加**
   - 重新访问 https://github.com/settings/keys
   - 确认看到你的 SSH 密钥

2. **等待几分钟**
   - GitHub 有时需要几分钟处理新密钥

3. **检查密钥是否完整**
   - 确认复制了完整的 SSH 公钥
   - 从 `ssh-ed25519` 开始到 `@gmail.com` 结束

---

## 📞 需要帮助？

如果遇到问题：
1. 确认 SSH 密钥已正确添加到 GitHub
2. 检查 GitHub 用户名是否正确
3. 确认仓库名称拼写正确
