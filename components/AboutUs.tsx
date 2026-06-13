'use client'

import { useState } from 'react'

export function AboutUs() {
  const [isOpen, setIsOpen] = useState(false)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  return (
    <section className="px-4 md:px-8 py-12 mb-8 bg-gradient-to-r from-slate-900/50 to-blue-900/30 rounded-lg border border-green-500/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-800/30 transition rounded-lg group"
      >
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            О нас. Apex Casino официальный сайт
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Узнайте больше про Apex casino и нашу миссию в индустрии онлайн-гемблинга. Сайт: <a href={siteUrl} className="text-green-400 hover:underline">{siteUrl}</a>
          </p>
        </div>
        <div
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 transition-transform duration-300 group-hover:bg-green-500/30 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-slate-300 space-y-6 animate-in fade-in duration-300">
          <p>
            Apex casino - это лидирующая платформа для онлайн-гемблинга на адресе {siteUrl}, которая предоставляет премиум-опыт
            для игроков по всему миру. На Apex casino официальный сайт вы сможете играть в самые популярные слоты,
            лайв-игры и карточные развлечения. Apex casino вход доступен круглосуточно на {siteUrl}, а регистрация на Apex casino
            займет всего несколько минут.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              Почему выбирают Apex casino официальный на {siteUrl}
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">1.</span>
                <span>
                  На Apex casino играть можно в более 1000 лицензионных игр, включая лучшие слоты от ведущих
                  разработчиков. Apex casino зеркало на {siteUrl} обеспечивает полный доступ ко всем играм в любое время.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">2.</span>
                <span>
                  Apex casino регистрация позволяет получить 250% бонус до 900 рублей на первый депозит.
                  На Apex casino официальный сайт {siteUrl} регулярно проходят акции и раздачи призов для всех игроков.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">3.</span>
                <span>
                  Apex casino вход защищен современной системой шифрования, что гарантирует полную безопасность
                  ваших данных и финансовых транзакций. Играть на {siteUrl} абсолютно безопасно.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">4.</span>
                <span>
                  Команда поддержки Apex casino работает 24/7 для решения любых вопросов.
                  На Apex casino официальный сайт {siteUrl} вы найдете ответы на все вопросы в FAQ разделе.
                </span>
              </li>
            </ul>
          </div>

          <p>
            Миссия Apex casino на адресе {siteUrl} - создать справедливую и прозрачную среду для онлайн-развлечений. Мы верим в ответственный
            гемблинг и уделяем большое внимание защите игроков. Apex casino это казино будущего, где каждый может насладиться
            азартом в комфортной и безопасной обстановке. Наша платформа постоянно развивается, добавляются новые игры и
            улучшаются сервисы. Apex casino играть на {siteUrl} - значит выбрать качество и надежность.
          </p>

          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-4 border border-green-500/20">
            <p className="text-sm md:text-base">
              Apex casino официальный сайт {siteUrl} поддерживает все популярные методы оплаты. Вывод выигрышей на Apex casino происходит
              быстро и без комиссий. Присоединяйтесь к миллионам игроков, которые уже выбрали Apex casino для своих развлечений.
              Apex casino зеркало {siteUrl} всегда доступно, если основной сайт недоступен. На Apex casino играть могут только совершеннолетние
              игроки.
            </p>
          </div>

          <p className="text-xs md:text-sm text-slate-500 italic">
            Apex casino на {siteUrl} - это платформа лицензированная и регулируемая международными органами. Все игры на Apex casino прошли
            независимую сертификацию на честность и случайность. Ответственная игра и защита детей - приоритет для Apex casino.
          </p>
        </div>
      )}
    </section>
  )
}
