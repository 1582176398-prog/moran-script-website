interface Props {
  allTags: string[]
  selectedTags: string[]
  onToggle: (tag: string) => void
  onClear: () => void
  searchText: string
  onSearch: (v: string) => void
  difficultyFilter: string
  onDifficultyChange: (v: string) => void
  total: number
  filtered: number
}

export default function FilterBar({
  allTags, selectedTags, onToggle, onClear,
  searchText, onSearch,
  difficultyFilter, onDifficultyChange,
  total, filtered,
}: Props) {
  return (
    <div className="space-y-4">
      {/* 搜索 + 难度 */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="搜索剧本名称..."
            value={searchText}
            onChange={e => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-ink-500/60 transition-colors"
          />
        </div>

        <select
          value={difficultyFilter}
          onChange={e => onDifficultyChange(e.target.value)}
          className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-ink-500/60 cursor-pointer transition-colors appearance-none min-w-[140px]"
        >
          <option value="" className="bg-ink-900">全部难度</option>
          <option value="easy" className="bg-ink-900">新手友好</option>
          <option value="medium" className="bg-ink-900">标准难度</option>
          <option value="hard" className="bg-ink-900">进阶挑战</option>
          <option value="expert" className="bg-ink-900">高阶体验</option>
        </select>
      </div>

      {/* 标签筛选 */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-xs text-gray-500 mr-1">标签：</span>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-150 cursor-pointer ${
              selectedTags.includes(tag)
                ? 'bg-ink-600/60 text-white border-ink-500'
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-ink-600/40 hover:text-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs px-2.5 py-1 rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            清除 ×{selectedTags.length}
          </button>
        )}
      </div>

      {/* 结果数 */}
      <p className="text-xs text-gray-500">
        共 {total} 部剧本
        {filtered !== total && <span className="text-ink-400 ml-1">· 筛选后 {filtered} 部</span>}
      </p>
    </div>
  )
}
