@echo off
title 墨染剧本杀网站公网访问 - ngrok隧道
color 0A
echo.
echo ====================================================
echo        墨染剧本杀网站公网部署助手
echo ====================================================
echo.
echo 请按以下步骤操作：
echo.
echo 1. 首先访问: https://dashboard.ngrok.com/signup 注册账号
echo 2. 在控制台获取您的 authtoken: https://dashboard.ngrok.com/get-started/your-authtoken
echo 3. 将获取的token添加到 ngrok-config.yml 文件中的 authtoken 字段
echo.
echo 已有账号？请继续下一步...
echo.
echo 安装ngrok（如未安装）：
echo    可访问 https://ngrok.com/download 下载Windows版本
echo    或将ngrok.exe文件放在本目录
echo.
pause
echo.
echo 正在启动本地HTTP服务器...
start python -m http.server 8899 --bind 0.0.0.0
echo.
echo 本地服务器已启动：http://localhost:8899/quick-site.html
echo.
echo 请确保已完成以下操作：
echo 1. ✅ 已下载ngrok.exe到本目录
echo 2. ✅ 已配置ngrok-config.yml中的authtoken
echo 3. ✅ 本地服务器正在运行
echo.
pause
echo.
echo 正在启动ngrok公网隧道...
ngrok.exe config add-authtoken YOUR_AUTH_TOKEN_HERE
ngrok.exe http 8899 --domain=moran-script.ngrok-free.app
pause