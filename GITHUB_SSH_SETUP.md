# 🔐 使用 SSH 推送到 GitHub

## 你的 SSH 公钥

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKaSOkAX2ksmhz7uBc+cSPJ87eZ/YvstHzYUb4W+C6hh behardyutua90@gmail.com
```

---

## 第一步：将 SSH 密钥添加到 GitHub

### 1.1 登录 GitHub

1. 访问 https://github.com/settings/keys
2. 如果没有登录，先登录你的 GitHub 账户

### 1.2 添加新的 SSH 密钥

1. 点击 **"New SSH key"** 按钮
2. 填写信息：
   - **Title**: `MacBook Air` (或任何你喜欢的名字)
   - **Key type**: 选择 `Authentication Key`
   - **Key**: 粘贴上面的 SSH 公钥（整行）

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKaSOkAX2ksmhz7uBc+cSPJ87eZ/YvstHzYUb4W+C6hh behardyutua90@gmail.com
```

3. 点击 **"Add SSH key"**
4. 可能需要输入 GitHub 密码确认

- [ ] SSH 密钥已添加到 GitHub

---

## 第二步：测试 SSH 连接

在终端运行：

```bash
ssh -T git@github.com
```

**成功的反应：**
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

**如果显示 "permission denied"：**
- 检查 SSH 密钥是否正确添加
- 等待几分钟后重试
- 确认复制了完整的公钥

- [ ] SSH 连接测试成功

---

## 第三步：配置 Git 使用 SSH

### 3.1 检查当前的 remote

```bash
cd /Users/yantaomac/Downloads/inko\ website
git remote -v
```

如果已经设置了 HTTPS remote，会显示：
```
origin	https://github.com/YOUR_USERNAME/YOUR_REPO.git (fetch)
origin	https://github.com/YOUR_USERNAME/YOUR_REPO.git (push)
```

### 3.2 修改为 SSH 地址

```bash
# 删除现有的 HTTPS remote
git remote remove origin

# 添加 SSH remote（替换成你的用户名和仓库名）
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git

# 验证
git remote -v
```

应该显示：
```
origin	git@github.com:YOUR_USERNAME/YOUR_REPO.git (fetch)
origin	git@github.com:YOUR_USERNAME/YOUR_REPO.git (push)
```

**注意 URL 的变化：**
- HTTPS: `https://github.com/username/repo.git`
- SSH: `git@github.com:username/repo.git`

- [ ] Git remote 已改为 SSH

---

## 第四步：推送到 GitHub

### 4.1 创建 GitHub 仓库（如果还没有）

1. 访问 https://github.com/new
2. 仓库名：`inko-website`
3. **不要**勾选任何选项（README、.gitignore、license）
4. 点击 "Create repository"

### 4.2 推送代码

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 推送到 GitHub（不需要密码！）
git push -u origin main
```

**成功的输出：**
```
Enumerating objects: 50, done.
Counting objects: 100% (50/50), done.
Writing objects: 100% (50/50), done.
To git@github.com:YOUR_USERNAME/inko-website.git
 * [new branch]      main -> main
```

- [ ] 代码已成功推送到 GitHub

---

## 📝 完整命令示例

假设你的 GitHub 用户名是 `behardyutua90`：

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 1. 删除现有的 remote（如果有）
git remote remove origin

# 2. 添加 SSH remote
git remote add origin git@github.com:behardyutua90/inko-website.git

# 3. 推送代码
git push -u origin main
```

---

## 🔍 验证推送成功

1. 访问你的 GitHub 仓库
2. 应该能看到所有文件：
   - `src/` 文件夹
   - `package.json`
   - `vite.config.ts`
   - 等等

---

## 🎯 以后每次推送

```bash
# 修改代码后
git add .
git commit -m "Your commit message"
git push

# 不需要输入密码！✅
```

---

## 🆘 故障排除

### 问题 1：SSH 连接失败

**错误：** `Permission denied (publickey)`

**解决方案：**
1. 确认 SSH 密钥已添加到 GitHub
2. 检查是否复制了完整的公钥
3. 尝试重新生成 SSH 密钥：
   ```bash
   ssh-keygen -t ed25519 -C "behurdyutua90@gmail.com"
   ```

### 问题 2：推送失败

**错误：** `fatal: 'username/repo' does not appear to be a git repository`

**解决方案：**
1. 确认 GitHub 仓库名称正确
2. 检查 `git remote -v` 的输出
3. 确认仓库名称和 URL 完全匹配

### 问题 3：密钥权限问题

**错误：** SSH 密钥权限不正确

**解决方案：**
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

---

## ✅ 优势总结

使用 SSH 的好处：
- ✅ 不需要每次输入密码
- ✅ 更安全（公钥加密）
- ✅ 更方便（一键推送）
- ✅ Git 操作更快

现在你不需要记住 GitHub 密码了！
