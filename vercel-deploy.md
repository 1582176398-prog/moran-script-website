# Vercel一键部署指南
## 墨染剧本杀网站 - 永久免费公网访问

### 📝 准备工作
1. 注册GitHub账号：https://github.com/signup
2. 注册Vercel账号：https://vercel.com/signup（支持GitHub登录）

### 🚀 快速部署（5分钟完成）

#### 方法一：手动部署（最简单）
1. **访问Vercel控制台**：https://vercel.com/new
2. **导入项目**：
   - 点击 "Deploy"
   - 选择 "Import Git Repository"
   - 或直接拖拽本地的网站文件夹

3. **配置项目**：
   ```
   项目名称：moran-script （系统自动分配域名）
   构建命令：无需配置（Vercel自动识别静态网站）
   输出目录：./ （根目录）
   ```

4. **部署完成**：
   - Vercel会自动分配域名：`moran-script.vercel.app`
   - 支持HTTPS（自动）
   - 全球CDN加速

#### 方法二：GitHub仓库部署（推荐）

**步骤1：创建GitHub仓库**
```bash
# 在网站目录下执行（已为你准备好命令）
git init
git add .
git commit -m "墨染剧本杀网站上线"
git branch -M main
```

**步骤2：推送到GitHub**
1. 在GitHub创建新仓库：https://github.com/new
2. 仓库名：moran-script-website
3. 复制推送命令：
```bash
git remote add origin https://github.com/你的用户名/moran-script-website.git
git push -u origin main
```

**步骤3：Vercel自动部署**
1. 登录Vercel：https://vercel.com/new
2. 导入GitHub仓库
3. 点击 "Deploy"
4. 完成！访问 `https://moran-script-website.vercel.app`

### 🔄 自动更新
后续更新时，只需：
```bash
git add .
git commit -m "更新内容"
git push
```
Vercel会自动重新部署！

### 📱 测试访问
部署成功后，可通过以下地址访问：
```
主域名：https://moran-script.vercel.app/quick-site.html
备用格式：https://moran-script.vercel.app/
```

### 🔧 自定义域名（可选）
如需使用自己的域名（如：moranscript.cn）：
1. 在Vercel项目中点击 "Domains"
2. 添加你的域名
3. 在域名注册商处配置DNS
4. Vercel自动获取SSL证书

### 💡 优势总结
✅ **永久免费**（每月100GB流量，完全够用）  
✅ **全球CDN**（访问速度快）  
✅ **自动HTTPS**（安全可靠）  
✅ **自动部署**（更新方便）  
✅ **支持自定义域名**  
✅ **无服务器维护成本**

### 📊 流量估算
- 网站大小：约50MB（含PDF文件）
- 预估每月访问量：1000次访问 ≈ 50GB流量
- Vercel免费额度：100GB/月 ✓ 完全够用

### 🆘 常见问题

**Q1: 我的PDF文件会上传吗？**  
A: 是的，Vercel会自动上传所有文件，包括web-pdfs/目录下的PDF。

**Q2: 是否需要配置服务器？**  
A: 不需要，Vercel是全托管服务，你只需上传文件。

**Q3: 部署后微信功能正常吗？**  
A: 是的，所有JavaScript和微信弹窗功能都正常。

**Q4: 如何备份网站？**  
A: GitHub仓库就是最好的备份，可随时恢复。

**Q5: 有访问限制吗？**  
A: 免费版支持无限次部署，每月100GB流量，完全足够。

---

## 立即开始
**推荐路径**：
1. 注册GitHub账号（5分钟）
2. 注册Vercel账号（2分钟）
3. 创建GitHub仓库（3分钟）
4. Vercel导入部署（2分钟）

**总计时间**：约12分钟

## 联系方式
如需帮助，可通过以下方式咨询：
- 📨 邮件：support@vercel.com
- 💬 Discord：https://vercel.com/discord
- 📖 中文文档：https://vercel.com/zh/docs

---

**备注**：Vercel由同一团队开发，被AWS收购，非常可靠稳定，是部署静态网站的首选平台。