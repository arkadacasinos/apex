'use client'

interface Tag {
  name: string
  href: string
  count: number
}

const TAGS: Tag[] = [
  { name: 'Апекс казино', href: '/', count: 250 },
  { name: 'Apex casino вход', href: '/', count: 180 },
  { name: 'Apex casino играть', href: '/', count: 165 },
  { name: 'Апекс казино регистрация', href: '/', count: 145 },
  { name: 'Apex casino зеркало', href: '/', count: 120 },
  { name: 'Слоты онлайн', href: '/', count: 110 },
  { name: 'Лайв казино', href: '/', count: 95 },
  { name: 'Карточные игры', href: '/', count: 85 },
  { name: 'Бонусы казино', href: '/', count: 75 },
  { name: 'VIP программа', href: '/', count: 65 },
  { name: 'Apex казино официальный', href: '/', count: 140 },
  { name: 'Апекс казино официальный', href: '/', count: 155 },
  { name: 'Казино 2026', href: '/', count: 50 },
  { name: 'Быстрый вывод', href: '/', count: 45 },
  { name: 'Безопасное казино', href: '/', count: 40 },
]

export function TagsCloud() {
  const maxCount = Math.max(...TAGS.map(tag => tag.count))
  const minCount = Math.min(...TAGS.map(tag => tag.count))

  const getTagSize = (count: number) => {
    const percentage = (count - minCount) / (maxCount - minCount)
    if (percentage > 0.8) return 'text-lg md:text-xl'
    if (percentage > 0.6) return 'text-base md:text-lg'
    if (percentage > 0.4) return 'text-sm md:text-base'
    return 'text-xs md:text-sm'
  }

  const getTagOpacity = (count: number) => {
    const percentage = (count - minCount) / (maxCount - minCount)
    if (percentage > 0.8) return 'text-green-300'
    if (percentage > 0.6) return 'text-green-400'
    if (percentage > 0.4) return 'text-slate-300'
    return 'text-slate-400'
  }

  return (
    <section className="px-4 md:px-8 py-12 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Популярные теги Apex casino
      </h2>
      <p className="text-slate-400 mb-8">
        Облако тегов с популярными запросами на Апекс казино официальный
      </p>

      <div className="bg-gradient-to-br from-slate-800/30 to-blue-900/20 rounded-lg p-8 border border-slate-700/50">
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          {TAGS.map((tag, index) => (
            <a
              key={index}
              href={tag.href}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border border-green-500/30 hover:border-green-500 hover:text-green-300 transition whitespace-nowrap font-semibold ${getTagSize(tag.count)} ${getTagOpacity(tag.count)}`}
              title={`${tag.count} результатов для "${tag.name}"`}
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>

      <p className="text-slate-500 text-xs md:text-sm mt-4 text-center">
        На Apex casino официальном сайте доступны все популярные теги и поиск по ключевым словам
      </p>
    </section>
  )
}
