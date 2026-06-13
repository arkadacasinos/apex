'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-950 to-slate-950/90 border-b border-green-500/20 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent hover:from-green-300 hover:to-cyan-300 transition cursor-pointer">
            Apex
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">Casino</span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-8 max-w-sm">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Apex casino играть"
              className="w-full px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-green-500/50"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">Поиск</span>
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/contact" className="hidden md:block px-6 py-2 text-slate-300 hover:text-green-400 transition">
            Apex casino вход
          </Link>
          <button className="px-4 md:px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition transform hover:scale-105">
            Apex casino регистрация
          </button>
        </div>
      </div>
    </header>
  )
}
