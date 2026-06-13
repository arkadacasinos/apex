export const metadata = {
  title: 'Контакты - Апекс казино официальный | Служба поддержки',
  description: 'Контакты Apex casino. Свяжитесь со службой поддержки Апекс казино официального сайта. Быстрый ответ на все вопросы.',
}

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Контакты Апекс казино
        </h1>
        <p className="text-slate-300 text-lg mb-12">
          Служба поддержки Apex casino официального сайта работает 24/7. Мы ответим на все ваши вопросы.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Support Methods */}
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-lg p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-green-400 mb-6">
              Способы связи
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Онлайн чат</h3>
                <p className="text-slate-400 mb-3">
                  Быстрый чат на сайте Apex casino для срочных вопросов:
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-6 py-3 rounded-lg font-semibold transition">
                  Открыть чат на {siteUrl}
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Email поддержки</h3>
                <p className="text-slate-400 mb-2">
                  Для подробных вопросов на Apex casino официальный:
                </p>
                <a href="mailto:support@apexcasino.com" className="text-green-400 hover:underline text-lg font-semibold">
                  support@apexcasino.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Отдел верификации</h3>
                <p className="text-slate-400 mb-2">
                  Для вопросов о верификации Apex casino регистрации:
                </p>
                <a href="mailto:verify@apexcasino.com" className="text-green-400 hover:underline font-semibold">
                  verify@apexcasino.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Горячая линия</h3>
                <p className="text-slate-400 mb-2">
                  Срочная поддержка при Apex casino вход проблемах:
                </p>
                <p className="text-green-400 text-lg font-semibold">
                  +7 (800) XXX-XXXX
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-lg p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-green-400 mb-6">
              Форма обратной связи
            </h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-green-500 focus:outline-none text-white placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-green-500 focus:outline-none text-white placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Тип вопроса
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-green-500 focus:outline-none text-white">
                  <option>Выберите категорию</option>
                  <option>Вопрос по регистрации на Apex casino</option>
                  <option>Проблема с вводом на Apex casino</option>
                  <option>Проблема с выводом средств</option>
                  <option>Техническая поддержка Apex casino</option>
                  <option>Вопрос по бонусам Apex casino</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={5}
                  placeholder="Опишите ваш вопрос к Apex casino..."
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-green-500 focus:outline-none text-white placeholder-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Info sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-6 border border-green-500/20">
            <h3 className="text-lg font-bold text-green-400 mb-4">
              Время ответа
            </h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>Онлайн чат Apex casino: ответ в течение 5-15 минут</li>
              <li>Email на сайте Apex casino: ответ в течение 24 часов</li>
              <li>Срочные вопросы при Apex casino вход: горячая линия 24/7</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">
              Офис Апекс казино
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Апекс казино официальный сайт: {siteUrl}
            </p>
            <p className="text-slate-300 text-sm">
              Регистрационный номер: 3-102-521910
            </p>
            <p className="text-slate-300 text-sm mt-2">
              Лицензия выдана уполномоченным регулятором
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
