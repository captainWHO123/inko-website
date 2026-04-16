# 🚀 立即推送到 GitHub - 操作步骤

## 你的情况

- ✅ SSH 密钥已添加到 GitHub
- ✅ Git remote 已配置：`https://github.com/captainWHO123/inko-website.git`
- ✅ 代码已准备好推送
- ⚠️ 但 SSH 连接有问题

## 🎯 最简单的解决方案

### 方法 1：直接在终端推送（推荐）

在你的终端运行：

```bash
cd /Users/yantaomac/Downloads/inko\ website
git push -u origin main
```

**会提示输入：**
1. **Username**: `captainWHO123`
2. **Password**: **需要使用 Personal Access Token**（不是 GitHub 密码）

---

## 🔑 获取 Personal Access Token

### 快速步骤（2 分钟）：

1. **访问**: https://github.com/settings/tokens
2. **点击**: "Generate new token" → "Generate new token (classic)"
3. **设置**:
   - Note: `Inko Website`
   - Expiration: `90 days` (或选择 No expiration)
   - 勾选: ✅ `repo` (Full control of private repositories)
4. **点击**: "Generate token"
5. **复制生成的 token** (只显示一次！)

### 使用 Token 推送：

```bash
git push -u origin main
```

**输入：**
- Username: `captainWHO123`
- Password: `粘贴刚才的 Token`

---

## 💾 保存凭据（下次免输入）

推送成功后，运行：

```bash
git config --global credential.helper osxkeychain
```

下次推送就不需要输入 token 了。

---

## 🔄 确认推送成功

1. 访问: https://github.com/captainWHO123/inko-website
2. 应该能看到所有文件
3. 确认文件数量和内容正确

---

## 📝 完整命令列表

```bash
# 1. 进入项目目录
cd /Users/yantaomac/Downloads/inko\ website

# 2. 确认 remote 配置
git remote -v
# 应该显示: captainWHO123/inko-website.git

# 3. 推送代码（需要输入用户名和 token）
git push -u origin main
# Username: captainWHO123
# Password: <你的 Personal Access Token>

# 4. 推送成功后，保存凭据
git config --global credential.helper osxkeychain
```

---

## ⚡ 或者：使用 GitHub CLI (如果安装了)

```bash
# 如果安装了 gh 命令
gh auth login
git push -u origin main
```

---

## 🎯 下一步

推送成功后：
1. ✅ 确认文件在 GitHub 上
2. ✅ 继续部署到 Cloudflare Pages
3. ✅ 配置自定义域名

---

## 🆘 遇到问题？

### 问题：Authentication failed

**可能原因：**
1. Token 输入错误（复制时多了空格）
2. Token 权限不足（需要 `repo` 权限）
3. Token 过期了

**解决方案：**
- 删除旧 Token，重新生成
- 确认勾选了 `repo` 权限
- 仔细复制完整的 Token

### 问题：Repository not found

**可能原因：**
1. 仓库名称拼写错误
2. 仓库还没有创建
3. 账户没有权限

**解决方案：**
- 确认仓库名是 `inko-website`
- 先在 GitHub 创建仓库
- 检查用户名是否正确

---

## 📚 相关文档

- [HTTPS 推送详细指南](./HTTPS_PUSH_GUIDE.md)
- [SSH 设置指南](./SSH_QUICK_GUIDE.md)
- [Cloudflare 部署指南](./CLOUDFLARE_SETUP.md)
