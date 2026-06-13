'use client'

import { useState } from 'react'

interface Game {
  id: string
  name: string
  category: string
}

const GAMES_DATA: Game[] = [
  { id: '1', name: 'Jewel Boost Reels', category: 'Слоты' },
  { id: '2', name: 'Friar Luck Inn', category: 'Слоты' },
  { id: '3', name: 'The Biggest Win X50', category: 'Слоты' },
  { id: '4', name: 'Pinball Machine', category: 'Слоты' },
  { id: '5', name: 'Battle Loot', category: 'Слоты' },
  { id: '6', name: 'Dawn Coming', category: 'Слоты' },
  { id: '7', name: 'Energy Awakening', category: 'Слоты' },
  { id: '8', name: 'Chocolate Factory', category: 'Слоты' },
  { id: '9', name: 'Dragon Pot', category: 'Слоты' },
  { id: '10', name: 'Season Delite', category: 'Слоты' },
  { id: '11', name: 'Рулетка в реальном времени', category: 'Лайв игры' },
  { id: '12', name: 'Блэкджек с живым дилером', category: 'Лайв игры' },
  { id: '13', name: 'Баккара в реальном времени', category: 'Лайв игры' },
  { id: '14', name: 'Техасский покер', category: 'Карточные игры' },
  { id: '15', name: 'Бaccейн 8', category: 'Карточные игры' },
]

export function SearchGames() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [results, setResults] = useState<Game[]>([])
  const [showResults, setShowResults] = useState(false)

  const categories = ['Все', 'Слоты', 'Лайв игры', 'Карточные игры']

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm)
    setShowResults(true)

    let filtered = GAMES_DATA

    if (searchTerm.trim()) {
      filtered = filtered.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(game => game.category === selectedCategory)
    }

    setResults(filtered)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    let filtered = GAMES_DATA

    if (query.trim()) {
      filtered = filtered.filter(game =>
        game.name.toLowerCase().includes(query.toLowerCase())
      )
    }

    if (category !== 'Все') {
      filtered = filtered.filter(game => game.category === category)
    }

    setResults(filtered)
  }

  return (
    <section className="px-4 md:px-8 py-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Найти игры на Apex casino
      </h2>

      <div className="space-y-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Поиск игры на Apex casino... (например: слот, покер, рулетка)"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
          className="w-full px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition"
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search results */}
        {showResults && (
          <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
            {results.length > 0 ? (
              <div>
                <p className="text-slate-400 text-sm mb-4">
                  Найдено {results.length} игр на Apex casino официальный
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.map(game => (
                    <div
                      key={game.id}
                      className="bg-slate-700/50 hover:bg-slate-600/50 rounded-lg p-4 cursor-pointer transition group"
                    >
                      <h3 className="text-white font-semibold group-hover:text-green-400 transition">
                        {game.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {game.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : query.trim() ? (
              <p className="text-slate-400 text-center py-4">
                На Apex casino не найдено игр по запросу "{query}"
              </p>
            ) : (
              <p className="text-slate-400 text-center py-4">
                Введите название игры для поиска на Apex casino
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
