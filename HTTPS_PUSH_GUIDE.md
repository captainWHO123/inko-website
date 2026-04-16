# 使用 HTTPS 推送到 GitHub（当 SSH 不可用时）

## 🚀 快速推送步骤

### 第 1 步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`inko-website`
3. **不要**勾选任何选项
4. 点击 "Create repository"

### 第 2 步：使用 HTTPS 推送

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 添加 HTTPS remote
git remote add origin https://github.com/YOUR_USERNAME/inko-website.git

# 推送时需要使用 Personal Access Token
git push -u origin main
```

### 第 3 步：创建 Personal Access Token

**重要：GitHub 不再支持密码登录，需要使用 Token**

1. 访问 https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 设置 token：
   - **Note**: `Inko Website Deployment`
   - **Expiration**: 选择过期时间（或 No expiration）
   - **勾选权限**：
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (if you want to enable GitHub Actions)

4. 点击 **"Generate token"**
5. **复制生成的 token**（只显示一次！）

### 第 4 步：使用 Token 推送

```bash
git push -u origin main
```

当提示输入密码时：
- **Username**: 你的 GitHub 用户名
- **Password**: 粘贴刚才生成的 Token（不是你的 GitHub 密码！）

---

## 💡 保存 Token（避免每次输入）

### macOS 方法：

```bash
# 使用 macOS Keychain
git config --global credential.helper osxkeychain

# 第一次输入后，git 会保存凭据
```

### 通用方法：

```bash
# 使用 credential store
git config --global credential.helper store

# 第一次输入后会保存在 ~/.git-credentials
```

---

## 📝 完整示例

```bash
cd /Users/yantaomac/Downloads/inko\ website

# 1. 添加 remote
git remote add origin https://github.com/YOUR_USERNAME/inko-website.git

# 2. 推送（会提示输入用户名和 token）
git push -u origin main

# Username: YOUR_USERNAME
# Password: YOUR_PERSONAL_ACCESS_TOKEN

# 3. 保存凭据（下次就不需要输入了）
git config --global credential.helper osxkeychain
```

---

## ⚠️ 重要安全提醒

1. **Personal Access Token 就是你的密码**
   - 像对待密码一样保护它
   - 不要分享给他人
   - 定期更新

2. **Token 权限**
   - 只给必要的权限（repo 是必须的）
   - 如果泄露，立即删除并重新生成

3. **保存 Token**
   - 保存在安全的地方
   - 可以使用密码管理器

---

## 🔧 故障排除

### 问题：Authentication failed

**解决方案：**
1. 确认 Token 没有过期
2. 确认勾选了 `repo` 权限
3. 重新生成 Token

### 问题：Token 不工作

**解决方案：**
1. 删除旧 Token，创建新的
2. 确认复制了完整的 Token
3. 检查 Token 权限设置

---

## 🎯 以后每次推送

第一次成功后：
```bash
git add .
git commit -m "Update"
git push

# 如果配置了 credential helper，不需要再输入 token
```

---

## 📚 推荐：还是建议修复 SSH

HTTPS 方式虽然简单，但 SSH 更方便和安全。

修复 SSH 的方法：
1. 检查 GitHub 上的 SSH 密钥设置
2. 确认使用的是正确的密钥
3. 如果密钥有密码，每次使用时需要输入
4. 或者生成新的无密码密钥
