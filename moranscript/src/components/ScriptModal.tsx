import { tagColors, difficultyConfig } from '../data/scripts'
import type { Script } from '../data/scripts'

interface Props {
  script: Script
  onClose: () => void
}

export default function ScriptModal({ script, onClose }: Props) {
  const diff = difficultyConfig[script.difficulty]

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleBackdrop}>
      <div className="modal-content animate-slide-up flex flex-col">
        {/* 头部 */}
        <div className="relative">
          <div className="h-2 w-full bg-gradient-to-r from-ink-700 via-ink-500 to-gold-500" />
          <div className="p-6 pb-4 border-b border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-ink-700/60 text-ink-300 border border-ink-600/30 font-medium">
                    城限剧本
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded ${diff.bg} ${diff.color} border border-current/20 font-medium`}>
                    {diff.label}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">{script.name}</h2>
                {script.subtitle && (
                  <p className="text-sm text-gray-400 mt-1">{script.subtitle}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {script.tags.map(tag => (
                <span
                  key={tag}
                  className={`tag-style border ${tagColors[tag] || 'bg-gray-700/40 text-gray-300 border-gray-600/30'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 内容滚动区 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* 基本信息 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            } label="玩家人数" value={`${script.players.total}人`} sub={`${script.players.male}男${script.players.female}女`} />
            <StatCard icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            } label="游戏时长" value={script.duration} sub="参考时长" />
            <StatCard icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            } label="DM配置" value={`${script.staff.dm}名DM`} sub={script.staff.npc > 0 ? `+${script.staff.npc}名NPC` : '无额外NPC'} />
            <StatCard icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            } label="难度等级" value={diff.label} sub={script.difficulty.toUpperCase()} />
          </div>

          {/* 人员配置详情 */}
          <Section title="人员配置">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-ink-600/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">玩家：{script.players.description}</p>
                  <p className="text-gray-400 text-sm">{script.staff.description}</p>
                </div>
              </div>
            </div>
          </Section>

          {/* 剧情简介 */}
          <Section title="剧情简介">
            <p className="text-gray-300 text-sm leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10">
              {script.synopsis}
            </p>
          </Section>

          {/* 亮点 */}
          {script.highlights.length > 0 && (
            <Section title="剧本亮点">
              <ul className="space-y-2">
                {script.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-ink-600/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-ink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* 角色一览 */}
          {script.roles && script.roles.length > 0 && (
            <Section title="角色一览">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {script.roles.map(role => (
                  <div key={role.name} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className={`mt-0.5 text-lg shrink-0`}>
                      {role.gender === 'male' ? '♂' : role.gender === 'female' ? '♀' : '⚬'}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{role.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* 风格标签 */}
          <Section title="剧本风格">
            <div className="flex flex-wrap gap-2">
              {script.style.map(s => (
                <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-gold-700/20 text-gold-400 border border-gold-700/30">
                  {s}
                </span>
              ))}
            </div>
          </Section>
        </div>

        {/* 底部操作 */}
        <div className="p-4 pt-0 border-t border-white/10 flex gap-3">
          <a
            href={`file:///${script.dmManualPath}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 btn-gold flex items-center justify-center gap-2 py-2.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            打开 DM 手册
          </a>
          <button onClick={onClose} className="px-4 py-2.5 rounded-lg bg-white/10 text-gray-300 text-sm hover:bg-white/15 transition-colors cursor-pointer">
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-300 uppercase tracking-wider mb-3 flex items-center gap-2">
        <span className="w-1 h-4 rounded-full bg-ink-500 block" />
        {title}
      </h4>
      {children}
    </div>
  )
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
      <div className="flex justify-center mb-2 text-ink-400">{icon}</div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-sm font-bold text-white">{value}</div>
      <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
    </div>
  )
}
