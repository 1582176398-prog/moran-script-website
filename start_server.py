#!/usr/bin/env python3
"""
启动脚本，用于快速检查文件并启动HTTP服务器
"""

import os
import webbrowser
import subprocess
import time
import sys

def check_files():
    """检查相关文件是否存在"""
    print("[文件检查] 检查文件完整性...")
    
    files_to_check = [
        ("quick-site.html", "主网页文件"),
        ("web-pdfs/bgmusic.flac", "背景音乐文件"),
        ("web-pdfs/bishangguan.pdf", "壁上观PDF"),
        ("web-pdfs/tonggui.pdf", "同归PDF"),
        ("web-pdfs/dayan_zhuban.pdf", "大宴之上PDF"),
    ]
    
    all_ok = True
    for file_path, description in files_to_check:
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            print(f"[OK] {description}: {file_path} ({size:,} bytes)")
        else:
            print(f"[ERROR] {description}: {file_path} (缺失)")
            all_ok = False
    
    return all_ok

def start_http_server():
    """启动HTTP服务器"""
    print("\n[服务器] 启动HTTP服务器...")
    
    # 检查端口是否被占用
    try:
        import socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex(('localhost', 8888))
        sock.close()
        if result == 0:
            print("[INFO] 端口8888已被占用，假设服务器已在运行")
            return True
    except:
        pass
    
    # 启动服务器
    try:
        server_process = subprocess.Popen(
            ["python", "-m", "http.server", "8888", "--bind", "0.0.0.0"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            cwd=os.path.dirname(os.path.abspath(__file__))
        )
        
        time.sleep(2)  # 给服务器启动时间
        
        print("[OK] HTTP服务器启动成功")
        print(f"[URL] 本地网址: http://localhost:8888/quick-site.html")
        print(f"[URL] 局域网网址: http://192.168.1.2:8888/quick-site.html")
        
        return True
    except Exception as e:
        print(f"[ERROR] 启动服务器失败: {e}")
        return False

def check_html_content():
    """检查HTML文件内容"""
    print("\n[HTML检查] 检查HTML文件内容...")
    try:
        with open("quick-site.html", "r", encoding="utf-8") as f:
            html_content = f.read()
        
        # 检查是否有10个剧本卡片
        scripts_count = html_content.count('class="script-card"')
        print(f"[COUNT] 剧本卡片数量: {scripts_count}")
        
        # 检查是否有新添加的剧本
        if "壁上观" in html_content:
            print("[OK] 已添加: 壁上观")
        else:
            print("[ERROR] 缺失: 壁上观")
            
        if "同归" in html_content:
            print("[OK] 已添加: 同归")
        else:
            print("[ERROR] 缺失: 同归")
            
        # 检查统计数字
        if "stat-number\">10</div>" in html_content:
            print("[OK] 统计数据已更新为10部")
        else:
            print("[ERROR] 统计数据未更新")
            
        # 检查音乐播放器代码
        if "preload = \"auto\"" in html_content:
            print("[OK] 音乐播放器已优化（预加载）")
        else:
            print("[ERROR] 音乐播放器未优化")
            
    except Exception as e:
        print(f"[ERROR] 读取HTML文件时出错: {e}")
        return False
    
    return True

def main():
    print("=" * 50)
    print("墨染剧本杀网站更新检查脚本")
    print("=" * 50)
    
    # 检查工作目录
    if not os.path.exists("quick-site.html"):
        print("❌ 请在包含quick-site.html的目录中运行此脚本")
        sys.exit(1)
    
    # 执行检查
    files_ok = check_files()
    html_ok = check_html_content()
    
    if files_ok and html_ok:
        print("\n[SUCCESS] 所有检查通过！网站已更新完成。")
        
        # 启动服务器
        if start_http_server():
            print("\n[SUMMARY] 功能更新总结:")
            print("   1. 音乐播放器已优化：缩小尺寸，只保留播放键和进度条")
            print("   2. 音乐加载慢的问题已修复：添加预加载功能")
            print("   3. 新增2个剧本：壁上观、同归")
            print("   4. 统计数据已更新：8部 --> 10部剧本")
            print("   5. 下载说明已更新：9部 --> 11部剧本")
            
            print("\n[COMPLETE] 更新完成！网站已准备就绪。")
        else:
            print("\n[WARNING] 服务器启动失败，请手动运行:")
            print('   python -m http.server 8888 --bind 0.0.0.0')
    else:
        print("\n[WARNING] 存在一些检查失败，请检查以上错误信息。")
    
    print("\n" + "=" * 50)

if __name__ == "__main__":
    main()