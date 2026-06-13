'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-900/20 to-slate-900 border border-green-500/20 mx-4 md:mx-8 mb-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative grid md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-block w-fit mb-4">
            <span className="bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
              Новое предложение
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            ДО 250% <span className="text-green-400">+900ФС</span>
          </h1>

          <p className="text-slate-300 mb-2 text-base md:text-lg font-semibold">
            Apex Casino официальный сайт с лучшими слотами
          </p>

          <p className="text-slate-400 mb-6 flex items-center gap-2 text-sm md:text-base">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Срок ввода: 22:24:58
          </p>

          <button className="w-fit bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-8 py-3 rounded-full font-bold text-white transition transform hover:scale-105 shadow-lg shadow-green-500/50">
            Забрать бонус
          </button>

          {/* Payment methods */}
          <div className="mt-8 pt-6 border-t border-green-500/20">
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-400">
              <span>💳 Карты</span>
              <span>💚 Pay</span>
              <span>🔷 МИР</span>
              <span>⚡ TRON</span>
              <span>🔗 Tether</span>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              <Link href="/contact" className="text-green-400 hover:underline">Остальные методы в поддержке</Link>
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex items-end justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-3xl blur-2xl"></div>
            <img
              src="/hero-man.webp"
              alt="Апекс Casino премиум участник"
              className="relative h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="md:hidden px-4 pb-4">
        <img
          src="/hero-man.webp"
          alt="Апекс Casino премиум участник"
          className="w-full h-auto max-h-96 object-cover rounded-xl"
        />
      </div>
    </section>
  )
}
