export default function Header() {
  return (
    <header className="relative border-b border-white/8 bg-ink-950/80 backdrop-blur-md sticky top-0 z-40">
      {/* 顶部金色线条 */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + 店名 */}
        <div className="flex items-center gap-3">
          {/* 墨滴图标 */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ink-600 to-ink-800 flex items-center justify-center shadow-lg shadow-ink-700/30">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 7 5 10.5 5 14a7 7 0 0014 0c0-3.5-3-7-7-12z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-white leading-tight">墨染剧本杀</h1>
            <p className="text-xs text-gray-500 leading-none mt-0.5">城限剧本 · 沉浸体验</p>
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            正常营业
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            重庆城限剧本
          </div>
        </div>
      </div>
    </header>
  )
}
