@echo off
title 墨染剧本杀网站公网部署助手
color 0A
echo.
echo ====================================================
echo        墨染剧本杀网站公网部署助手
echo ====================================================
echo.
echo 请选择部署方式：
echo.
echo [1] ngrok内网穿透（临时测试，免费）
echo [2] 复制文件到GitHub（用于Vercel部署）
echo [3] 打包网站文件
echo [4] 查看部署指南
echo.
echo [0] 退出
echo.
set /p choice=请选择操作编号（0-4）:

if "%choice%"=="1" goto NGrok
if "%choice%"=="2" goto GitHub
if "%choice%"=="3" goto Package
if "%choice%"=="4" goto Guide
if "%choice%"=="0" goto Exit

:NGrok
echo.
echo ====================================================
echo          ngrok内网穿透部署（临时测试）
echo ====================================================
echo.
echo 步骤说明：
echo 1. 访问 https://dashboard.ngrok.com/signup 注册
echo 2. 获取authtoken：https://dashboard.ngrok.com/get-started/your-authtoken
echo 3. 下载ngrok.exe放在本目录
echo 4. 编辑 ngrok-config.yml 文件，填入authtoken
echo.
echo 准备就绪后，双击运行 start-ngrok.bat
echo.
echo 访问地址格式：https://[域名].ngrok-free.app/quick-site.html
echo.
pause
goto End

:GitHub
echo.
echo ====================================================
echo           复制网站文件到GitHub仓库
echo ====================================================
echo.
echo 正在检查并创建网站结构...
echo.
if not exist "网站部署" mkdir "网站部署"
if not exist "网站部署\web-pdfs" mkdir "网站部署\web-pdfs"

echo 正在复制文件...
copy "quick-site.html" "网站部署\index.html"
xcopy "web-pdfs\*.*" "网站部署\web-pdfs\" /E /I /Y

echo.
echo 复制完成！文件已保存在 "网站部署" 文件夹中。
echo.
echo 下一步操作：
echo 1. 将"网站部署"文件夹上传到GitHub
echo 2. 访问 https://vercel.com/new 导入仓库部署
echo 3. 按照 vercel-deploy.md 文档操作
echo.
echo 注意：为了兼容性，已将 quick-site.html 重命名为 index.html
echo 访问地址为：https://你的域名.vercel.app/
echo.
pause
goto End

:Package
echo.
echo ====================================================
echo             打包网站文件（ZIP格式）
echo ====================================================
echo.
echo 正在创建网站文件夹...
if not exist "墨染剧本杀网站" mkdir "墨染剧本杀网站"
if not exist "墨染剧本杀网站\web-pdfs" mkdir "墨染剧本杀网站\web-pdfs"

echo 正在复制文件...
copy "quick-site.html" "墨染剧本杀网站\index.html"
xcopy "web-pdfs\*.*" "墨染剧本杀网站\web-pdfs\" /E /I /Y

echo 正在打包...
echo 网站已复制到 "墨染剧本杀网站" 文件夹
echo 可手动压缩该文件夹后上传到：
echo   1. Vercel
echo   2. 腾讯云COS
echo   3. GitHub Pages
echo   4. 阿里云OSS
echo.
echo 压缩后文件约：50-100MB（取决于PDF文件大小）
echo.
pause
goto End

:Guide
echo.
echo ====================================================
echo              部署指南查看
echo ====================================================
echo.
echo 已为你准备以下部署指南：
echo 1. 部署指南.md        - 完整部署方案对比
echo 2. vercel-deploy.md   - Vercel详细教程
echo 3. start-ngrok.bat    - ngrok快速启动
echo.
echo 建议阅读顺序：
echo 1. 查看 部署指南.md 了解所有选项
echo 2. 阅读 vercel-deploy.md 了解Vercel部署
echo 3. 根据需求选择方案
echo.
echo 推荐：Vercel部署（永久免费、稳定）
echo.
pause
goto End

:Exit
echo.
echo 感谢使用，再见！
timeout /t 2 >nul
exit

:End
echo.
echo 操作完成！
echo 按任意键返回主菜单...
pause >nul
goto :