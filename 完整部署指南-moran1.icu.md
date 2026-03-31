# 墨染剧本杀网站 - 完整一站式部署指南
## 域名：moran1.icu（腾讯云购买）

## 📋 总体流程
```
域名已买 → 注册账号 → 上传网站 → Vercel部署 → 绑定域名 → 测试完成
      ↓         ↓         ↓         ↓         ↓         ↓
  [准备就绪] [GitHub+Vercel] [Git操作] [自动部署] [腾讯云DNS] [域名访问]
```

## 🚀 第1步：注册必要账号（约5分钟）

### 1.1 GitHub注册（免费）
- **注册地址**：https://github.com/signup
- **用户名建议**：moran-script（或你的个人用户名）
- **邮箱**：使用常用邮箱
- **验证后完成注册**

### 1.2 Vercel注册（免费）
- **注册地址**：https://vercel.com/signup
- **推荐方式**：使用GitHub账号登录（最方便）
- **验证邮箱**：完成注册

## 📦 第2步：准备网站文件复制（约2分钟）

**你当前的网站文件位于**：
```
C:\Users\admin\WorkBuddy\20260401001834\
├── web-pdfs/          ← PDF文件目录（包含剧本PDF）
├── quick-site.html    ← 网站主文件（水墨风格，角色弹窗已修复）
├── README.md          ← 项目说明
└── 其他文件...         ← 部署不需要，可以忽略
```

### 简单复制方法：
1. 在 `C:\Users\admin\WorkBuddy\20260401001834\` 创建一个新文件夹，比如 `website-for-vercel`
2. 复制必要文件到这个文件夹：
   - `quick-site.html`
   - `web-pdfs/` 整个文件夹
   - `README.md`（可选）

## 💻 第3步：使用Git上传网站（约5分钟）

### 3.1 打开PowerShell进入网站目录
```powershell
cd "C:\Users\admin\WorkBuddy\20260401001834\"
```

### 3.2 初始化Git仓库并推送到GitHub
```powershell
# 创建Git仓库
git init
git add .
git commit -m "墨染剧本杀网站上线 - 腾讯云域名 moran1.icu"

# 创建GitHub仓库（需先在网页创建）
# 1. 访问：https://github.com/new
# 2. 仓库名输入：moran-script-website（或你喜欢的名字）
# 3. 选择公开（Public）
# 4. 不勾选README（因为我们已有一个）
# 5. 点击"Create repository"

# 关联远程仓库并推送（复制GitHub页面上的命令）
# 例如：
git remote add origin https://github.com/你的用户名/moran-script-website.git
git branch -M main
git push -u origin main
```

## 🌐 第4步：Vercel一键部署（约3分钟）

1. **登录Vercel控制台**：https://vercel.com/dashboard
2. **点击 "New Project"**
3. **导入项目**：
   - 选择 "GitHub"
   - 授权Vercel访问GitHub
   - 选择你刚创建的仓库（moran-script-website）
4. **配置项目**：
   - 项目名称：moran-script（会自动调整为 moran-script.vercel.app）
   - ❌ **重要：不要修改任何构建设置**（Vercel会自动识别为静态网站）
   - 框架预设：选择 "Other" 或 "Static"
5. **点击 "Deploy"**
6. **等待完成**（约1分钟）

### 部署成功后你会得到：
✅ **Vercel免费域名**：`https://moran-script.vercel.app`
✅ **支持HTTPS**：自动配置SSL证书
✅ **全球CDN**：加速访问
✅ **每月100GB流量**：完全免费

## 🔗 第5步：绑定域名 moran1.icu（约5分钟）

### 5.1 在Vercel添加域名
1. 进入刚部署的项目
2. 点击 "Settings" → "Domains"
3. 输入你的域名：`moran1.icu`
4. 点击 "Add"

### 5.2 Vercel会显示DNS配置信息
你需要添加以下两条DNS记录：
```
1. A记录（让 moran1.icu 指向Vercel）：
   主机记录：@
   记录类型：A
   记录值：76.76.21.21
   TTL：600秒

2. CNAME记录（让 www.moran1.icu 指向Vercel）：
   主机记录：www
   记录类型：CNAME
   记录值：cname.vercel-dns.com
   TTL：600秒
```

## 🌍 第6步：腾讯云DNS配置（特别教程）

### 6.1 登录腾讯云域名控制台
1. **登录**：https://console.cloud.tencent.com/domain
2. **找到域名**：moran1.icu
3. **点击 "解析"**

### 6.2 添加A记录（@记录）
1. **点击 "添加记录"**
2. **配置如下**：
   ```
   主机记录：@
   记录类型：A
   记录值：76.76.21.21
   线路类型：默认
   权重：默认（或留空）
   TTL：600
   ```
3. **点击 "保存"**

### 6.3 添加CNAME记录（www记录）
1. **再次点击 "添加记录"**
2. **配置如下**：
   ```
   主机记录：www
   记录类型：CNAME
   记录值：cname.vercel-dns.com
   线路类型：默认
   权重：默认（或留空）
   TTL：600
   ```
3. **点击 "保存"**

**配置完成后应显示**：
- 1条A记录：@ → 76.76.21.21
- 1条CNAME记录：www → cname.vercel-dns.com

## ✅ 第7步：验证和测试（约2分钟）

### 7.1 检查DNS生效
```powershell
# 测试域名解析
nslookup moran1.icu
nslookup www.moran1.icu
```
如果正确指向 `76.76.21.21` 和 `cname.vercel-dns.com`，说明DNS已生效。

### 7.2 清空DNS缓存（如果需要）
```powershell
ipconfig /flushdns
```

### 7.3 直接访问测试
在浏览器中访问：
1. `http://moran1.icu/quick-site.html` 或 `https://moran1.icu/quick-site.html`
2. 如果显示成功，Vercel会自动将HTTP转为HTTPS

## ⏰ 生效时间说明
| 类型 | 通常生效时间 | 最长等待时间 |
|------|-------------|------------|
| 腾讯云DNS | 10-30分钟 | 48小时 |
| Vercel SSL证书 | 自动，即时 | 10分钟 |
| 首次访问 | 立即可以测试 | - |

**如果等待超过30分钟仍不生效**：
1. 重新检查DNS配置是否正确
2. 确保域名没有其他冲突记录
3. 尝试清理浏览器缓存

## 🎉 第8步：部署完成庆祝！

### 成功后你可以：
✅ **直接访问**：https://moran1.icu/quick-site.html
  - 或直接访问：https://moran1.icu/（如果配置了rewrite规则）

✅ **功能完全正常**：
  - ✅ PDF阅读（剧本DM手册）
  - ✅ 角色简介弹窗
  - ✅ 微信联系弹窗
  - ✅ 水墨风格背景和音乐
  - ✅ 响应式设计（手机/电脑都好看）

✅ **开始使用**：
  - 分享给客户：`moran1.icu` 或 `www.moran1.icu`
  - 添加到微信名片
  - 更新宣传材料

## 🔄 第9步：更新网站（后续维护）

### 如果需要更新网站：
只需三步：
```powershell
cd "C:\Users\admin\WorkBuddy\20260401001834\"
git add .
git commit -m "更新说明"
git push
```
**Vercel会自动重新部署**，几分钟后更新生效。

## 🆘 常见问题解决

### Q1：访问网站显示404错误
A：确保URL正确：`https://moran1.icu/quick-site.html`
   或者访问 `https://moran1.icu/` 测试首页

### Q2：显示"域名未绑定"
A：等待DNS生效，或检查Vercel域名配置是否正确

### Q3：手机浏览器打不开微信添加
A：这是正常现象，已优化弹窗确认流程，用户需要手动确认

### Q4：某个PDF文件无法下载
A：检查文件路径是否正确，确保在 `web-pdfs/` 目录中

## 📞 技术支持

### 紧急帮助：
- **我的联系方式**：微信 Moran18602368863
- **腾讯云客服**：95716（电话）
- **Vercel官方**：support@vercel.com

### 文档参考：
- [腾讯云域名解析帮助](https://cloud.tencent.com/document/product/302)
- [Vercel域名配置指南](https://vercel.com/docs/deployments/domains)

---

## 🎯 最快完成时间预估
| 步骤 | 预估时间 | 累计时间 |
|------|---------|---------|
| 注册账号 | 5分钟 | 5分钟 |
| Git上传 | 5分钟 | 10分钟 |
| Vercel部署 | 3分钟 | 13分钟 |
| 域名配置 | 5分钟 | 18分钟 |
| DNS生效等待 | 10-30分钟 | 28-48分钟 |
| **总计** | **约30-50分钟** | **完成部署** |

**提醒**：部署过程中最好保持网络稳定，遇到问题随时截图咨询。

## 💡 小贴士
1. **测试阶段**：先用 `moran-script.vercel.app` 测试网站是否正常
2. **手机测试**：用手机访问域名，确保响应式设计正常
3. **分享测试**：让朋友帮忙测试访问速度
4. **备份**：GitHub仓库就是最好的备份

**祝部署顺利！** 🎉你的剧本杀网站即将拥有专业域名访问！