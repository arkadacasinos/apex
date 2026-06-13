'use client'

import { useState } from 'react'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Что такое Apex casino и как начать играть?',
      answer:
        'Apex casino это официальный портал для онлайн-гейминга с лучшими слотами, лайв-играми и карточными развлечениями. Чтобы начать, посетите Apex casino официальный сайт, нажмите на кнопку регистрации и заполните простую форму. После этого можно сразу же пополнить счет и начать играть. Apex casino вход занимает не более минуты.',
    },
    {
      question: 'Какой приветственный бонус предлагает Apex casino регистрация?',
      answer:
        'При регистрации на Apex casino новые игроки получают щедрый приветственный бонус до 250 процентов от первого депозита плюс 900 фриспинов. Этот бонус можно использовать на слотах и лайв-играх. На Apex casino зеркало условия бонуса те же самые.',
    },
    {
      question: 'Как выполнить вход на Apex casino и восстановить пароль?',
      answer:
        'Apex casino вход осуществляется через главную страницу сайта. Введите свой email или логин и пароль, нажмите кнопку входа. Если вы забыли пароль, нажмите ссылку восстановления на странице входа. На Apex casino официальный сайт восстановление пароля происходит через email за несколько минут.',
    },
    {
      question: 'Какие игры доступны на Apex casino официальный сайт?',
      answer:
        'На Apex casino играть можно в более чем 2000 разных игр. Это включает современные слоты, живые игры с дилерами, карточные игры, рулетку и баккара. Апекс казино регулярно добавляет новые игры от топовых провайдеров. Apex casino вход открывает полный доступ ко всему каталогу.',
    },
    {
      question: 'Безопасна ли игра на Apex casino зеркало?',
      answer:
        'Да, Apex casino имеет международную лицензию и использует новейшие технологии шифрования для защиты данных игроков. Apex casino официальный сайт полностью соответствует всем стандартам безопасности. При регистрации на Apex casino ваши персональные данные защищены надежным SSL сертификатом.',
    },
    {
      question: 'Какие способы пополнения счета доступны на Apex casino?',
      answer:
        'Apex casino принимает платежи через Pay, MIR, TRON, Tether и другие популярные системы. При регистрации на Apex casino вы можете выбрать удобный способ пополнения. После Apex casino вход в личный кабинет просто выберите нужный метод платежа.',
    },
    {
      question: 'Как быстро выводить деньги с Apex casino вход?',
      answer:
        'На Apex casino вывод средств происходит максимум за 15 минут после обработки запроса. Сумма вывода переводится на карту или кошелек, с которого был произведен депозит. Apex casino регистрация не требует дополнительной верификации для стандартных выводов.',
    },
    {
      question: 'Есть ли мобильное приложение Apex casino официальный?',
      answer:
        'Да, Apex casino разработал удобное приложение для iOS и Android. После Apex casino регистрация вы можете скачать приложение и играть в слоты и лайв-игры на смартфоне. На Apex casino зеркало приложения доступны все те же игры, что и на веб-версии.',
    },
    {
      question: 'Как получить статус VIP на Apex casino играть?',
      answer:
        'Статус VIP автоматически присваивается активным игрокам на Apex casino. Чем больше вы играете, тем выше ваш VIP уровень. VIP члены получают кешбэк, приоритетную поддержку и доступ к эксклюзивным турнирам. Apex casino VIP клуб предоставляет максимум привилегий.',
    },
    {
      question: 'Как связаться со службой поддержки Apex casino регистрация?',
      answer:
        'После Apex casino регистрация вы можете обратиться в службу поддержки через живой чат на сайте, по телефону или электронной почте. Служба поддержки Apex casino работает круглосуточно. На Apex casino вход в личный кабинет вы найдете контакты поддержки в меню.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="px-4 md:px-8 py-12 md:py-16 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white text-center">Часто задаваемые вопросы про Apex Casino</h2>
          <p className="text-slate-400 mb-8 md:mb-12 text-center text-base md:text-lg">
            Ответы на самые популярные вопросы об Apex casino официальный сайт, вход, регистрация и играх
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-800/50 rounded-lg overflow-hidden bg-slate-900/30 hover:bg-slate-900/50 transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-slate-800/30 transition text-left"
                >
                  <h3 className="text-slate-200 font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 transition-transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  >
                    <span className="text-lg">+</span>
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-4 md:px-6 py-4 border-t border-slate-800/50 bg-slate-800/10">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <p className="text-slate-300 text-sm md:text-base">
              Не нашли ответ на свой вопрос? Обратитесь в службу поддержки Apex casino. 
              После Apex casino вход в личный кабинет нажмите кнопку чата с оператором.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
