'use client'

export function GamesSection() {
  const topGames = [
    { name: 'Jewel Boost Reels', image: '/slots/jewel-boost.png', rtp: '140%', players: '1324' },
    { name: 'Friar Luck\'s Inn', image: '/slots/friar-luck.png' },
    { name: 'The Biggest Win X50', image: '/slots/biggest-win.png' },
    { name: 'Pinball Machine', image: '/slots/pandaball.png' },
    { name: 'Battle Loot', image: '/slots/battle-loot.png' },
    { name: 'Dawn Coming', image: '/slots/dawn-coming.png' },
    { name: 'Energy Awakening', image: '/slots/energy-awakening.png' },
    { name: 'Chocolate Factory', image: '/slots/chocolate-factory.png' },
  ]

  const slots = [
    { name: 'Jewel Boost Reels', image: '/slots/jewel-boost.png' },
    { name: 'Battle Loot', image: '/slots/battle-loot.png' },
    { name: 'Friar Luck\'s Inn', image: '/slots/friar-luck.png' },
    { name: 'Dawn Coming', image: '/slots/dawn-coming.png' },
    { name: 'Energy Awakening', image: '/slots/energy-awakening.png' },
    { name: 'Chocolate Factory', image: '/slots/chocolate-factory.png' },
    { name: 'Dragon Pot', image: '/slots/dragon-pot.png' },
    { name: 'Season Delite', image: '/slots/season-delite.png' },
  ]

  const GameCard = ({ game, featured = false }) => (
    <div className="group cursor-pointer">
      {featured ? (
        <div className="relative overflow-hidden rounded-2xl border-2 border-green-500/50 hover:border-green-400 transition bg-slate-900/50">
          <div className="aspect-square overflow-hidden">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            {game.players && (
              <>
                <p className="text-slate-400 text-sm">Сейчас играют:</p>
                <p className="text-2xl font-bold text-green-400">{game.players}</p>
                {game.rtp && <p className="text-slate-400 text-sm">RTP: {game.rtp}</p>}
              </>
            )}
            <button className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded-lg transition">
              Играть
            </button>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl border border-slate-800 hover:border-green-500/50 transition bg-slate-900/30">
          <div className="aspect-square overflow-hidden">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
            <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded text-sm transition">
              Играть
            </button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-12 px-4 md:px-8 mb-12">
      {/* Top Games Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Топ игры Apex casino</h2>
          <button className="text-slate-400 hover:text-green-400 transition">
            Смотреть все →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topGames.map((game, idx) => (
            <GameCard key={idx} game={game} featured={idx === 0} />
          ))}
        </div>
      </section>

      {/* Slots Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Слоты Apex casino играть онлайн</h2>
          <button className="text-slate-400 hover:text-green-400 transition">
            Смотреть все →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slots.map((game, idx) => (
            <GameCard key={idx} game={game} />
          ))}
        </div>
      </section>

      {/* Casual Games Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Случайная игра Apex casino официальный</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topGames.slice(0, 8).map((game, idx) => (
            <GameCard key={idx} game={game} />
          ))}
        </div>
      </section>
    </div>
  )
}
