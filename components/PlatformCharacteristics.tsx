'use client'

export function PlatformCharacteristics() {
  const features = [
    { category: 'Провайдеры', value: '50+ лучших производителей игр' },
    { category: 'Игры', value: '2000+ слотов и лайв-игр' },
    { category: 'Валюты', value: 'RUB, USD, EUR, крипто' },
    { category: 'Бонусы', value: 'До 250% + 900 фриспинов' },
    { category: 'Минимальный депозит', value: '100 рублей' },
    { category: 'Вывод средств', value: 'До 15 минут' },
    { category: 'Лицензия', value: 'Международная лицензия' },
    { category: 'Поддержка', value: 'Круглосуточный чат и телефон' },
    { category: 'Платежные системы', value: 'Pay, MIR, TRON, Tether' },
    { category: 'Мобильное приложение', value: 'iOS и Android' },
  ]

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-gradient-to-r from-blue-950/50 to-slate-950/50 rounded-lg md:rounded-2xl border border-slate-800/50 mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">Характеристики платформы Apex Casino</h2>
        <p className="text-slate-400 mb-8 text-base md:text-lg">
          Основные параметры официального сайта Apex casino и возможности для игроков
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-green-500/30">
                <th className="px-4 py-3 text-left text-green-400 font-semibold">Характеристика Apex Casino</th>
                <th className="px-4 py-3 text-left text-green-400 font-semibold">Значение</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-800/50 hover:bg-slate-800/20 transition"
                >
                  <td className="px-4 py-3 text-slate-300 font-medium">{feature.category}</td>
                  <td className="px-4 py-3 text-green-400">{feature.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 md:p-6 bg-slate-900/50 rounded-lg border border-slate-800/50">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Apex casino официальный сайт предоставляет полный спектр услуг для онлайн-гейминга. 
            На Apex casino вход осуществляется через простую аутентификацию за несколько секунд. 
            Apex casino регистрация совершенно бесплатна и занимает не более одной минуты. 
            Апекс казино входит в список лучших платформ для игры в слоты, лайв и карточные игры.
          </p>
        </div>
      </div>
    </section>
  )
}
