import { useState, useMemo } from 'react'
import Header from './components/Header'
import ScriptCard from './components/ScriptCard'
import ScriptModal from './components/ScriptModal'
import FilterBar from './components/FilterBar'
import { scripts, allTags } from './data/scripts'
import type { Script } from './data/scripts'

export default function App() {
  const [selectedScript, setSelectedScript] = useState<Script | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchText, setSearchText] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('')

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const filteredScripts = useMemo(() => {
    return scripts.filter(s => {
      const matchSearch = !searchText || s.name.includes(searchText) || s.subtitle?.includes(searchText)
      const matchTags = selectedTags.length === 0 || selectedTags.every(t => s.tags.includes(t))
      const matchDiff = !difficultyFilter || s.difficulty === difficultyFilter
      return matchSearch && matchTags && matchDiff
    })
  }, [searchText, selectedTags, difficultyFilter])

  // 统计信息
  const stats = useMemo(() => ({
    total: scripts.length,
    totalPlayers: [...new Set(scripts.map(s => s.players.total))],
    styles: [...new Set(scripts.flatMap(s => s.style))].slice(0, 3),
  }), [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(188,70,224,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.08),transparent_50%)]" />
          {/* 装饰线条 */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

          <div className="relative px-8 py-10 sm:py-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-ink-600/40 text-ink-300 border border-ink-600/30 font-medium">
                  城限专属
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gold-700/30 text-gold-400 border border-gold-700/30 font-medium">
                  重庆限定
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                墨染剧本库
                <span className="block text-xl sm:text-2xl text-ink-300 font-normal mt-1">沉浸演绎 · 城限体验</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                精选重庆城限剧本，每一部都经过墨染团队严格内测与打磨，为您带来最极致的沉浸式剧本杀体验。
              </p>

              {/* 统计 */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <StatPill icon="📚" value={`${stats.total} 部`} label="精品剧本" />
                <StatPill icon="🎭" value="全程演绎" label="DM沉浸服务" />
                <StatPill icon="🏆" value="城限专属" label="重庆限定版本" />
              </div>
            </div>
          </div>
        </div>

        {/* 筛选栏 */}
        <div className="card-glass p-5">
          <FilterBar
            allTags={allTags}
            selectedTags={selectedTags}
            onToggle={toggleTag}
            onClear={() => setSelectedTags([])}
            searchText={searchText}
            onSearch={setSearchText}
            difficultyFilter={difficultyFilter}
            onDifficultyChange={setDifficultyFilter}
            total={scripts.length}
            filtered={filteredScripts.length}
          />
        </div>

        {/* 剧本卡片网格 */}
        {filteredScripts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredScripts.map(script => (
              <ScriptCard
                key={script.id}
                script={script}
                onClick={() => setSelectedScript(script)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg font-medium">没有找到匹配的剧本</p>
            <p className="text-gray-600 text-sm mt-2">试试调整筛选条件</p>
            <button
              onClick={() => { setSelectedTags([]); setSearchText(''); setDifficultyFilter('') }}
              className="mt-4 btn-primary"
            >
              重置筛选
            </button>
          </div>
        )}

        {/* 底部 */}
        <footer className="border-t border-white/8 pt-8 pb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-ink-600 to-ink-800 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 7 5 10.5 5 14a7 7 0 0014 0c0-3.5-3-7-7-12z"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm font-serif">墨染剧本杀</span>
          </div>
          <p className="text-gray-600 text-xs">城限剧本 · 专属体验 · 重庆限定</p>
          <p className="text-gray-700 text-xs mt-1">DM手册仅供内部参考，禁止传播</p>
        </footer>
      </main>

      {/* 详情弹窗 */}
      {selectedScript && (
        <ScriptModal
          script={selectedScript}
          onClose={() => setSelectedScript(null)}
        />
      )}
    </div>
  )
}

function StatPill({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-white font-semibold text-sm leading-tight">{value}</div>
        <div className="text-gray-500 text-xs leading-tight">{label}</div>
      </div>
    </div>
  )
}
