# MEMORY.md - 长期记忆

## 用户信息
- 用户从事剧本杀行业
- 店名：**墨染剧本杀**（重庆城限剧本店）
- 主营城限剧本

## 墨染剧本杀网站项目
- 项目路径：`C:\Users\admin\WorkBuddy\20260401001834\moranscript`
- 技术栈：React + TypeScript + Vite + Tailwind CSS 3
- 启动命令（需先设置 Node 路径）：`npm run dev -- --port 5179`
- Node.js 可执行文件：`C:\Users\admin\.workbuddy\binaries\node\versions\20.18.0.installing.38928.__extract_temp__\node-v20.18.0-win-x64\node.exe`
- 剧本 PDF 原始文件路径：`C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\`

## 静态HTML版本（推荐使用）
- 文件路径：`C:\Users\admin\WorkBuddy\20260401001834\quick-site.html`
- PDF 服务目录：`C:\Users\admin\WorkBuddy\20260401001834\web-pdfs\`
- 启动命令：`python -m http.server 8888 --bind 0.0.0.0`
- 访问地址：
  - 本地：`http://localhost:8888/quick-site.html`
  - 局域网：`http://192.168.1.2:8888/quick-site.html`
- 新增功能：美化页面、每个剧本有专属图标、精准简介、图标位置优化
- 水墨美化（2026-04-01 03:28）：添加水墨花纹背景、背景音乐播放器、水墨装饰元素
- 配色改版和功能升级（2026-04-01 03:56）：
  - **配色优化**：更柔和的#f8f9fa背景色和#2c3e50文字色，提高可读性
  - **背景音乐**：改为陈芳语《爱你》MP3，自动播放，单曲循环，加载优化
  - **请君入瓮修复**：修正DM手册链接错误
  - **角色简介弹窗**：为每个剧本添加角色简介按钮，点击弹出详情
  - **优化布局**：DM手册和角色简介按钮并排显示，卡片添加轻微阴影

## PDF文件映射（英文文件名）
1. 大宴之上（主版）→ dayan_zhuban.pdf (🏯)
2. 万仞青山听水寒 → wanren.pdf (🗡️)
3. 流芳 → liufang.pdf (📜)
4. 梦灵祈念时 → mengling.pdf (🎭)
5. 窃云台 → qieyuntai.pdf (👑)
6. 请君入瓮 → qingjunruweng.pdf (📖)
7. 阙落 → santi_queluo.pdf (🌌) [原三体·阙落]
8. 如故 → santi_rugu.pdf (🌠) [原三体·如故]
9. 壁上观 → bishangguan.pdf (🧱) [新增剧本]
10. 同归 → tonggui.pdf (🧭) [新增剧本]

## 弹幕功能（2026-04-01 07:50新增，10:28升级）
- 已集成到 `quick-site.html` 中
- **特性**：14px小字体、15s慢速飘动、Supabase云端永久保存（多设备共享）
- **交互**：右下角💬按钮唤出发送面板，5种颜色可选，点击暂停右键删除
- **无演示弹幕**：已去掉自动演示弹幕和底部提示文字
- **Supabase配置**：已配置完成并验证（读写均正常）
  - URL: https://nidgmnajrirgiurtnggu.supabase.co
  - 表名: danmu，字段：id, text, color, created_at
- **降级处理**：未配置Supabase时，弹幕仅本机展示（发送正常，不保存云端）
- **管理员功能**：右下角⚙️按钮，输入密码228377登录后可查看/删除/清空弹幕

## 门店信息更新（2026-04-01）
- 新地址：重庆市沙坪坝区大学城熙街2栋22-5
- 营业时间：14:00-24:00
- 标语：重庆城限剧本精品店 · 沉浸式体验

## 已调整剧本（10部，包含新增剧本）
1. 大宴之上（主版）- 3男3女，9h+，2DM+2NPC，古风变格情感，进阶难度
2. 万仞青山听水寒 - 3男3女，8-9h，古风仙侠情感，三重转世设定，标准难度
3. 流芳 - 3男3女，9h+，历史改编（江阴八十一日），家国情怀正剧，进阶难度
4. 梦灵祈念时 - 3男3女，9h+，日式奇幻推理，米田三利世界观，进阶难度
5. 窃云台 - 3男3女，8h+，仰止作品正剧权谋，重家国传承，进阶难度
6. 请君入瓮 - 3男3女，9-10h，古风穿书情感架空，进阶难度
7. 阙落 - 3男3女，8-9h，古风架空情感，高阶难度
8. 如故 - 3男3女，12h+，古风架空情感，进阶难度
9. 壁上观 - 2男4女，9-10h，西游改编古风情感，进阶难度
10. 同归 - 3男3女，6-7h，古风情感，标准难度

## 2026-04-01 重要配置更新
- **角色配置修正**：
  - 阙落：从4男2女改为3男3女
  - 壁上观：从3男3女改为2男4女
- **时长精确更新**：
  - 请君入瓮：9-10h
  - 阙落：8-9h
  - 如故：12h+
  - 壁上观：9-10h
  - 同归：6-7h
- **联系方式统一**：
  - 电话咨询：18602368863
  - 微信咨询：Moran18602368863

## 2026-04-01 增强可点击提示
- **按钮悬停效果**：DM手册和角色简介按钮悬停时显示👆图标，添加亮度提升
- **统计卡片效果**：剧本和DM统计卡片悬停时上浮+阴影+边框变色+显示"👆 点击"提示
- 两个文件已同步更新

## 2026-04-01 取名评论功能
- **取名弹窗**：首次进入网站时弹出取名弹窗，用户可输入2-10字昵称
- **评论权限**：未取名用户无法评论，点击评论按钮会提示去取名
- **用户名显示**：评论显示发布者的昵称
- **修改昵称**：右下角👤按钮可查看/修改昵称
- **localStorage存储**：用户名存储在浏览器本地

## 编辑角色功能升级（2026-04-01 18:10）
- **密码时效**：输入050701后5分钟内免密（需点击"直接进入编辑"确认）
- **弹窗优化**：
  - 左边：选择DM + 显示当前角色（黄色背景）
  - 右边：剧本下拉框 + 角色名输入 + 添加按钮 + 编辑列表（黄色背景）
- **手机适配**：500px以下变成单列布局
- **出演角色样式**：黑色字体 + 黄色背景，去掉emoji改用✦
- **云端同步**：dm_roles 表保存角色数据，刷新后不丢失
- **新增函数**：addRoleToEditList、removeRoleFromEdit、renderEditRolesList、isPasswordValid、markPasswordVerified、skipPasswordAndEnter、resetPasswordEntry、saveDMRolesToCloud、loadDMRolesFromCloud

## 按钮点击失效修复（2026-04-01 18:00）
- **根本原因**：JavaScript 语法错误导致脚本无法正确执行
  - `showDMRoles` 和 `showEditDMRoles` 函数使用了普通字符串而非模板字符串
- **修复**：将普通字符串改为模板字符串（反引号）
- **同步**：两个文件已同步

## 按钮z-index修复（2026-04-01 17:50）
- .script-card `overflow: hidden` → `overflow: visible`
- 添加 `.script-card { z-index: 1 }` 建立堆叠上下文
- 按钮 z-index 提升到 100001

## 角色信息完整更新（2026-04-01 04:56）
- **角色简介功能已完成全面升级**：
  1. ✅ 大宴之上 - 6个角色（刘昭月、刘泠雪、苏清梦、苏星禾、苏宴卿、刘祈之）
  2. ✅ 万仞青山听水寒 - 6个角色（萧辞、棠月、李知行、阿沅、沈初一、赵小西）
  3. ✅ 流芳 - 6个角色（陈稷、杨玉笙、冯厚敦、陈阎芙蓉、方圆、赵晚舟）
  4. ❌ 梦灵祈念时 - 无角色信息（不显示角色按钮）
  5. ✅ 窃云台 - 6个角色（阿兰珠、谢雨山、怀宁、朱懿安、苏月白、朱懿珩）
  6. ✅ 请君入瓮 - 6个角色（3女：皇甫司瑶、皇甫赤华、步婉凝；3男：皇甫景澄、雍门清夜、凌少禹）
  7. ✅ 阙落 - 6个角色（3男：孝瓘、须拔、步落稽；3女：咏絮、泱泱、子姝）
  8. ❌ 如故 - 无角色信息（不显示角色按钮）
  9. ✅ 壁上观 - 6个角色（九劫、胡不为、未央、素素、江清禾、阿绾）
  10. ✅ 同归 - 6个角色（3男：顾成文、无尘、李星一；3女：雁流霜、柳月明、季青枫）

- **技术实现**：
  - 8个剧本已添加角色简介按钮（显示👥角色简介）
  - 2个剧本保持原样（无按钮）
  - JavaScript角色数据已全部替换为用户提供的最新版本
  - 弹窗功能完整保留（右上角关闭、ESC键关闭、遮罩层点击关闭）

## 角色按钮问题修复（2026-04-01 05:03）
- **修复问题**：多个剧本按钮存在转义错误导致点击无效
- **修复内容**：
  1. 万仞青山听水寒：修复 `showRoleModal(\'wanren\')` → `showRoleModal('wanren')`
  2. 流芳：修复 `showRoleModal(\'liufang\')` → `showRoleModal('liufang')`
  3. 窃云台：修复 `showRoleModal(\'qieyuntai\')` → `showRoleModal('qieyuntai')`
  4. 请君入瓮：修复 `showRoleModal(\'qingjunruweng\')` → `showRoleModal('qingjunruweng')`
  5. 壁上观：修复 `showRoleModal(\'bishangguan\')` → `showRoleModal('bishangguan')`
  6. 同归：修复 `showRoleModal(\'tonggui\')` → `showRoleModal('tonggui')`
- **梦灵祈念时按钮删除**：移除角色简介按钮，只保留DM手册链接

## 微信弹窗功能优化（2026-04-01 05:58）
- **取消自动跳转**：改为用户确认后再跳转，避免体验不佳
- **修复方框显示**：
  1. 微信号区域使用 `word-wrap: break-word` 和 `word-break: break-all`
  2. 增加内边距和自适应宽度的容器
  3. 使用flexbox确保完整显示长微信号"Moran18602368863"
- **改进复制功能**：
  1. 三层降级方案：Clipboard API → execCommand → 手动提示
  2. 手机端提供跳转确认对话框
  3. 支持微信浏览器内特殊提示
- **优化UI设计**：
  1. 更清晰的按钮层级（主次分明）
  2. 增加悬停动画效果
  3. 改进操作指引显示逻辑

## 网站公网部署方案（2026-04-01 06:00）
- **当前状态**：本地HTTP服务器运行在 8899 端口
  - 本地访问：http://localhost:8899/quick-site.html
  - 局域网访问：http://192.168.1.2:8899/quick-site.html
- **部署方案已创建**：
  1. **一键部署.bat** - 部署助手脚本
  2. **部署指南.md** - 完整方案对比
  3. **vercel-deploy.md** - Vercel永久免费部署教程
  4. **域名配置.md** - 域名绑定指南
  5. **ngrok-config.yml** - 内网穿透配置
- **推荐方案**：
  - 测试期：ngrok内网穿透（免费，临时演示）
  - 运营期：Vercel部署（永久免费，专业稳定）
  - 专业期：+专属域名（约35-85元/年）
- **成本对比**：
  - 免费方案：Vercel免费版 + 无域名
  - 低成本方案：Vercel + .cn域名（35元/年）
  - 企业方案：腾讯云COS + .com域名（约205元/年）

## 打本历程功能更新（2026-04-01 16:58）
- **剧本列表**：包含网站10个剧本 + "自定义"选项
- **日期格式**：显示为中文格式"2026年04月01日"
- **恋陪位选项**：新增是/否选择，选择"是"后显示NPC名字输入框
- **Supabase数据库表**：my_plays 表需要添加字段
  - `has_lianpei` (TEXT)：是否需要恋陪（默认"否"）
  - `lianpei_name` (TEXT)：恋陪NPC名字
- **需要手动操作**：登录 Supabase Dashboard → SQL Editor 执行：
  ```sql
  ALTER TABLE my_plays 
  ADD COLUMN IF NOT EXISTS has_lianpei TEXT DEFAULT '否',
  ADD COLUMN IF NOT EXISTS lianpei_name TEXT;
  ```

## DM头像标签功能（2026-04-01 19:11更新）
- **点击DM头像**：弹出标签浮云弹窗，显示该DM的所有标签
- **标签数量**：最多10个标签
- **标签长度**：每个标签最多6个汉字或12个字母
- **飘动动画（2026-04-01 19:11，19:19更新）**：
  - 标签从右向左或从左向右飘动，飘出边界后等待2-2.5秒再从另一侧重新出现
  - 每个标签有独立的速度（0.15-0.35px/帧，非常缓慢）
  - 每个标签有独立的等待时间（2-2.5秒随机）
  - 每个DM有独特配色（金/红/绿/蓝/紫/橙/青/深灰8种）
  - 完全避开头像区域，不遮挡头像
  - 使用 requestAnimationFrame 实现流畅60fps动画
- **编辑功能**：在编辑角色弹窗中可添加/删除标签
- **云端同步**：dm_roles 表新增 `tags` 字段，保存为JSON数组
- **数据存储**：`dmTagsMap` 本地映射
- **核心函数**：
  - `tagAnimations` - 存储每个DM的动画状态
  - `TAG_TRACKS` - 4条轨道配置
  - `startTagAnimation(dmName)` - 启动标签动画
  - `stopTagAnimation(dmName)` - 停止标签动画
  - `updateTagPositions(dmName, speed)` - 更新标签位置
  - `restoreAllTagAnimations()` - 恢复所有DM的动画
- **数据库需要手动添加**：
  ```sql
  ALTER TABLE dm_roles ADD COLUMN IF NOT EXISTS tags TEXT DEFAULT '[]';
  ```

