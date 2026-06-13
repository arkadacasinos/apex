'use client'

interface RelatedGame {
  id: string
  name: string
  image: string
  category: string
  rtp: string
}

const RELATED_GAMES: RelatedGame[] = [
  { id: '1', name: 'Jewel Boost Reels', image: '/slots/jewel-boost.png', category: 'Слоты', rtp: '96.5%' },
  { id: '2', name: 'Battle Loot', image: '/slots/battle-loot.png', category: 'Слоты', rtp: '97.2%' },
  { id: '3', name: 'Dawn Coming', image: '/slots/dawn-coming.png', category: 'Слоты', rtp: '96.8%' },
  { id: '4', name: 'Energy Awakening', image: '/slots/energy-awakening.png', category: 'Слоты', rtp: '97.0%' },
]

export function RelatedGames() {
  return (
    <section className="px-4 md:px-8 py-12 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Похожие игры на Apex casino
      </h2>
      <p className="text-slate-400 mb-8">
        Ещё интересные слоты и развлечения на Апекс казино официальный
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {RELATED_GAMES.map((game) => (
          <div
            key={game.id}
            className="group cursor-pointer relative overflow-hidden rounded-lg transition transform hover:scale-105"
          >
            <div className="relative w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">
                  {game.name}
                </h3>
                <div className="flex justify-between text-xs text-green-400 mb-3">
                  <span>{game.category}</span>
                  <span>RTP: {game.rtp}</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition text-sm">
                  Играть на Apex casino
                </button>
              </div>
            </div>

            {/* Info below */}
            <div className="mt-2">
              <h3 className="text-white font-semibold text-sm group-hover:text-green-400 transition line-clamp-2">
                {game.name}
              </h3>
              <p className="text-slate-400 text-xs">
                {game.category} • RTP {game.rtp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
