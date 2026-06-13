'use client'

export function PromoBanners() {
  const banners = [
    {
      title: 'Колесо фортуны',
      icon: '🎰',
      color: 'from-blue-600/50 to-slate-900',
    },
    {
      title: 'VIP Клуб',
      icon: '👑',
      color: 'from-amber-600/50 to-slate-900',
    },
    {
      title: 'Магазин бонусов',
      icon: '🎁',
      color: 'from-purple-600/50 to-slate-900',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 mb-8">
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${banner.color} border border-green-500/20 rounded-xl p-6 cursor-pointer hover:border-green-500/50 transition group`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-white group-hover:text-green-400 transition">
              {banner.title}
            </h3>
            <span className="text-3xl">{banner.icon}</span>
          </div>
          <p className="text-slate-400 text-sm mt-2">Нажмите для подробнее →</p>
        </div>
      ))}
    </div>
  )
}
