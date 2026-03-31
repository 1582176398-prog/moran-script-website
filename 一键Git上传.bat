@echo off
chcp 65001 >nul
echo.
echo ================================================
echo    墨染剧本杀网站 - Git一键上传脚本
echo    域名：moran1.icu（腾讯云）
echo    创建时间：2026-04-01
echo ================================================
echo.

:: 检查当前目录
echo [1/6] 检查当前目录...
set "current_dir=%cd%"
echo 当前目录：%current_dir%
echo.

:: 检查是否在该目录运行
if not exist "quick-site.html" (
    echo [!] 错误：请在网站目录下运行此脚本！
    echo     请切换到：C:\Users\admin\WorkBuddy\20260401001834\
    echo. 
    pause
    exit /b 1
)

:: 检查Git是否安装
echo [2/6] 检查Git是否安装...
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] 错误：Git未安装或未添加到PATH
    echo     请先安装Git：https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo √ Git已安装
echo.

:: 询问GitHub仓库信息
echo [3/6] 请输入GitHub仓库信息
echo.
set /p github_username=请输入你的GitHub用户名: 
set /p repo_name=请输入要创建的仓库名（推荐：moran-script-website）: 

:: 创建Git仓库
echo.
echo [4/6] 初始化Git仓库...
if not exist ".git" (
    git init
    echo √ 已初始化Git仓库
) else (
    echo - 已有Git仓库，将继续使用
)

:: 添加文件
echo.
echo [5/6] 添加网站文件到仓库...
git add .
echo √ 已添加文件

:: 提交更改
echo.
echo [6/6] 提交更改...
git commit -m "墨染剧本杀网站上线 - 腾讯云域名 moran1.icu"
echo √ 已提交更改

echo.
echo ================================================
echo    完成本地Git配置！
echo ================================================
echo.
echo 接下来需要：
echo 1. 在GitHub创建新仓库：https://github.com/new
echo    仓库名：%repo_name%
echo    公开仓库（Public）
echo    不创建README（因为我们已有一个）
echo.
echo 2. 复制GitHub显示的推送命令，在PowerShell中执行：
echo    git remote add origin https://github.com/%github_username%/%repo_name%.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. 然后按照《完整部署指南-moran1.icu.md》继续Vercel部署
echo.
echo ================================================
echo.
pause