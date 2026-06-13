export const metadata = {
  title: 'Политика конфиденциальности - Апекс казино официальный',
  description: 'Политика конфиденциальности Apex casino. Узнайте как мы защищаем ваши данные на официальном сайте Апекс казино.',
}

export default function PrivacyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Политика конфиденциальности
        </h1>

        <div className="text-slate-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              1. Введение
            </h2>
            <p>
              Апекс казино уважает вашу конфиденциальность и обязуется защищать персональные данные. Эта политика конфиденциальности объясняет, как Apex casino официальный сайт собирает, использует и защищает информацию пользователей на сайте {siteUrl}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              2. Собираемые данные
            </h2>
            <p className="mb-3">
              При регистрации на Apex casino или использовании наших услуг, мы можем собирать:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Личные данные (имя, адрес электронной почты, номер телефона)</li>
              <li>Информацию о платежах и финансовых транзакциях</li>
              <li>Данные об использовании сайта (IP-адрес, браузер, действия)</li>
              <li>Информацию из документов подтверждения личности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              3. Использование данных
            </h2>
            <p className="mb-3">
              Апекс казино использует собранные данные для:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Предоставления услуг на Apex casino официальный</li>
              <li>Проверки личности и выполнения правовых требований</li>
              <li>Улучшения пользовательского опыта на сайте</li>
              <li>Отправки важных уведомлений и информации о бонусах</li>
              <li>Предотвращения мошенничества и обеспечения безопасности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              4. Защита данных
            </h2>
            <p>
              Apex casino играть безопасно потому что мы используем современное шифрование SSL/TLS для защиты всех данных при передаче. Персональные данные хранятся на защищенных серверах с ограниченным доступом. Апекс казино вход и регистрация защищены многоуровневой системой безопасности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              5. Раскрытие данных третьим лицам
            </h2>
            <p>
              Apex casino официальный не продает и не передает личные данные третьим лицам без вашего согласия. Исключение составляют случаи, когда это требуется по закону или для обслуживания платежей через партнеров платежных систем.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              6. Cookies и отслеживание
            </h2>
            <p>
              На сайте Апекс казино используются cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера, но это может повлиять на функциональность Apex casino.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              7. Ваши права
            </h2>
            <p className="mb-3">
              Вы имеете право:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Получить доступ к вашим личным данным</li>
              <li>Запросить исправление неточных данных</li>
              <li>Запросить удаление данных</li>
              <li>Возразить против обработки ваших данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              8. Контактная информация
            </h2>
            <p>
              Для вопросов о конфиденциальности на Apex casino официальный сайте, пожалуйста, свяжитесь с нами по адресу {siteUrl}/contact или через службу поддержки Апекс казино.
            </p>
          </section>

          <section className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-6 border border-green-500/20">
            <p className="text-sm">
              Политика конфиденциальности последний раз обновлена в 2026 году. Апекс казино может изменять эту политику в любое время. Продолжая использовать сайт Apex casino, вы согласны с политикой конфиденциальности на {siteUrl}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
