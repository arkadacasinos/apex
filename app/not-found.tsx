export const metadata = {
  title: 'Страница не найдена - Апекс казино',
  description: 'Страница не найдена. Вернитесь на главную страницу Apex casino официального сайта.',
}

export default function NotFound() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="inline-block px-8 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-full mb-6">
            <p className="text-green-400 font-semibold">Страница не найдена</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Упс! Эта страница не существует
        </h2>

        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl">
          К сожалению, страница которую вы ищете на официальном сайте Apex casino, не найдена. Возможно, она была удалена или URL введен неправильно. Вернитесь на главную страницу Апекс казино или воспользуйтесь поиском.
        </p>

        <div className="space-y-4">
          <p className="text-slate-400 mb-6">
            Попробуйте перейти на эти страницы Apex casino:
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-lg font-semibold transition block"
            >
              На главную Apex casino
            </a>
            <a
              href={`${siteUrl}/contact`}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition block"
            >
              Служба поддержки
            </a>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg border border-green-500/20">
            <h3 className="text-green-400 font-semibold mb-3">
              Популярные разделы Apex casino:
            </h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Слоты Apex casino - лучшие игры онлайн
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Apex casino регистрация - получить бонус 250%
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Apex casino вход - быстрый доступ к аккаунту
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Лайв игры Apex casino - играть с дилерами
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            Если проблема сохраняется, обратитесь в службу поддержки Апекс казино на {siteUrl}/contact
          </p>
        </div>
      </div>
    </div>
  )
}
