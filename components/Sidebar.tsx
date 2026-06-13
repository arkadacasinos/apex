'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { icon: 'Слоты', label: 'Слоты', href: '/#slots' },
    { icon: 'Лайв', label: 'Лайв игры', href: '/#live' },
    { icon: 'Карты', label: 'Карточные', href: '/#cards' },
    { icon: '', label: '', href: '', isSeparator: true },
    { icon: 'Горячие', label: 'Горячие', href: '/#hot' },
    { icon: 'Новые', label: 'Новые', href: '/#new' },
    { icon: 'Топ', label: 'Топ игры', href: '/#top' },
    { icon: 'Поиск', label: 'Поиск', href: '/#search' },
    { icon: 'Теги', label: 'По тегам', href: '/#tags' },
    { icon: 'FAQ', label: 'Вопросы', href: '/#faq' },
    { icon: '', label: '', href: '', isSeparator: true },
    { icon: 'О нас', label: 'О Апекс', href: '/#about' },
    { icon: 'Поддержка', label: 'Контакты', href: '/contact' },
    { icon: 'Условия', label: 'Условия', href: '/terms' },
    { icon: 'Приватность', label: 'Приватность', href: '/privacy' },
  ]

  return (
    <>
      {/* Мобильное меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-4 z-40 md:hidden bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        {isOpen ? 'X' : '='}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen md:h-auto w-48 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-green-500/10 p-4 transition-all duration-300 z-30 md:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* VIP Button */}
        <div className="mb-6 mt-12 md:mt-0">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-3 rounded-lg font-bold text-white transition transform hover:scale-105 flex items-center justify-center gap-2">
            <span>VIP</span>
            <span>Клуб</span>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
          {categories.map((cat, idx) => {
            if (cat.isSeparator) {
              return (
                <div key={idx} className="h-px bg-green-500/10 my-3"></div>
              )
            }
            return cat.href.startsWith('/') ? (
              <Link
                key={idx}
                href={cat.href}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-green-500/10 transition flex items-center gap-3 group block"
              >
                <span className="text-sm font-semibold text-green-400 group-hover:text-green-300 w-8 flex-shrink-0">{cat.icon}</span>
                <span className="text-sm truncate group-hover:text-green-400">{cat.label}</span>
              </Link>
            ) : (
              <a
                key={idx}
                href={cat.href}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-green-500/10 transition flex items-center gap-3 group block"
              >
                <span className="text-sm font-semibold text-green-400 group-hover:text-green-300 w-8 flex-shrink-0">{cat.icon}</span>
                <span className="text-sm truncate group-hover:text-green-400">{cat.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-500 border-t border-slate-700 pt-3">
          <p>18+</p>
          <p className="text-gray-600 mt-1">Ответственная игра</p>
          <Link href="/privacy" className="text-slate-400 hover:text-green-400 text-xs block mt-2">
            Политика приватности
          </Link>
        </div>
      </aside>

      {/* Overlay для мобилки */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-20"
        ></div>
      )}
    </>
  )
}
