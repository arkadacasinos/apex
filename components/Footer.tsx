'use client'

export function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-950/50 border-t border-green-500/10 mt-16">
      <div className="px-4 md:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - App Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Apex
              </span>
              <span className="text-slate-400">Casino</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Apex casino официальный сайт с премиум игровым опытом. На Apex casino играть можно в слоты, лайв-игры и карточные развлечения. Гарантированная безопасность, честная игра и быстрые выводы средств.
            </p>
            <div className="flex gap-4">
              <a href={siteUrl} className="text-slate-400 hover:text-green-400 transition">Мобильное приложение</a>
              <a href={`${siteUrl}/support`} className="text-slate-400 hover:text-green-400 transition">Чат</a>
              <a href={`${siteUrl}/partners`} className="text-slate-400 hover:text-green-400 transition">Партнёры</a>
            </div>
          </div>

          {/* Right - Info Sections */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Информация</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={`${siteUrl}/privacy`} className="hover:text-green-400 transition">Политика конфиденциальности</a></li>
                <li><a href={`${siteUrl}/terms`} className="hover:text-green-400 transition">Условия использования</a></li>
                <li><a href={`${siteUrl}/kyc`} className="hover:text-green-400 transition">Политика КУС</a></li>
                <li><a href={`${siteUrl}/aml`} className="hover:text-green-400 transition">Политика АМЛ</a></li>
                <li><a href={`${siteUrl}/bonuses`} className="hover:text-green-400 transition">Условия бонуса</a></li>
                <li><a href={`${siteUrl}/responsible`} className="hover:text-green-400 transition">Ответственная игра</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Помощь</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={`${siteUrl}/support`} className="hover:text-green-400 transition">Чат поддержки</a></li>
                <li><a href={`${siteUrl}/contact`} className="hover:text-green-400 transition">Контакты</a></li>
                <li><a href={`${siteUrl}/affiliates`} className="hover:text-green-400 transition">Партнёрское</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-slate-400">
                18+
              </div>
              <p className="text-xs text-slate-500">
                Сайт: <a href={siteUrl} className="text-green-400 hover:underline">{siteUrl}</a> является зарегистрированной компанией ООО «Апекс» с регистрационным номером 3-102-521910. Все права защищены.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Апекс казино имеет лицензию на ведение игровой деятельности от уполномоченного регулятора. Играйте ответственно. Сайт использует защищённые каналы передачи данных. Все условия, включая политику конфиденциальности, расположены по адресу {siteUrl}
          </p>
        </div>
      </div>
    </footer>
  )
}
