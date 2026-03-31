import { useState } from 'react'
import { tagColors, difficultyConfig } from '../data/scripts'
import type { Script } from '../data/scripts'

interface Props {
  script: Script
  onClick: () => void
}

export default function ScriptCard({ script, onClick }: Props) {
  const [hovered, setHovered] = useState(false)
  const diff = difficultyConfig[script.difficulty]

  return (
    <div
      className={`card-glass cursor-pointer transition-all duration-300 overflow-hidden group ${hovered ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* 顶部装饰条 */}
      <div className="h-1 w-full bg-gradient-to-r from-ink-600 via-ink-400 to-gold-500" />

      <div className="p-5">
        {/* 标题行 */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-serif font-bold text-white leading-tight truncate group-hover:text-ink-300 transition-colors">
              {script.name}
            </h3>
            {script.subtitle && (
              <p className="text-xs text-gray-400 mt-0.5 truncate">{script.subtitle}</p>
            )}
          </div>
          <span className={`shrink-0 text-xs px-2 py-1 rounded-md font-medium ${diff.bg} ${diff.color} border border-current/20`}>
            {diff.label}
          </span>
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {script.tags.slice(0, 5).map(tag => (
            <span
              key={tag}
              className={`tag-style border ${tagColors[tag] || 'bg-gray-700/40 text-gray-300 border-gray-600/30'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 信息格子 */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <InfoCell icon="👥" label="人数" value={`${script.players.total}人`} />
          <InfoCell icon="⏱" label="时长" value={script.duration} />
          <InfoCell icon="🎭" label="DM配置" value={`${script.staff.dm}DM${script.staff.npc > 0 ? `+${script.staff.npc}NPC` : ''}`} />
        </div>

        {/* 简介 */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
          {script.synopsis}
        </p>

        {/* 底部按钮 */}
        <div className="flex gap-2">
          <button
            className="flex-1 btn-primary text-center"
            onClick={e => { e.stopPropagation(); onClick() }}
          >
            查看详情
          </button>
          <a
            href={`file:///${script.dmManualPath}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold text-center"
            onClick={e => e.stopPropagation()}
            title="打开DM手册"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

function InfoCell({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-lg p-2 text-center">
      <div className="text-base leading-none mb-1">{icon}</div>
      <div className="text-xs text-gray-500 mb-0.5">{label}</div>
      <div className="text-xs font-semibold text-white truncate">{value}</div>
    </div>
  )
}
